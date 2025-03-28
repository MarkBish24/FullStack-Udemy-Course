import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://anahozpumymgeypfkvnn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYWhvenB1bXltZ2V5cGZrdm5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NTg5ODQsImV4cCI6MjA1ODMzNDk4NH0.z4_JQ5MyKdVQBLewyTm20yEMGHUsFOmSqVcsD39eut4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
