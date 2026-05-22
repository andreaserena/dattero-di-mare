import type { Dish, DishCategory } from '@/types/database';
import DishCard from './DishCard';

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
      <div className="mb-8">
        <h2 className="font-playfair text-3xl font-bold text-slate-800">
          {LABELS[category]}
        </h2>
        <div className="mt-2 w-10 h-0.5 bg-amber-400 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
}
