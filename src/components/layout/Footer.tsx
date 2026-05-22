import Link from 'next/link';
import { Fish, MapPin, Phone, Clock } from 'lucide-react';
import { restaurantInfo } from '@/lib/restaurant-info';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/prenotazioni', label: 'Prenotazioni' },
  { href: '/contatti', label: 'Contatti' },
];

export default function Footer() {
  const { address, phone, hours } = restaurantInfo;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Fish className="w-5 h-5 text-amber-400" />
            <span className="font-playfair text-lg font-semibold">Dattero di Mare</span>
          </div>
          <p className="text-white/55 text-sm leading-relaxed">
            Cucina di mare autentica, con pesce fresco selezionato ogni mattina
            dai pescherecci locali.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-5">
            Navigazione
          </h3>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/65 hover:text-white text-sm transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-5">
            Dove Siamo
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-white/65">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber-400/70" />
              {address.full}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-amber-400/70" />
              <a href={phone.href} className="hover:text-white transition-colors">
                {phone.display}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-amber-400/70" />
              <span>
                {hours.weekdays}: {hours.lunch}
                <br />
                {hours.weekdays}: {hours.dinner}
                <br />
                <span className="text-white/40">{hours.closed}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
          <span>© {new Date().getFullYear()} Dattero di Mare. Tutti i diritti riservati.</span>
          <span>P. IVA 00000000000</span>
        </div>
      </div>
    </footer>
  );
}
