import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zeskjhzaqpmefaicceeb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inplc2tqaHphcXBtZWZhaWNjZWViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NDcwNjQsImV4cCI6MjAyNzUyMzA2NH0.EjpwKhBqLwONiMixmpySyreSl0a1DHWSjwCpMP2IIsY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
