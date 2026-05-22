import type { Metadata } from 'next';
import BookingForm from '@/components/prenotazioni/BookingForm';

export const metadata: Metadata = {
  title: 'Prenota un tavolo — Il Dattero di Mare',
  description: 'Riserva il tuo tavolo al Dattero di Mare. Pesce fresco, cucina di mare, atmosfera unica.',
};

export default function PrenotazioniPage() {
  return (
    <>
      <div className="bg-sand py-24 px-4 text-center border-b border-brine/15">
        <p className="font-sans text-brine text-xs font-medium uppercase tracking-[0.25em] mb-4">
          Riserva il tuo tavolo
        </p>
        <h1 className="font-display italic text-6xl text-sea-text font-light">
          Prenotazioni
        </h1>
        <p className="font-sans text-sea-soft mt-5 max-w-md mx-auto text-sm leading-relaxed">
          Scegli data, orario e numero di ospiti. Vi aspettiamo.
        </p>
      </div>

      <div className="bg-sand min-h-[60vh]">
        <BookingForm />
      </div>
    </>
  );
}
