import Link from 'next/link';

// Placeholder statico — in Step 4 questo componente leggerà i dati da Supabase
const PLACEHOLDER_DISHES = [
  {
    id: '1',
    name: 'Crudo di mare',
    description: 'Selezione di gamberi rossi, scampi e ostriche del giorno',
    price: 22,
    category: 'Antipasti',
  },
  {
    id: '2',
    name: 'Spaghetti alle vongole',
    description: 'Vongole veraci, aglio, prezzemolo, vino bianco DOC',
    price: 14,
    category: 'Primi',
  },
  {
    id: '3',
    name: 'Frittura di paranza',
    description: 'Piccoli pesci di scoglio fritti, croccanti e leggeri',
    price: 16,
    category: 'Secondi',
  },
];

export default function FeaturedDishes() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3">
            I nostri piatti
          </p>
          <h2 className="font-playfair text-4xl font-bold text-slate-800">
            Le specialità dello chef
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLACEHOLDER_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="rounded-2xl border border-stone-100 overflow-hidden bg-stone-50 hover:shadow-md transition-shadow"
            >
              {/* Placeholder immagine */}
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                <span className="text-5xl opacity-20 select-none">🐟</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-amber-500 uppercase tracking-widest font-medium">
                  {dish.category}
                </span>
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mt-1 mb-2">
                  {dish.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                <span className="font-semibold text-slate-800">€{dish.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-block px-8 py-3 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white rounded-full font-semibold transition-colors"
          >
            Vedi tutto il menu
          </Link>
        </div>
      </div>
    </section>
  );
}
