import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, #0d2137 0%, #1a4a70 50%, #1a5f6e 100%)',
        }}
      />

      {/* Soft light accents */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 15% 85%, rgba(255,255,255,0.12) 0%, transparent 55%),' +
            'radial-gradient(ellipse at 85% 15%, rgba(80,180,200,0.18) 0%, transparent 55%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-[0.35em] mb-6">
          Ristorante di Pesce
        </p>

        <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
          Il mare nel piatto,
          <br />
          <em className="text-amber-400 not-italic">ogni giorno</em>
        </h1>

        <p className="text-white/65 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Pesce fresco selezionato ogni mattina, ricette della tradizione marinara
          reinterpretate con cura.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/prenotazioni"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-full transition-colors"
          >
            Prenota un tavolo
          </Link>
          <Link
            href="/menu"
            className="px-8 py-4 border border-white/35 hover:border-white/70 text-white rounded-full transition-colors hover:bg-white/5"
          >
            Scopri il menu
          </Link>
        </div>
      </div>

      {/* Bottom fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
