'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import type { DishCategory } from '@/types/database';

const LABELS: Record<DishCategory, string> = {
  antipasti: 'Antipasti',
  primi:     'Primi',
  secondi:   'Secondi',
  contorni:  'Contorni',
  dolci:     'Dolci',
  bevande:   'Bevande',
};

interface Props {
  categories: DishCategory[];
}

export default function MenuCategoryNav({ categories }: Props) {
  const [active, setActive] = useState<DishCategory>(categories[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as DishCategory);
          }
        });
      },
      // Trigger quando la sezione occupa la fascia centrale dello schermo
      { rootMargin: '-30% 0px -65% 0px' },
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <div className="sticky top-20 z-40 bg-white/92 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 overflow-x-auto scrollbar-hide">
        <ul className="flex min-w-max">
          {categories.map((cat) => (
            <li key={cat}>
              <a
                href={`#${cat}`}
                className={cn(
                  'inline-block px-5 py-4 text-sm font-medium border-b-2 transition-colors',
                  active === cat
                    ? 'border-amber-500 text-amber-600'
                    : 'border-transparent text-stone-500 hover:text-stone-800',
                )}
              >
                {LABELS[cat]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
