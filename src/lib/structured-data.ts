import { restaurantInfo } from '@/lib/restaurant-info';

interface MenuDish {
  name: string;
  description: string | null;
  price: number;
  category: string;
}

export function getRestaurantSchema() {
  const info = restaurantInfo;
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: info.name,
    image: `${info.siteUrl}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: info.address.street,
      addressLocality: info.address.city,
      postalCode: info.address.zip,
      addressRegion: info.address.province,
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: info.coordinates.latitude,
      longitude: info.coordinates.longitude,
    },
    url: info.siteUrl,
    telephone: info.phone.display,
    servesCuisine: info.cuisine,
    priceRange: info.priceRange,
    openingHoursSpecification: info.openingHoursSpec.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.days.map((day) => `https://schema.org/${day}`),
      opens: spec.opens,
      closes: spec.closes,
    })),
    acceptsReservations: true,
    currenciesAccepted: 'EUR',
  };
}

export function getMenuSchema(dishes: MenuDish[]) {
  const categories = Array.from(new Set(dishes.map((d) => d.category)));
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `Menu ${restaurantInfo.name}`,
    hasMenuSection: categories.map((cat) => ({
      '@type': 'MenuSection',
      name: cat,
      hasMenuItem: dishes
        .filter((d) => d.category === cat)
        .map((d) => ({
          '@type': 'MenuItem',
          name: d.name,
          ...(d.description ? { description: d.description } : {}),
          offers: {
            '@type': 'Offer',
            price: d.price,
            priceCurrency: 'EUR',
          },
        })),
    })),
  };
}
