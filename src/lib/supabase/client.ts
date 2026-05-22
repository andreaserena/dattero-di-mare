import { createClient } from '@supabase/supabase-js';

/**
 * Client browser-safe con anon key.
 * Importabile da Client Components, Server Components e API routes pubbliche.
 */
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
