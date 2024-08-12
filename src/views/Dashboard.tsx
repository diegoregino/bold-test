import Filters from '@/containers/filters';
import SalesAmount from '@/containers/SalesAmount';
import TransactionsList from '@/containers/TransactionsList';
import useTransactions from '@/hooks/useTransactions';
import clsx from 'clsx';
import { useEffect } from 'react';
import { toast } from 'sonner';

const Dashboard = () => {
  const { isError } = useTransactions();

  useEffect(() => {
    if (isError) toast.error('No es posible obtener la data');
  }, [isError]);

  return (
    <main className={clsx('p-4 md:p-12')}>
      <section className={clsx('grid md:grid-cols-[1fr_2fr] mb-8 gap-4')}>
        <SalesAmount />
        <Filters />
      </section>
      <TransactionsList />
    </main>
  );
};

export default Dashboard;
