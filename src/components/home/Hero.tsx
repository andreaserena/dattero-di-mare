import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-sea overflow-hidden">
      {/* Warm glow accent */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 60% 40%, #7ba7a4 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-sand px-4 max-w-3xl mx-auto">
        <p className="font-sans text-brine text-xs font-medium uppercase tracking-[0.4em] mb-8">
          Boutique del pesce fresco
        </p>

        <h1 className="font-display italic text-6xl sm:text-7xl md:text-8xl font-semibold leading-[1.05] mb-8">
          Il Dattero<br />
          <span className="text-brine">di Mare</span>
        </h1>

        <p className="font-sans text-sand/65 text-lg sm:text-xl max-w-md mx-auto mb-12 leading-relaxed">
          Crudi d&apos;autore, pesce fresco selezionato ogni giorno.<br />
          L&apos;Aquila, cuore d&apos;Abruzzo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/prenotazioni"
            className="font-sans px-8 py-4 bg-brine hover:bg-brine-deep text-sea font-semibold transition-colors"
          >
            Prenota un tavolo
          </Link>
          <Link
            href="/menu"
            className="font-sans px-8 py-4 border border-sand/25 hover:border-sand/60 text-sand transition-colors hover:bg-sand/5"
          >
            Scopri il menu
          </Link>
        </div>
      </div>

      {/* Bottom fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand to-transparent" />
    </section>
  );
}
