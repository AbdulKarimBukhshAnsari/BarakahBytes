import { createClient } from "@supabase/supabase-js";

// Debugging: Check if the variables are loaded
console.log("API URL:", import.meta.env.VITE_API_URL);
console.log("API Key:", import.meta.env.VITE_API_KEY);

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

// Error handling in case variables are not loaded
if (!apiUrl || !apiKey) {
  throw new Error("Missing Supabase API URL or API Key!");
}

export const supabase = createClient(apiUrl, apiKey);
