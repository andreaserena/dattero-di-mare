export type DishCategory =
  | 'antipasti'
  | 'primi'
  | 'secondi'
  | 'contorni'
  | 'dolci'
  | 'bevande';

export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed';

export interface Dish {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: DishCategory;
  allergens: string[];
  available: boolean;
  image_url: string | null;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  date: string;
  time: string;
  guests: number;
  notes: string | null;
  status: BookingStatus;
  created_at: string;
}

export interface BookingInsert {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}
