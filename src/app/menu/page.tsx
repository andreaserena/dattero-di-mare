import type { Metadata } from 'next';
import type { Dish, DishCategory } from '@/types/database';
import { getDishes } from '@/lib/db/dishes';
import MenuHero from '@/components/menu/MenuHero';
import MenuCategoryNav from '@/components/menu/MenuCategoryNav';
import MenuSection from '@/components/menu/MenuSection';

export const metadata: Metadata = {
  title: 'Menu — Dattero di Mare',
  description: 'Scopri i nostri piatti di pesce fresco: antipasti, primi, secondi e dolci.',
};

const CATEGORY_ORDER: DishCategory[] = [
  'antipasti',
  'primi',
  'secondi',
  'contorni',
  'dolci',
  'bevande',
];

export default async function MenuPage() {
  let dishes: Dish[] = [];

  try {
    dishes = await getDishes();
  } catch {
    // Supabase non configurato o errore di rete — mostra stato vuoto
  }

  // Raggruppa per categoria mantenendo l'ordine definito
  const grouped = CATEGORY_ORDER.reduce<Partial<Record<DishCategory, Dish[]>>>(
    (acc, cat) => {
      const items = dishes.filter((d) => d.category === cat);
      if (items.length > 0) acc[cat] = items;
      return acc;
    },
    {},
  );

  const activeCategories = CATEGORY_ORDER.filter((cat) => cat in grouped);

  return (
    <>
      <MenuHero />

      {activeCategories.length > 0 && (
        <MenuCategoryNav categories={activeCategories} />
      )}

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {activeCategories.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-playfair text-2xl text-slate-400">Menu in aggiornamento</p>
            <p className="text-stone-400 text-sm mt-2">
              Torna presto per scoprire i nostri piatti.
            </p>
          </div>
        ) : (
          activeCategories.map((cat) => (
            <MenuSection key={cat} category={cat} dishes={grouped[cat]!} />
          ))
        )}
      </div>
    </>
  );
}
