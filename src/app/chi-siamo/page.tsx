import type { Metadata } from 'next';
import { Gem, Fish, Mountain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chi siamo',
  description:
    "La storia del Dattero di Mare: Valerio Di Loreto, trent'anni di famiglia nel commercio ittico, e Maurizio Zanon in cucina. Pesce fresco a L'Aquila dal primo giorno.",
  alternates: { canonical: '/chi-siamo' },
};

const VALORI = [
  {
    Icon: Gem,
    title: `Crudi d'autore`,
    description: `Tartare, carpacci e ostriche freschissime. Il crudo è la nostra firma: tecnica precisa, materia prima italiana.`,
  },
  {
    Icon: Fish,
    title: 'Filiera diretta',
    description: `Trent'anni di esperienza nel commercio ittico di famiglia. Sappiamo da dove viene ogni pesce che serviamo.`,
  },
  {
    Icon: Mountain,
    title: 'Radici abruzzesi',
    description: `Pesce di mare, anima di montagna. Vini locali, grani antichi, ingredienti del territorio abruzzese.`,
  },
];

const TEAM = [
  { name: 'Valerio Di Loreto', role: 'Patron / Fondatore' },
  { name: 'Maurizio Zanon', role: 'Chef' },
];

export default function ChiSiamoPage() {
  return (
    <>
      <div className="bg-sand py-24 px-4 text-center border-b border-brine/15">
        <p className="font-sans text-brine text-xs font-medium uppercase tracking-[0.25em] mb-4">
          La nostra storia
        </p>
        <h1 className="font-display italic text-6xl text-sea-text font-light">
          Chi siamo
        </h1>
        <p className="font-sans text-sea-soft mt-5 max-w-md mx-auto text-sm leading-relaxed">
          {`Una famiglia nel mare, un ristorante nel cuore dell'Abruzzo.`}
        </p>
      </div>

      <section className="bg-sand py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-brine text-xs font-medium uppercase tracking-[0.25em] mb-8">
            Le origini
          </p>
          <div className="space-y-6 font-sans text-sea-soft leading-relaxed text-base">
            <p>
              {`Il Dattero nasce nel quartiere Torrione de L'Aquila, per volontà di Valerio Di Loreto. La storia di famiglia con il mare comincia molto prima: suo padre Maurizio ha dedicato trent'anni al commercio ittico, costruendo una rete di fornitori e un fiuto per la qualità che Valerio ha fatto proprio fin da giovane.`}
            </p>
            <p>
              {`Il nome non è casuale. Il dattero di mare è un mollusco raro, dalla forma allungata e dal sapore intenso e persistente — quello che i giapponesi chiamerebbero umami. È la filosofia del ristorante in una sola parola: ingredienti che parlano da soli, preparazioni che li rispettano.`}
            </p>
            <p>
              {`Oggi in cucina c'è Maurizio Zanon, che porta al Dattero la sua interpretazione della cucina di mare in dialogo con il territorio abruzzese. Il ristorante si trova nel centro de L'Aquila, a pochi passi dalla storia della città.`}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand-deep py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-brine text-xs font-medium uppercase tracking-[0.25em] text-center mb-16">
            La nostra filosofia
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {VALORI.map(({ Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center gap-6">
                <Icon className="w-7 h-7 text-brine" />
                <h3 className="font-display italic text-2xl font-medium text-sea-text">{title}</h3>
                <p className="font-sans text-sea-soft leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-brine text-xs font-medium uppercase tracking-[0.25em] text-center mb-16">
            Le persone
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {TEAM.map(({ name, role }) => (
              <div key={name} className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 border border-brine/25 flex items-center justify-center">
                  <div className="w-6 h-px bg-brine/40" />
                </div>
                <div>
                  <p className="font-display italic text-xl font-medium text-sea-text">{name}</p>
                  <p className="font-sans text-xs text-brine uppercase tracking-[0.2em] font-medium mt-1">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
