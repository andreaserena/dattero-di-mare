import { Gem, Fish, Mountain } from 'lucide-react';

const ITEMS = [
  {
    Icon: Gem,
    title: `Crudi d'autore`,
    description: `Tartare, carpacci e ostriche freschissime. Il crudo è la nostra firma.`,
  },
  {
    Icon: Fish,
    title: 'Materia prima eccellente',
    description: `Filiera diretta dal nostro pescato. Trent'anni di esperienza nel commercio ittico di famiglia.`,
  },
  {
    Icon: Mountain,
    title: 'Radici abruzzesi',
    description: `Pesce di mare, anima di montagna. Vini locali, grani antichi, ingredienti del territorio.`,
  },
];

export default function Highlights() {
  return (
    <section className="py-32 px-4 bg-sand">
      <div className="max-w-5xl mx-auto">
        <p className="font-sans text-brine text-xs font-medium uppercase tracking-[0.25em] text-center mb-16">
          La nostra filosofia
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {ITEMS.map(({ Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center gap-6">
              <Icon className="w-7 h-7 text-brine" />
              <h3 className="font-display italic text-2xl font-medium text-sea-text">{title}</h3>
              <p className="font-sans text-sea-soft leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
