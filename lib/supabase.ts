import { createClient, type SupabaseClient } from '@supabase/supabase-js';

type Database = {
  public: {
    Tables: {
      kai_conversations: {
        Row: { question: string; answer: string; visitor_ip: string | null };
        Insert: { question: string; answer: string; visitor_ip: string | null };
        Update: Partial<{ question: string; answer: string; visitor_ip: string | null }>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

let client: SupabaseClient<Database> | null | undefined;

export function getSupabaseClient() {
  if (client !== undefined) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Supabase logging is optional; don't make builds fail when these vars
  // aren't configured in an environment such as a preview deployment.
  client = url && anonKey ? createClient<Database>(url, anonKey) : null;
  return client;
}
