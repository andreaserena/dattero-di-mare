import Link from 'next/link';

export default function ReservationCta() {
  return (
    <section className="py-28 px-4 bg-sand text-center">
      <div className="max-w-xl mx-auto">
        <p className="font-sans text-brine text-xs font-medium uppercase tracking-[0.25em] mb-4">
          Riserva il tuo momento
        </p>
        <h2 className="font-display italic text-4xl font-medium text-sea-text mb-6">
          Prenota il tuo tavolo
        </h2>
        <p className="font-sans text-sea-soft mb-10 leading-relaxed">
          Scegli la data e l&apos;orario che preferisci. Ti confermeremo la prenotazione entro breve.
        </p>
        <Link
          href="/prenotazioni"
          className="font-sans inline-block px-10 py-4 bg-sea hover:bg-sea-light text-sand font-semibold transition-colors"
        >
          Prenota ora
        </Link>
      </div>
    </section>
  );
}
