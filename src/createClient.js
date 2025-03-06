import { createClient } from "@supabase/supabase-js";



const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;


if (!apiUrl || !apiKey) {
  throw new Error("Missing Supabase API URL or API Key!");
}

export const supabase = createClient(apiUrl, apiKey);
