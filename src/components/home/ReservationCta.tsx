import Link from 'next/link';

export default function ReservationCta() {
  return (
    <section className="py-24 px-4 bg-slate-900 text-white text-center">
      <div className="max-w-xl mx-auto">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
          Riserva il tuo momento
        </p>
        <h2 className="font-playfair text-4xl font-bold mb-6">
          Prenota il tuo tavolo
        </h2>
        <p className="text-white/55 mb-10 leading-relaxed">
          Scegli la data e l'orario che preferisci. Ti confermeremo la prenotazione entro breve.
        </p>
        <Link
          href="/prenotazioni"
          className="inline-block px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-full transition-colors"
        >
          Prenota ora
        </Link>
      </div>
    </section>
  );
}
