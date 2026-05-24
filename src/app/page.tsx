import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Highlights from '@/components/home/Highlights';
import FeaturedDishes from '@/components/home/FeaturedDishes';
import ReservationCta from '@/components/home/ReservationCta';

export const metadata: Metadata = {
  description:
    "Il ristorante di pesce de L'Aquila: crudi d'autore, tartare, ostriche e pescato fresco selezionato ogni giorno. Cucina di mare nell'Abruzzo, prenotazioni online.",
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedDishes />
      <ReservationCta />
    </>
  );
}
