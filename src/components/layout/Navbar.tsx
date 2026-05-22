'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Fish, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/contatti', label: 'Contatti' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white">
          <Fish className="w-5 h-5 text-amber-400" />
          <span className="font-playfair text-xl font-semibold tracking-wide">
            Dattero di Mare
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'text-sm tracking-wide transition-colors',
                  pathname === href
                    ? 'text-amber-400 font-medium'
                    : 'text-white/75 hover:text-white',
                )}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/prenotazioni"
              className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold rounded-full transition-colors"
            >
              Prenota
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 px-4 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                'text-base',
                pathname === href ? 'text-amber-400 font-medium' : 'text-white/75',
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/prenotazioni"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-full transition-colors"
          >
            Prenota un tavolo
          </Link>
        </div>
      )}
    </header>
  );
}
