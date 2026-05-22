import Image from 'next/image';
import type { Dish } from '@/types/database';

interface Props {
  dish: Dish;
}

export default function DishCard({ dish }: Props) {
  return (
    <div className="flex gap-4 p-4 rounded-xl border border-stone-100 bg-white hover:border-stone-200 hover:shadow-sm transition-all">

      {/* Immagine o placeholder */}
      {dish.image_url ? (
        <Image
          src={dish.image_url}
          alt={dish.name}
          width={96}
          height={96}
          className="w-24 h-24 rounded-lg object-cover shrink-0"
        />
      ) : (
        <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 shrink-0 flex items-center justify-center text-2xl opacity-40 select-none">
          🐟
        </div>
      )}

      {/* Testo */}
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-playfair text-lg font-semibold text-slate-800 leading-tight">
            {dish.name}
          </h3>
          <span className="font-semibold text-slate-800 whitespace-nowrap shrink-0">
            €{dish.price.toFixed(2)}
          </span>
        </div>

        {dish.description && (
          <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
            {dish.description}
          </p>
        )}

        {dish.allergens.length > 0 && (
          <p className="text-xs text-stone-400 mt-auto pt-1">
            Allergeni: {dish.allergens.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
}
