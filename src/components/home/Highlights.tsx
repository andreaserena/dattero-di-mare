import { Fish, Leaf, Anchor } from 'lucide-react';

const ITEMS = [
  {
    Icon: Fish,
    title: 'Pesce fresco ogni giorno',
    description:
      'Selezioniamo personalmente il pescato ogni mattina dai pescherecci del porto locale.',
  },
  {
    Icon: Leaf,
    title: 'Ingredienti del territorio',
    description:
      'Verdure e ortaggi di stagione dai produttori della zona, per accompagnare ogni piatto.',
  },
  {
    Icon: Anchor,
    title: 'Tradizione marinara',
    description:
      'Ricette tramandate di generazione in generazione, preparate con tecnica e passione.',
  },
];

export default function Highlights() {
  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {ITEMS.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-5 p-8 rounded-2xl bg-white shadow-sm border border-stone-100"
          >
            <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-slate-800">{title}</h3>
            <p className="text-stone-500 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
