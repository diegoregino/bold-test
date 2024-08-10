import axios from 'axios';
import { TransactionsType } from '../types/transactions';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useTransactionStore } from '../stores/transactions/transactions';

const fetchTransactionsList = async (): Promise<TransactionsType[]> => {
  const { data } = await axios.get<TransactionsType[]>(
    'https://bold-fe-api.vercel.app/api'
  );

  return data;
};

const queryTransactionsList = (): UseQueryResult<{
  data: TransactionsType[];
}> => {
  const queryKey = ['transactions'];
  return useQuery({
    queryKey,
    queryFn: () => fetchTransactionsList(),
  });
};

export const useTransactions = () => {
  const setList = useTransactionStore((state) => state.setTransactionsList);

  const { data, isLoading } = queryTransactionsList();

  if (data) {
    setList(data?.data);
  }

  return { isLoading };
};
