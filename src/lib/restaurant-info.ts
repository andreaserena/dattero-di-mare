export const restaurantInfo = {
  name: 'Dattero di Mare',
  address: {
    street: 'Via Cimino 36',
    city: `L'Aquila`,
    zip: '67100',
    full: `Via Cimino 36, 67100, L'Aquila Italia`,
  },
  phone: {
    display: '+39 349 851 7478',
    href: 'tel:+39 349 851 7478',
  },
  email: {
    display: 'info@dattereodimare.it',
    href: 'mailto:info@dattereodimare.it',
  },
  hours: {
    weekdays: 'Mar – Dom',
    lunch: '12:30 – 15:00',
    dinner: '19:00 – 22:00',
    closed: 'Lunedì chiuso',
  },
  social: {
    instagram: '#', // TODO: sostituire con URL profilo Instagram reale
    facebook: '#',  // TODO: sostituire con URL pagina Facebook reale
  },
  // TODO: sostituire con embed reale una volta confermato l'indirizzo
  mapEmbedUrl: 'https://maps.app.goo.gl/K7digpFMAppCYTSV9',
} as const;
