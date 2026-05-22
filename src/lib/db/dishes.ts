import { supabase } from '@/lib/supabase/client';
import type { Dish, DishCategory } from '@/types/database';

export async function getDishes(): Promise<Dish[]> {
  const { data, error } = await supabase
    .from('dishes')
    .select('*')
    .eq('available', true)
    .order('order_index', { ascending: true });

  if (error) throw new Error(`getDishes: ${error.message}`);
  return (data ?? []) as Dish[];
}

export async function getDishesByCategory(category: DishCategory): Promise<Dish[]> {
  const { data, error } = await supabase
    .from('dishes')
    .select('*')
    .eq('available', true)
    .eq('category', category)
    .order('order_index', { ascending: true });

  if (error) throw new Error(`getDishesByCategory: ${error.message}`);
  return (data ?? []) as Dish[];
}
