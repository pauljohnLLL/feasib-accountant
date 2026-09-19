/** Reusable type for the `navigate` function passed from `useNavigate()` */
export type NavigateFn = (path: string) => void;

export type EntryType = 'debit' | 'credit';

export interface LedgerEntry {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: EntryType;
}

/** Shape of a raw row returned from the Supabase `messages` table */
export interface SupabaseMessageRow {
  id: number;
  sender_role: 'client' | 'admin';
  content: string;
  created_at: string;
}

/** Canonical message shape used throughout the client app */
export interface Message {
  id?: string;
  sender_role: 'client' | 'admin';
  content: string;
  created_at?: string;
}