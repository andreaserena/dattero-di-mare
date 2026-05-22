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
      { rootMargin: '-30% 0px -65% 0px' },
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <div className="sticky top-20 z-40 bg-sand/95 backdrop-blur-sm border-b border-sea/10">
      <div className="max-w-6xl mx-auto px-4 overflow-x-auto scrollbar-hide">
        <ul className="flex min-w-max">
          {categories.map((cat) => (
            <li key={cat}>
              <a
                href={`#${cat}`}
                className={cn(
                  'font-sans inline-block px-5 py-4 text-xs font-medium border-b-2 transition-colors uppercase tracking-[0.2em]',
                  active === cat
                    ? 'border-brine text-brine'
                    : 'border-transparent text-sea-text/45 hover:text-sea-text',
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
