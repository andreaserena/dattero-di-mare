import type { Metadata } from 'next';
import BookingForm from '@/components/prenotazioni/BookingForm';

export const metadata: Metadata = {
  title: 'Prenota un tavolo — Dattero di Mare',
  description: 'Riserva il tuo tavolo al Dattero di Mare. Pesce fresco, cucina marinara, atmosfera unica.',
};

export default function PrenotazioniPage() {
  return (
    <>
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Riserva il tuo tavolo
        </p>
        <h1 className="font-playfair text-5xl font-bold">Prenotazioni</h1>
        <p className="text-white/55 mt-4 max-w-md mx-auto text-sm leading-relaxed">
          Scegli data, orario e numero di ospiti. Vi aspettiamo.
        </p>
      </div>

      <div className="bg-stone-50 min-h-[60vh]">
        <BookingForm />
      </div>
    </>
  );
}
