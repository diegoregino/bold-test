import { useTransactionStore } from "@/stores/transactions.store";
import { TransactionsType } from "@/types/transactions";

const useTransactionTable = () => {
  const handleSelectTransaction = (transaction: TransactionsType) => {
    setCurrentTransaction(transaction);
    setModalOpen(true);
  };

  const setModalOpen = useTransactionStore((state) => state.setModalOpen);
  const setCurrentTransaction = useTransactionStore(
    (state) => state.setCurrentTransaction
  );

  const listLoading = useTransactionStore((state) => state.listLoading);
  const transactionsList = useTransactionStore(
    (state) => state.transactionsList
  );
  return { handleSelectTransaction, listLoading, transactionsList };
};

export default useTransactionTable;
