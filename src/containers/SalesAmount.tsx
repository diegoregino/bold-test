import { dateLabels } from '@/constant/filter';
import { currencyFormat } from '@/lib/utils';
import { useTransactionStore } from '@/stores/transactions.store';
import clsx from 'clsx';

const SalesAmount = () => {
  const dateFilter = useTransactionStore((state) => state.dateFilter);
  const totalSales = useTransactionStore((state) => state.totalSales);

  return (
    <div className={clsx('bg-white rounded-2xl overflow-hidden shadow-sm')}>
      <h3
        className={clsx(
          'bg-gradient-to-r to-bold-red-normal from-bold-blue p-4 text-white'
        )}
      >
        Total de ventas de {dateLabels[dateFilter]}
      </h3>
      <div className={clsx('font-semibold text-center p-4')}>
        <p
          className={clsx(
            'text-3xl mb-4 bg-gradient-to-r to-bold-red-normal from-bold-blue bg-clip-text'
          )}
        >
          {currencyFormat(totalSales())}
        </p>
        <p>Junio,2024</p>
      </div>
    </div>
  );
};

export default SalesAmount;
