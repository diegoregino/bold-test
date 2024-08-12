import { DateSelectedType, SalesType } from '@/types/filters';
import { TransactionsType } from '@/types/transactions';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TransactionState = {
  transactionsList: TransactionsType[];
  listLoading: boolean;
  dateFilter: DateSelectedType;
  salesTypeFilter: SalesType;
  searchTerm: string;
  modalOpen: boolean;
  currentTransaction: TransactionsType | undefined;
  totalSales: () => number;
  setTransactionsList: (transactions: TransactionsType[]) => void;
  setCurrentTransaction: (transaction: TransactionsType) => void;
  setDateFilter: (transactions: DateSelectedType) => void;
  setSearchTerm: (term: string) => void;
  setSalesTypeFilter: (salesType: SalesType) => void;
  setListLoading: (isFetching: boolean) => void;
  setModalOpen: (open: boolean) => void;
};

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      transactionsList: [],
      listLoading: false,
      dateFilter: 'month',
      salesTypeFilter: 'VIEW_ALL',
      searchTerm: '',
      modalOpen: true,
      currentTransaction: undefined,
      setTransactionsList: (transactions) =>
        set({ transactionsList: transactions }),
      setCurrentTransaction: (transaction) =>
        set({ currentTransaction: transaction }),
      setDateFilter: (date) => set({ dateFilter: date }),
      setSearchTerm: (term) => set({ searchTerm: term }),
      setSalesTypeFilter: (salesType) => set({ salesTypeFilter: salesType }),
      setListLoading: (isFetching) => set({ listLoading: isFetching }),
      setModalOpen: (open) => set({ modalOpen: open }),
      totalSales: () => {
        return get().transactionsList.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );
      },
    }),
    { name: 'transaction-store' }
  )
);
