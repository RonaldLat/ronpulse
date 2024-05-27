import { createClient } from '@supabase/supabase-js'

const options = {
  schema: 'public',
  autoRefreshToken: true
}

export const supabase = createClient( 'https://meglulbkwhtuzjstgwau.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZ2x1bGJrd2h0dXpqc3Rnd2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3NDg3MjUsImV4cCI6MjAwMDMyNDcyNX0.nPinHAPKykUMzFqwLzFLQ7KsmtMgoJXD0HcCQtggIJI', options )


