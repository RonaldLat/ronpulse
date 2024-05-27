import { writable } from "svelte/store";
import { supabase } from '$lib/supabaseClient.js';

export const currentUser = writable('')

