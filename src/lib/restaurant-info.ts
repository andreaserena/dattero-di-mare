export const restaurantInfo = {
  name: 'Dattero di Mare',
  address: {
    street: 'Via del Porto 12',
    city: 'Genova',
    zip: '16123',
    full: 'Via del Porto 12, 16123 Genova',
  },
  phone: {
    display: '+39 010 000 0000',
    href: 'tel:+390100000000',
  },
  email: {
    display: 'info@dattereodimare.it',
    href: 'mailto:info@dattereodimare.it',
  },
  hours: {
    weekdays: 'Mar – Dom',
    lunch: '12:30 – 15:00',
    dinner: '19:30 – 22:30',
    closed: 'Lunedì chiuso',
  },
  social: {
    instagram: '#', // TODO: sostituire con URL profilo Instagram reale
    facebook: '#',  // TODO: sostituire con URL pagina Facebook reale
  },
  // TODO: sostituire con embed reale una volta confermato l'indirizzo
  mapEmbedUrl: 'https://maps.google.com/maps?q=Porto+Antico+Genova&output=embed',
} as const;
