import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { restaurantInfo } from '@/lib/restaurant-info';

export const metadata: Metadata = {
  title: 'Contatti — Dattero di Mare',
  description:
    'Come raggiungerci, orari di apertura e recapiti del Dattero di Mare. Siamo a Genova, nel cuore del porto.',
};

export default function ContattiPage() {
  const { address, phone, email, hours, social, mapEmbedUrl } = restaurantInfo;

  return (
    <>
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Vieni a trovarci
        </p>
        <h1 className="font-playfair text-5xl font-bold">Contatti</h1>
        <p className="text-white/55 mt-4 max-w-md mx-auto text-sm leading-relaxed">
          Siamo a {address.city}, nel cuore del porto. Prenota o scrivici per qualsiasi esigenza.
        </p>
      </div>

      {/* Info + Mappa */}
      <section className="bg-stone-50 py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Colonna sinistra — Info pratiche */}
          <div className="space-y-8">
            <h2 className="font-playfair text-2xl font-bold text-slate-800">Informazioni pratiche</h2>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Indirizzo</p>
                  <p className="text-slate-700">{address.street}</p>
                  <p className="text-slate-700">{address.zip} {address.city}</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Telefono</p>
                  <a href={phone.href} className="text-slate-700 hover:text-amber-600 transition-colors">
                    {phone.display}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Email</p>
                  <a href={email.href} className="text-slate-700 hover:text-amber-600 transition-colors break-all">
                    {email.display}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Orari</p>
                  <p className="text-slate-700">{hours.weekdays}: {hours.lunch}</p>
                  <p className="text-slate-700">{hours.weekdays}: {hours.dinner}</p>
                  <p className="text-stone-400 text-sm mt-1">{hours.closed}</p>
                </div>
              </li>
            </ul>

            <Link
              href="/prenotazioni"
              className="inline-block px-7 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-full transition-colors text-sm"
            >
              Prenota un tavolo
            </Link>
          </div>

          {/* Colonna destra — Mappa */}
          <div className="h-full min-h-[360px]">
            {/* TODO: sostituire embed con indirizzo reale del ristorante */}
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full min-h-[360px] rounded-xl border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Posizione del ristorante Dattero di Mare"
            />
          </div>
        </div>
      </section>

      {/* Seguici */}
      <section className="bg-white py-16 px-4 border-t border-stone-100">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-playfair text-2xl font-bold text-slate-800 mb-3">Seguici</h2>
          <p className="text-stone-500 text-sm mb-8">
            Aggiornamenti sul menu, eventi speciali e il meglio del porto di Genova.
          </p>
          <div className="flex items-center justify-center gap-4">
            {/* TODO: sostituire href="#" con URL profilo Instagram reale */}
            <a
              href={social.instagram}
              aria-label="Instagram"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 text-slate-600 hover:border-amber-400 hover:text-amber-600 transition-colors text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Instagram
            </a>
            {/* TODO: sostituire href="#" con URL pagina Facebook reale */}
            <a
              href={social.facebook}
              aria-label="Facebook"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 text-slate-600 hover:border-amber-400 hover:text-amber-600 transition-colors text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
