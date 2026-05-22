import { getSupabaseAdmin } from '@/lib/supabase/admin';
import type { Booking, BookingInsert } from '@/types/database';

const LUNCH_SLOTS = ['12:30', '13:00', '13:30', '14:00', '14:30'];
const DINNER_SLOTS = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];

export async function createBooking(data: BookingInsert): Promise<Booking> {
  const { data: booking, error } = await getSupabaseAdmin()
    .from('bookings')
    .insert(data)
    .select()
    .single();

  if (error) throw new Error(`createBooking: ${error.message}`);
  return booking as Booking;
}

export async function getAvailableSlots(date: string): Promise<string[]> {
  const [year, month, day] = date.split('-').map(Number);
  const d = new Date(year, month - 1, day);
  const dow = d.getDay();
  if (dow === 1) return [];
  if (dow === 0) return LUNCH_SLOTS;
  return [...LUNCH_SLOTS, ...DINNER_SLOTS];
}
