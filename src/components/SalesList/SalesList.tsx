import styles from './SalesList.module.scss';
import Icon from '../Icon/Icon';
import clsx from 'clsx';
import { TransactionsType } from '../../types/transactions';
import React from 'react';
import { currencyFormat } from '../../lib/utils';
import PaymentMethodLogo from '../PaymentMethodLogo/PaymentMethodLogo';

type SalesListProps = {
  data: TransactionsType[] | undefined;
};

const SalesList: React.FC<SalesListProps> = ({ data }) => {
  return (
    <div className={clsx(styles.saleslist)}>
      <div className={clsx('background-gradient', styles['saleslist--title'])}>
        <p>Tus ventas de Junio</p>
      </div>
      <div>
        <input type="search" placeholder="Buscar" />
      </div>
      <table className={clsx(styles.table)}>
        <thead>
          <tr>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Método de pago</th>
            <th>ID transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data?.map((transaction: TransactionsType) => (
                <tr>
                  <td>
                    <div
                      className={clsx(
                        'text-blue text-semibold',
                        styles['table--payment-type']
                      )}
                    >
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
                  </td>
                  <td>{transaction.createdAt}</td>
                  <td>
                    <PaymentMethodLogo paymentMethod={transaction.paymentMethod}/>
                    ****{transaction.transactionReference}
                  </td>
                  <td>{transaction.id}</td>
                  <td>
                    <div className={clsx(styles['table--payment-amount'])}>
                      <span className={clsx('text-blue text-semibold')}>
                        {currencyFormat(transaction.amount)}
                      </span>
                      {transaction.deduction && (
                        <>
                          <span>Deducción Bold</span>
                          <span className={clsx('text-red text-semibold')}>
                            -{currencyFormat(transaction.deduction)}
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            : 'No reults'}
        </tbody>
      </table>
    </div>
  );
};

export default SalesList;
