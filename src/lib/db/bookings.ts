import { getSupabaseAdmin } from '@/lib/supabase/admin';
import type { Booking, BookingInsert } from '@/types/database';

// Slot fissi ogni 30 min, 19:30 → 22:30
// TODO: filtrare gli slot già occupati in base alla capacità del ristorante
const FIXED_SLOTS = ['19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'];

export async function createBooking(data: BookingInsert): Promise<Booking> {
  const { data: booking, error } = await getSupabaseAdmin()
    .from('bookings')
    .insert(data)
    .select()
    .single();

  if (error) throw new Error(`createBooking: ${error.message}`);
  return booking as Booking;
}

export async function getAvailableSlots(_date: string): Promise<string[]> {
  // TODO: interrogare Supabase per escludere slot esauriti
  return FIXED_SLOTS;
}
