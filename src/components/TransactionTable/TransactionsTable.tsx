import clsx from 'clsx';
import TableItem from './TableItem';
import Icon from '@/components/Icon/Icon';
import { currencyFormat, dateFormat } from '@/lib/utils';
import PaymentMethodLogo from '@/components/PaymentMethodLogo/PaymentMethodLogo';
import useTransactionTable from '@/hooks/useTransactionTable';

const TransactionsTable = () => {
  const { listLoading, transactionsList, handleSelectTransaction } = useTransactionTable();

  if (listLoading) {
    return <div>Cargando tabla...</div>;
  }

  return (
    <div className={clsx('max-h-96 overflow-auto')}>
      <table className={clsx('w-full')}>
        <thead>
          <tr>
            <th className={clsx('text-left p-2 pl-4')}>Transacción</th>
            <th className={clsx('text-left p-2')}>Fecha y hora</th>
            <th className={clsx('text-left p-2')}>Método de pago</th>
            <th className={clsx('text-left p-2')}>ID transacción Bold</th>
            <th className={clsx('text-left p-2')}>Monto</th>
          </tr>
        </thead>
        <tbody>
          {transactionsList.map((transaction) => (
            <tr
              key={transaction.id}
              onClick={() => handleSelectTransaction(transaction)}
              className={clsx('cursor-pointer hover:bg-bold-light-grey')}
            >
              <TableItem>
                <div className={clsx('flex gap-4 pl-4')}>
                  <Icon
                    iconId={
                      transaction.salesType === 'PAYMENT_LINK'
                        ? 'link'
                        : 'calculator'
                    }
                  />
                  <span>
                    {transaction.status === 'REJECTED'
                      ? 'Cobro no realizado'
                      : 'Cobro exitoso'}
                  </span>
                </div>
              </TableItem>
              <TableItem>
                <>{dateFormat(transaction.createdAt)}</>
              </TableItem>
              <TableItem>
                <div className={clsx('flex gap-4')}>
                  <PaymentMethodLogo
                    paymentMethod={transaction.paymentMethod}
                  />
                  ****{transaction.transactionReference}
                </div>
              </TableItem>
              <TableItem>
                <>{transaction.id}</>
              </TableItem>
              <TableItem>
                <div className={clsx('flex flex-col')}>
                  <span className={clsx('text-bold-blue font-semibold')}>
                    {currencyFormat(transaction.amount)}
                  </span>
                  {transaction.deduction && (
                    <>
                      <span className={clsx('text-xs')}>Deducción Bold</span>
                      <span
                        className={clsx(
                          'text-bold-red-normal font-semibold text-sm'
                        )}
                      >
                        -{currencyFormat(transaction.deduction)}
                      </span>
                    </>
                  )}
                </div>
              </TableItem>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
