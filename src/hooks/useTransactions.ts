import { useTransactionStore } from '@/stores/transactions.store';
import { useFetchTransactionsList } from './useFetchTransactionsList';

const useTransactions = () => {
  const { data, isError, isLoading } = useFetchTransactionsList();
  const setTransactions = useTransactionStore(
    (state) => state.setTransactionsList
  );
  const setListLoading = useTransactionStore((state) => state.setListLoading);
  setListLoading(isLoading);
  setTransactions(data || []);
  return { isError, isLoading };
};

export default useTransactions;
