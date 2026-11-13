'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NAV_ITEMS = [
  { value: '/', label: 'Home' },
  { value: '/about', label: 'About' },
  { value: '/projects', label: 'Projects' },
  { value: '/skills', label: 'Skills' },
  { value: '/experience', label: 'Experience' },
  { value: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="editorial-nav">
      <Link href="/" className="editorial-nav__brand" aria-label="Khushan Borse, home">
        Khushan Borse
      </Link>
      <nav className="editorial-nav__links" aria-label="Main navigation" suppressHydrationWarning>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.value}
            href={item.value}
            className="editorial-nav__link"
            aria-current={mounted && pathname === item.value ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
