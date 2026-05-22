import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { restaurantInfo } from '@/lib/restaurant-info';

export const metadata: Metadata = {
  title: `Contatti — Il Dattero di Mare`,
  description: `Come raggiungerci, orari di apertura e recapiti del Dattero di Mare a L'Aquila.`,
};

export default function ContattiPage() {
  const { address, phone, email, hours, social, mapEmbedUrl } = restaurantInfo;

  return (
    <>
      {/* Hero */}
      <div className="bg-sand py-24 px-4 text-center border-b border-brine/15">
        <p className="font-sans text-brine text-xs font-medium uppercase tracking-[0.25em] mb-4">
          Vieni a trovarci
        </p>
        <h1 className="font-display italic text-6xl text-sea-text font-light">
          Contatti
        </h1>
        <p className="font-sans text-sea-soft mt-5 max-w-md mx-auto text-sm leading-relaxed">
          Siamo a {address.city}. Prenota o scrivici per qualsiasi esigenza.
        </p>
      </div>

      {/* Info + Mappa */}
      <section className="bg-sand py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Colonna sinistra — Info pratiche */}
          <div className="space-y-8">
            <h2 className="font-display italic text-2xl font-medium text-sea-text">Informazioni pratiche</h2>

            <ul className="space-y-7">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-brine" />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sea-soft mb-1">Indirizzo</p>
                  <p className="font-sans text-sea-text text-sm">{address.street}</p>
                  <p className="font-sans text-sea-text text-sm">{address.zip} {address.city} ({address.province})</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Phone className="w-4 h-4 mt-1 shrink-0 text-brine" />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sea-soft mb-1">Telefono</p>
                  <a href={phone.href} className="font-sans text-sea-text text-sm hover:text-brine transition-colors block">
                    {phone.display}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="w-4 h-4 mt-1 shrink-0 text-brine" />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sea-soft mb-1">Email</p>
                  <a href={email.href} className="font-sans text-sea-text text-sm hover:text-brine transition-colors break-all">
                    {email.display}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Clock className="w-4 h-4 mt-1 shrink-0 text-brine" />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sea-soft mb-1">Orari</p>
                  <p className="font-sans text-sea-text text-sm">{hours.weekdays}: {hours.lunch}</p>
                  <p className="font-sans text-sea-text text-sm">{hours.weekdays}: {hours.dinner}</p>
                  <p className="font-sans text-sea-text text-sm">{hours.sundayLunchOnly}</p>
                  <p className="font-sans text-sea-soft text-sm mt-1">{hours.closed}</p>
                </div>
              </li>
            </ul>

            <Link
              href="/prenotazioni"
              className="font-sans inline-block px-7 py-3 bg-sea hover:bg-sea-light text-sand font-semibold transition-colors text-sm"
            >
              Prenota un tavolo
            </Link>
          </div>

          {/* Colonna destra — Mappa */}
          <div className="h-full min-h-[400px]">
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full min-h-[400px] border-0 grayscale"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Posizione del ristorante Il Dattero di Mare`}
            />
          </div>
        </div>
      </section>

      {/* Seguici */}
      <section className="bg-sand-deep py-16 px-4 border-t border-sea/8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display italic text-2xl font-medium text-sea-text mb-3">Seguici</h2>
          <p className="font-sans text-sea-soft text-sm mb-8">
            Aggiornamenti sul menu, eventi speciali e il meglio del pesce fresco.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={social.instagram}
              aria-label="Instagram"
              className="font-sans flex items-center gap-2 px-5 py-2.5 border border-sea/15 text-sea-soft hover:border-brine hover:text-brine transition-colors text-sm"
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
            <a
              href={social.facebook}
              aria-label="Facebook"
              className="font-sans flex items-center gap-2 px-5 py-2.5 border border-sea/15 text-sea-soft hover:border-brine hover:text-brine transition-colors text-sm"
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
