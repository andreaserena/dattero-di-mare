import type { Metadata } from 'next';
import Image from 'next/image';
import { Waves, ChefHat, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chi Siamo — Dattero di Mare',
  description:
    'La storia del Dattero di Mare: una famiglia ligure, il mare, la tradizione della cucina marinara e la passione per il pesce fresco.',
};

const VALORI = [
  {
    Icon: Waves,
    title: 'Materia prima locale',
    description:
      'Lavoriamo ogni giorno con i pescherecci del porto di Genova. Il pesce arriva in cucina al mattino, in tavola la sera.',
  },
  {
    Icon: ChefHat,
    title: 'Cucina di tradizione',
    description:
      'Le nostre ricette affondano le radici nella cucina marinara ligure. Pochi ingredienti, tecnica consolidata, nessun compromesso.',
  },
  {
    Icon: Heart,
    title: 'Accoglienza familiare',
    description:
      `Siamo un ristorante di famiglia, aperto da oltre vent'anni. Ogni ospite è il benvenuto come tale.`,
  },
];

const TEAM = [
  {
    name: 'Marco Serena',
    role: 'Chef e fondatore',
    image: '/images/team/chef.jpg', // TODO: aggiungere foto reale in /public/images/team/
  },
  {
    name: 'Laura Serena',
    role: 'Responsabile di sala',
    image: '/images/team/sala.jpg', // TODO: aggiungere foto reale in /public/images/team/
  },
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
          La nostra storia
        </p>
        <h1 className="font-playfair text-5xl font-bold">Chi siamo</h1>
        <p className="text-white/55 mt-4 max-w-md mx-auto text-sm leading-relaxed">
          Una famiglia, il mare di Liguria e trent'anni di cucina vissuta con passione.
        </p>
      </div>

      {/* Storia */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-slate-800 mb-6">La nostra storia</h2>
          {/* TODO: testo definitivo da fornire */}
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Il Dattero di Mare nasce nel cuore del porto di Genova, dove ogni mattina i pescherecci
              scaricano il loro pescato fresco. Fondato da Marco Serena negli anni Novanta, il ristorante
              è cresciuto attorno a un'idea semplice: portare in tavola solo ciò che il mare offre ogni
              giorno, senza concessioni alla stagionalità o alla qualità.
            </p>
            <p>
              Nel corso degli anni abbiamo affinato il menu, mantenendo sempre al centro le ricette della
              tradizione marinara ligure: il buridda, il brandacujun, le acciughe in salsa verde.
              Piatti che raccontano un territorio e una cultura gastronomica che vale la pena preservare.
            </p>
            <p>
              Oggi il Dattero di Mare è gestito insieme a Laura, responsabile di sala, e a un piccolo
              team che condivide gli stessi valori. Un posto dove si mangia bene, in un'atmosfera
              familiare che fa sentire ogni ospite a casa.
            </p>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="bg-stone-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-slate-800 text-center mb-12">
            La nostra filosofia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALORI.map(({ Icon, title, description }) => (
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
        </div>
      </section>

      {/* Il team */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-slate-800 text-center mb-12">
            Il team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {TEAM.map(({ name, role, image }) => (
              <div key={name} className="flex flex-col items-center text-center gap-4">
                <div className="relative w-40 h-40 rounded-full overflow-hidden bg-stone-100">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <div>
                  <p className="font-playfair text-xl font-semibold text-slate-800">{name}</p>
                  <p className="text-stone-500 text-sm mt-1">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
