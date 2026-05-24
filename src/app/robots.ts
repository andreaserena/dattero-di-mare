import { MetadataRoute } from 'next';
import { restaurantInfo } from '@/lib/restaurant-info';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: `${restaurantInfo.siteUrl}/sitemap.xml`,
  };
}
