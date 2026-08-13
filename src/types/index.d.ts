export type EntryType = 'debit' | 'credit';

export interface LedgerEntry {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: EntryType;
}

export interface Message {
  id?: string;
  sender_role: 'client' | 'admin';
  content: string;
  created_at?: string;
}