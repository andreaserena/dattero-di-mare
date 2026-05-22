import Hero from '@/components/home/Hero';
import Highlights from '@/components/home/Highlights';
import FeaturedDishes from '@/components/home/FeaturedDishes';
import ReservationCta from '@/components/home/ReservationCta';

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
