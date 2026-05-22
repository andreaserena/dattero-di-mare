import type { Dish, DishCategory } from '@/types/database';

const LABELS: Record<DishCategory, string> = {
  antipasti: 'Antipasti',
  primi:     'Primi',
  secondi:   'Secondi',
  contorni:  'Contorni',
  dolci:     'Dolci',
  bevande:   'Bevande',
};

interface Props {
  category: DishCategory;
  dishes: Dish[];
}

export default function MenuSection({ category, dishes }: Props) {
  return (
    <section id={category} className="scroll-mt-36">
      <div className="mb-10">
        <h2 className="font-display italic text-3xl font-medium text-sea-text">
          {LABELS[category]}
        </h2>
        <div className="mt-3 w-8 h-px bg-brine/50" />
      </div>

      <ul className="divide-y divide-sea/8">
        {dishes.map((dish) => (
          <li key={dish.id} className="py-5">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-sea-text">
                {dish.name}
              </span>
              <span className="font-sans text-sm font-medium text-brine shrink-0">
                {dish.price}€
              </span>
            </div>
            {dish.description && (
              <p className="font-sans italic text-sm text-sea-soft mt-1 leading-relaxed">
                {dish.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
