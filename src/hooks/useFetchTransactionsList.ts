import { fetchTransactionsList } from '@/services/transaction';
import { useTransactionStore } from '@/stores/transactions.store';
import { TransactionsType } from '@/types/transactions';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useFetchTransactionsList = (): UseQueryResult<TransactionsType[]> => {
  const dateFilter = useTransactionStore((state) => state.dateFilter);
  const salesTypeFilter = useTransactionStore((state) => state.salesTypeFilter);
  const searchTerm = useTransactionStore((state) => state.searchTerm);
  const queryKey = [
    'transactions',
    { dateFilter, salesTypeFilter, searchTerm },
  ];
  return useQuery({
    queryKey,
    queryFn: () =>
      fetchTransactionsList(dateFilter, salesTypeFilter, searchTerm),
  });
};
