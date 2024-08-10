import axios from 'axios';
import {
  // FetchTransactionsResponse,
  TransactionsType,
} from '../types/transactions';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

const fetchTransactionsList = async (): Promise<TransactionsType[]> => {
  const { data } = await axios.get<TransactionsType[]>(
    'https://bold-fe-api.vercel.app/api'
  );

  return data;
};

export const useTransactions = (): UseQueryResult<{ data: TransactionsType[] }> => {
  const queryKey = ['transactions'];

  return useQuery({
    queryKey,
    queryFn: () => fetchTransactionsList(),
  });
};
