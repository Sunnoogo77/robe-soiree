// Server-side Supabase client. Reads cookies via next/headers so RLS
// policies see the authenticated user when applicable. Use this in server
// components, route handlers, and server actions.

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function getSupabaseServer() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY — see .env.example",
    );
  }
  const store = await cookies();
  return createServerClient(url, anon, {
    cookies: {
      getAll: () => store.getAll(),
      setAll: (cookiesToSet) => {
        for (const { name, value, options } of cookiesToSet) {
          try {
            store.set(name, value, options);
          } catch {
            // Called from a server component — ignore. Middleware should be
            // the one refreshing sessions.
          }
        }
      },
    },
  });
}
