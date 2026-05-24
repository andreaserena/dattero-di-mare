import type { Metadata } from 'next';
import type { Dish, DishCategory } from '@/types/database';
import Script from 'next/script';
import { getDishes } from '@/lib/db/dishes';
import { getMenuSchema } from '@/lib/structured-data';
import MenuHero from '@/components/menu/MenuHero';
import MenuCategoryNav from '@/components/menu/MenuCategoryNav';
import MenuSection from '@/components/menu/MenuSection';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    "Antipasti e crudi d'autore, primi di mare, secondi di pesce fresco e dolci: il menu completo del Dattero di Mare a L'Aquila. Aggiornato ogni settimana.",
  alternates: { canonical: '/menu' },
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

  const grouped = CATEGORY_ORDER.reduce<Partial<Record<DishCategory, Dish[]>>>(
    (acc, cat) => {
      const items = dishes.filter((d) => d.category === cat);
      if (items.length > 0) acc[cat] = items;
      return acc;
    },
    {},
  );

  const activeCategories = CATEGORY_ORDER.filter((cat) => cat in grouped);

  const menuSchemaJson = dishes.length > 0
    ? JSON.stringify(getMenuSchema(dishes)).replace(/</g, '\\u003c')
    : null;

  return (
    <>
      {menuSchemaJson && (
        <Script
          id="menu-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: menuSchemaJson }}
        />
      )}

      <MenuHero />

      {activeCategories.length > 0 && (
        <MenuCategoryNav categories={activeCategories} />
      )}

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {activeCategories.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display italic text-2xl text-sea-soft">Menu in aggiornamento</p>
            <p className="font-sans text-sea-soft text-sm mt-2">
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
