import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createBooking } from '@/lib/db/bookings';
import { sendBookingNotification } from '@/lib/notifications/telegram';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Formato data non valido'),
  time: z.string().min(1),
  guests: z.number().int().min(1).max(20),
  notes: z.string().max(500).optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: 'Richiesta non valida' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: 'Dati non validi' }, { status: 400 });
  }

  let booking;
  try {
    booking = await createBooking(parsed.data);
  } catch (err) {
    console.error('[POST /api/prenotazioni] createBooking:', err);
    return NextResponse.json(
      { message: 'Errore durante la prenotazione. Riprova più tardi.' },
      { status: 500 },
    );
  }

  // Fire-and-forget: la prenotazione è già salvata, non blocchiamo la response
  sendBookingNotification(booking).then((result) => {
    if (!result.ok) console.error('[telegram] notifica fallita:', result.error);
  }).catch((err) => console.error('[telegram]', err));

  return NextResponse.json({ booking }, { status: 201 });
}
