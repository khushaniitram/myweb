'use client';

import Navbar from '@/components/Navbar';

export default function PageShell({ children }) {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-content">{children}</main>
    </div>
  );
}
