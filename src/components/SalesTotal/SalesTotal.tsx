import clsx from 'clsx';
import Icon from '../Icon/Icon';
import './SalesTotal.scss';
import { currencyFormat } from '../../lib/utils';
import { useTransactionStore } from '../../stores/transactions/transactions';

const SalesTotal = () => {
  const totalSales = useTransactionStore((state) => state.totalSales);

  return (
    <div className={clsx('salestotal')}>
      <div
        className={clsx('background-gradient salestotal--title space-between')}
      >
        <p>Total de ventas de Junio</p>
        <Icon iconId="info" />
      </div>
      <div className={clsx('salestotal--content')}>
        <p className={clsx('big-text')}>{currencyFormat(totalSales())}</p>
        <p>Junio, 2024</p>
      </div>
    </div>
  );
};

export default SalesTotal;
