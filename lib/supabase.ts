import { createClient } from '@supabase/supabase-js';

let client: ReturnType<typeof createClient> | null | undefined;

export function getSupabaseClient() {
  if (client !== undefined) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Supabase logging is optional; don't make builds fail when these vars
  // aren't configured in an environment such as a preview deployment.
  client = url && anonKey ? createClient(url, anonKey) : null;
  return client;
}
