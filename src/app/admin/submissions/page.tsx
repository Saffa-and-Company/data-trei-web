'use client';

import { useState, useEffect } from 'react';
import { ArrowUpDown, Download } from 'lucide-react';

interface Submission {
  email: string;
  company: string;
  formType: 'signup' | 'contact';
  role?: string;
  useCase?: string;
  interest?: string;
  comments?: string;
  subscribe: boolean;
  timestamp: string;
}

export default function SubmissionsDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('all'); // all, signup, contact
  const [sortField, setSortField] = useState<keyof Submission>('timestamp');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions();
    }
  }, [isAuthenticated]);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/submissions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }
      const data = await response.json();
      setSubmissions(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load submissions');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setIsAuthenticated(true);
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Authentication failed');
    }
  };

  const handleSort = (field: keyof Submission) => {
    if (field === sortField) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedSubmissions = submissions
    .filter(sub => filter === 'all' || sub.formType === filter)
    .sort((a, b) => {
      const aValue = a[sortField]?.toString() ?? '';
      const bValue = b[sortField]?.toString() ?? '';
      const direction = sortDirection === 'asc' ? 1 : -1;
      return aValue < bValue ? -1 * direction : 1 * direction;
    });

  const downloadCsv = () => {
    const headers = ['Email', 'Company', 'Form Type', 'Role/Interest', 'Use Case/Comments', 'Subscribe', 'Timestamp'];
    const rows = filteredAndSortedSubmissions.map(sub => [
      sub.email,
      sub.company,
      sub.formType,
      sub.formType === 'signup' ? sub.role : sub.interest,
      sub.formType === 'signup' ? sub.useCase : sub.comments,
      sub.subscribe ? 'Yes' : 'No',
      new Date(sub.timestamp).toLocaleString()
    ]);

    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell || ''}"`).join(',')).join('\\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `submissions-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          <form onSubmit={handleAuth} className="space-y-4">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-medium transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Form Submissions</h1>
          <button
            onClick={downloadCsv}
            className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </button>
        </div>

        <div className="mb-6 flex gap-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">All Submissions</option>
            <option value="signup">Signup Forms</option>
            <option value="contact">Contact Forms</option>
          </select>
        </div>

        {isLoading ? (
          <div className="text-center py-12">Loading submissions...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-left">
                    <button
                      className="flex items-center text-sm font-medium text-gray-300 hover:text-white"
                      onClick={() => handleSort('timestamp')}
                    >
                      Date
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                  </th>
                  <th className="py-3 px-4 text-left">
                    <button
                      className="flex items-center text-sm font-medium text-gray-300 hover:text-white"
                      onClick={() => handleSort('email')}
                    >
                      Email
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                  </th>
                  <th className="py-3 px-4 text-left">
                    <button
                      className="flex items-center text-sm font-medium text-gray-300 hover:text-white"
                      onClick={() => handleSort('company')}
                    >
                      Company
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                  </th>
                  <th className="py-3 px-4 text-left">Form Type</th>
                  <th className="py-3 px-4 text-left">Details</th>
                  <th className="py-3 px-4 text-left">Subscribe</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedSubmissions.map((submission, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5"
                  >
                    <td className="py-3 px-4 text-sm">
                      {new Date(submission.timestamp).toLocaleString()}
                    </td>
                    <td className="py-3 px-4">{submission.email}</td>
                    <td className="py-3 px-4">{submission.company}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        submission.formType === 'signup'
                          ? 'bg-blue-500/10 text-blue-500'
                          : 'bg-purple-500/10 text-purple-500'
                      }`}>
                        {submission.formType}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {submission.formType === 'signup' ? (
                        <>
                          <div className="text-sm">{submission.role}</div>
                          <div className="text-sm text-gray-400">{submission.useCase}</div>
                        </>
                      ) : (
                        <>
                          <div className="text-sm">{submission.interest}</div>
                          <div className="text-sm text-gray-400">{submission.comments}</div>
                        </>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        submission.subscribe
                          ? 'bg-emerald-500/10 text-emerald-500'
                          : 'bg-gray-500/10 text-gray-500'
                      }`}>
                        {submission.subscribe ? 'Yes' : 'No'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 