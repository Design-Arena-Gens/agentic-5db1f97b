import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flowlist — Minimal Todo',
  description: 'An Apple-inspired mobile todo experience built for focus.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-apple-100 text-neutral-950">
        <div className="flex min-h-screen items-center justify-center py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
