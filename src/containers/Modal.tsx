import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import PaymentMethodLogo from '@/components/PaymentMethodLogo/PaymentMethodLogo';
import { currencyFormat, dateFormat } from '@/lib/utils';
import { useTransactionStore } from '@/stores/transactions.store';
import clsx from 'clsx';

const Modal = () => {
  const modalOpen = useTransactionStore((state) => state.modalOpen);
  const setModalOpen = useTransactionStore((state) => state.setModalOpen);
  const currentTransaction = useTransactionStore(
    (state) => state.currentTransaction
  );
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    modalOpen && (
      <dialog
        className={clsx(
          'bg-bold-dark-grey bg-opacity-30 border-none h-screen absolute top-0 w-full'
        )}
        open
      >
        <div
          className={clsx('absolute right-6 top-6 z-10')}
          onClick={handleClose}
        >
          <Button iconId="close" variant="white" />
        </div>
        {currentTransaction && (
          <div
            className={clsx(
              'bg-white rounded-tl-2xl rounder-bl-2xl right-0 w-full md:w-[40%] h-full absolute text-center pt-16 px-4'
            )}
          >
            <div className={clsx('flex flex-col items-center gap-2 mb-12')}>
              <div
                className={clsx(
                  'flex justify-center bg-green-300 w-8 h-8 rounded-full text-white'
                )}
              >
                <Icon iconId="check" />
              </div>
              <h2 className={clsx('font-semibold')}>
                ¡
                {currentTransaction?.status === 'SUCCESSFUL'
                  ? 'Cobro exitoso'
                  : 'Cobro no realizado'}
                !
              </h2>
              <p className={clsx('text-3xl text-bold-blue font-semibold')}>
                {currentTransaction &&
                  currencyFormat(currentTransaction?.amount)}
              </p>
              <p className={clsx('text-bold-dark-grey text-sm')}>
                {currentTransaction?.createdAt &&
                  dateFormat(currentTransaction?.createdAt)}
              </p>
            </div>
            <div>
              <div
                className={clsx(
                  'text-bold-dark-grey text-xs font-semibold flex justify-between m-2'
                )}
              >
                <p>ID transacción Bold</p>
                <p className={clsx('text-black')}>{currentTransaction?.id}</p>
              </div>
              {currentTransaction?.deduction && (
                <div
                  className={clsx(
                    'text-bold-dark-grey text-xs font-semibold flex justify-between m-2'
                  )}
                >
                  <p>Deducción Bold</p>
                  <p className={clsx('text-bold-red-normal')}>
                    -
                    {currentTransaction &&
                      currencyFormat(currentTransaction?.deduction)}
                  </p>
                </div>
              )}
              <hr />
              <div
                className={clsx(
                  'text-bold-dark-grey text-xs font-semibold flex justify-between m-2'
                )}
              >
                <p>Método de pago</p>
                <p className={clsx('flex gap-4 items-center')}>
                  <PaymentMethodLogo
                    paymentMethod={currentTransaction?.paymentMethod}
                  />
                  ****{currentTransaction?.transactionReference}
                </p>
              </div>
              <div
                className={clsx(
                  'text-bold-dark-grey text-xs font-semibold flex justify-between m-2'
                )}
              >
                <p>Tipo de pago</p>
                <p className={clsx('text-black flex gap-4 pl-4')}>
                  <Icon
                    iconId={
                      currentTransaction?.salesType === 'PAYMENT_LINK'
                        ? 'link'
                        : 'calculator'
                    }
                  />
                  {currentTransaction?.salesType === 'PAYMENT_LINK'
                    ? 'Link de pagos'
                    : 'Datáfono'}
                </p>
              </div>
            </div>
          </div>
        )}
      </dialog>
    )
  );
};

export default Modal;
