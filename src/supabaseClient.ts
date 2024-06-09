// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gwyyixagttragoezrbub.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3eXlpeGFndHRyYWdvZXpyYnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4Njg3MzEsImV4cCI6MjAzMzQ0NDczMX0.52qJhOCoGnNFxLwArSj0C1CXV4CcptpIAphwsUEzc4k';
export const supabase = createClient(supabaseUrl, supabaseKey);
