import 'server-only';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _instance: SupabaseClient | null = null;

/**
 * Restituisce il client Supabase con service_role key (bypassa RLS).
 * Lazy singleton: il client viene creato al primo utilizzo, non all'import.
 * SOLO per API routes server-side — 'server-only' fa fallire il build
 * se questo file viene importato per errore in un Client Component.
 */
export function getSupabaseAdmin(): SupabaseClient {
  if (_instance) return _instance;

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    throw new Error(
      '[getSupabaseAdmin] SUPABASE_SERVICE_ROLE_KEY non definita. ' +
      'Configura la variabile in .env.local prima di usare le API routes server-side.',
    );
  }

  _instance = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return _instance;
}
