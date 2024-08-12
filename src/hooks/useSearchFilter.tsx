import { useTransactionStore } from '@/stores/transactions.store';
import { useState } from 'react';

const useSearchFilter = () => {
  const setSearchTerm = useTransactionStore((state) => state.setSearchTerm);
  const searchTerm = useTransactionStore((state) => state.searchTerm);
  const [searchTermValue, setSearchTermValue] = useState<string>(searchTerm);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTermValue(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(searchTermValue);
  };

  return {
    handleChangeSearch,
    handleSearchClick,
    setSearchTerm,
    searchTerm,
    searchTermValue,
  };
};

export default useSearchFilter;
