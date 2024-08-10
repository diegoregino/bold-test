import { create } from 'zustand';
import { TransactionsType } from '../../types/transactions';
import { persist } from 'zustand/middleware';

type TransactionState = {
  totalAmount: number;
  transactionsList: TransactionsType[];
  totalSales: () => number;
  setTransactionsList: (transactionsList: TransactionsType[]) => void;
};

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      totalAmount: 0,
      transactionsList: [],
      totalSales: () => {
        return get().transactionsList.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );
      },
      setTransactionsList: (transactionsList: TransactionsType[]) =>
        set({ transactionsList }),
    }),
    { name: 'transaction-store' }
  )
);
