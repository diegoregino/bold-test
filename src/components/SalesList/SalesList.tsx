import styles from './SalesList.module.scss';
import Amex from '../../assets/visa-logo.png';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

const SalesList = () => {
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
          <tr>
            <td>
              <div
                className={clsx(
                  'text-blue text-semibold',
                  styles['table--payment-type']
                )}
              >
                <Icon iconId="link" />
                <span>Cobro no realizado</span>
              </div>
            </td>
            <td>14/6/2024 - 16:16:00</td>
            <td>
              <img src={Amex} alt="logo" height="24px" />
              ****6544
            </td>
            <td>GZEN8223AMMWA</td>
            <td>
              <div className={clsx(styles['table--payment-amount'])}>
                <span className={clsx('text-blue text-semibold')}>
                  $180.000
                </span>
                <span>Deducción Bold</span>
                <span>-$2.700</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                className={clsx(
                  'text-blue text-semibold',
                  styles['table--payment-type']
                )}
              >
                <Icon iconId="calculator" />
                <span>Cobro no realizado</span>
              </div>
            </td>
            <td>14/6/2024 - 16:16:00</td>
            <td>
              <img src={Amex} alt="logo" height="24px" />
              ****6544
            </td>
            <td>GZEN8223AMMWA</td>
            <td>
              <div className={clsx(styles['table--payment-amount'])}>
                <span className={clsx('text-blue text-semibold')}>
                  $180.000
                </span>
                <span className={clsx('text-gray')}>Deducción Bold</span>
                <span className={clsx('text-red')}>-$2.700</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesList;
