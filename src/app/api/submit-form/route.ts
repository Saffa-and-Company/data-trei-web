import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Type definitions for our form data
interface BaseFormData {
  email: string;
  company: string;
  subscribe: boolean;
  timestamp?: string;
}

interface SignupFormData extends BaseFormData {
  role: string;
  useCase: string;
  formType: 'signup';
}

interface ContactFormData extends BaseFormData {
  interest: string;
  comments: string;
  formType: 'contact';
}

type FormData = SignupFormData | ContactFormData;

// Helper function to save submission to a JSON file
async function saveSubmission(data: FormData) {
  const submissionsDir = path.join(process.cwd(), 'data');
  const submissionsFile = path.join(submissionsDir, 'submissions.json');

  try {
    // Create directory if it doesn't exist
    await fs.mkdir(submissionsDir, { recursive: true });

    // Read existing submissions or create empty array
    let submissions: FormData[] = [];
    try {
      const fileContent = await fs.readFile(submissionsFile, 'utf-8');
      submissions = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist or is invalid, start with empty array
    }

    // Add new submission with timestamp
    submissions.push({
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Write back to file
    await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving submission:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.email || !data.company) {
      return NextResponse.json(
        { error: 'Email and company are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save the submission
    const saved = await saveSubmission(data);
    if (!saved) {
      return NextResponse.json(
        { error: 'Error saving submission' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 