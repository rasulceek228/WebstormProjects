import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://emmckzcsvspiczsdafja.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtbWNremNzdnNwaWN6c2RhZmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MjkyNjYsImV4cCI6MjA2NzEwNTI2Nn0.HOZz4-w83Yrrp_1gK1mO21zEmmCyq5MXcXxEHkje5NQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
