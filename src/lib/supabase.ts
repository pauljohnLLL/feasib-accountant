import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://ukrqrfmgwunpmopyheeq.supabase.co'; // Palitan ito ng iyong Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrcnFyZm1nd3VucG1vcHloZWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4NDE5MDMsImV4cCI6MjA5OTQxNzkwM30.Y7Z5Ga7S5edTgFT6ASjjL1K7OL4n3-Ldm7eovlcU6iQ'; // Palitan ito ng iyong Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);