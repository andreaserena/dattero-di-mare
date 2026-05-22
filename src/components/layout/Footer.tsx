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
    <footer className="bg-sea text-sand">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Fish className="w-5 h-5 text-brine" />
            <span className="font-display italic text-lg font-semibold">Il Dattero di Mare</span>
          </div>
          <p className="font-sans text-sand/55 text-sm leading-relaxed">
            Cucina di mare a L&apos;Aquila. Crudi d&apos;autore e pesce fresco
            nel cuore dell&apos;Abruzzo.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-brine mb-5">
            Navigazione
          </h3>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-sans text-sand/65 hover:text-sand text-sm transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-brine mb-5">
            Dove Siamo
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-sand/65">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brine/70" />
              <span className="font-sans">{address.full}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-brine/70" />
              <a href={phone.href} className="font-sans hover:text-sand transition-colors">
                {phone.display}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-brine/70" />
              <span className="font-sans">
                {hours.weekdays}: {hours.lunch}<br />
                {hours.weekdays}: {hours.dinner}<br />
                {hours.sundayLunchOnly}<br />
                <span className="text-sand/40">{hours.closed}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-sand/35 font-sans">
          <span>© {new Date().getFullYear()} Il Dattero di Mare. Tutti i diritti riservati.</span>
          <span>P. IVA 00000000000</span>
        </div>
      </div>
    </footer>
  );
}
