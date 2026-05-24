import { MetadataRoute } from 'next';
import { restaurantInfo } from '@/lib/restaurant-info';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = restaurantInfo.siteUrl;
  const lastModified = new Date();
  return [
    { url: `${base}/`,             lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/menu`,         lastModified, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/prenotazioni`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/chi-siamo`,    lastModified, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/contatti`,     lastModified, changeFrequency: 'yearly',  priority: 0.7 },
  ];
}
