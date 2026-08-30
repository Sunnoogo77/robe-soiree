// Browser-side Supabase client. Importing this in a client component is fine;
// keep the keys to the public anon key — anything privileged stays server-side
// behind RLS via the server client.

import { createBrowserClient } from "@supabase/ssr";

export function getSupabaseBrowser() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY — see .env.example",
    );
  }
  return createBrowserClient(url, anon);
}
