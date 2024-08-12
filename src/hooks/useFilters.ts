import { useTransactionStore } from '@/stores/transactions.store';

const useFilters = () => {
  const setDateFilter = useTransactionStore((state) => state.setDateFilter);
  const dateFilter = useTransactionStore((state) => state.dateFilter);

  return {
    setDateFilter,
    dateFilter,
  };
};

export default useFilters;
