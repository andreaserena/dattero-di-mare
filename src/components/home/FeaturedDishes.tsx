import Link from 'next/link';

const PLACEHOLDER_DISHES = [
  {
    id: '1',
    name: `Plateau Dattero`,
    description: `Selezione di crudi del giorno: tartare, carpaccio, ostriche`,
    price: 35,
    category: 'Crudi',
  },
  {
    id: '2',
    name: 'Linguine alle vongole veraci',
    description: `Vongole del giorno, aglio, vino bianco, prezzemolo`,
    price: 18,
    category: 'Primi',
  },
  {
    id: '3',
    name: 'Ricciola scottata',
    description: `Cipollotto fondente, mela verde, olio del Garda`,
    price: 26,
    category: 'Secondi',
  },
];

export default function FeaturedDishes() {
  return (
    <section className="py-32 px-4 bg-sand-deep">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-sans text-brine text-xs font-medium uppercase tracking-[0.25em] mb-4">
            I nostri piatti
          </p>
          <h2 className="font-display italic text-4xl font-medium text-sea-text">
            Le specialità dello chef
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLACEHOLDER_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="border border-sea/10 hover:border-brine/40 transition-colors bg-sand"
            >
              {/* Image placeholder */}
              <div className="h-52 bg-sand-deep flex items-center justify-center">
                <div className="w-8 h-0.5 bg-brine/30" />
              </div>
              <div className="p-6">
                <span className="font-sans text-xs text-brine uppercase tracking-widest font-medium">
                  {dish.category}
                </span>
                <h3 className="font-display italic text-xl text-sea-text mt-2 mb-2">{dish.name}</h3>
                <p className="font-sans text-sea-soft text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                <span className="font-sans font-medium text-sea-text">{dish.price}€</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/menu"
            className="font-sans inline-block px-8 py-3 border border-sea/20 hover:border-brine text-sea-text hover:text-brine transition-colors"
          >
            Vedi tutto il menu
          </Link>
        </div>
      </div>
    </section>
  );
}
