import SearchInput from '@/components/TransactionTable/SearchInput';
import TransactionsTable from '@/components/TransactionTable/TransactionsTable';
import clsx from 'clsx';

const TransactionsList = () => {
  return (
    <section className={clsx('bg-white rounded-2xl overflow-hidden shadow-sm')}>
      <h3
        className={clsx(
          'bg-gradient-to-r to-bold-red-normal from-bold-blue p-4 text-white'
        )}
      >
        Tus ventas de junio
      </h3>
      <SearchInput />
      <TransactionsTable />
    </section>
  );
};

export default TransactionsList;
