import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vkzhpcfpqphvjrklaxhf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZremhwY2ZwcXBodmpya2xheGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3OTQzOTgsImV4cCI6MjA0NjM3MDM5OH0.cDDIu2xy6oYMEXRjh7ClEWlS7ENXOzCiA1pf77LDbeo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
