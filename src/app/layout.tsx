import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Data Trei",
  description: "Data Trei - Modern Data Management Platform",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/lightfavicon.svg',
        href: '/lightfavicon.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/darkfavicon.svg',
        href: '/darkfavicon.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
