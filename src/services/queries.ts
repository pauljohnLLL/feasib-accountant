import {useQuery} from '@tanstack/react-query';
import api from './api';
import type {LedgerEntry} from '../types/index';

export const fetchLedgers = async (): Promise<LedgerEntry[]> => {
    const {data} = await api.get('/ledgers');
    return data;
};

export const useLedgerEntries = () => {
  return useQuery<LedgerEntry[]>({
    queryKey: ['ledgerEntries'],
    queryFn: async () => {
      return [
        { id: "1", date: "2026-07-12", description: "Office Supplies", amount: 1200, type: "debit" },
        { id: "2", date: "2026-07-13", description: "Consultation Fee", amount: 5000, type: "credit" }
      ];
    },
  });
};