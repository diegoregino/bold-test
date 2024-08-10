import { useState } from 'react';
import Filters from '../components/Filters/Filters';
import Icon from '../components/Icon/Icon';
import Modal from '../components/Modal/Modal';
import SalesList from '../components/SalesList/SalesList';
import SalesTotal from '../components/SalesTotal/SalesTotal';
import './Dashboard.scss';
import { useTransactions } from '../hooks/useTransactions';

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { isLoading } = useTransactions();

  if (isLoading) {
    return 'Cargando...'
  }

  return (
    <>
      <section className="table-head">
        <SalesTotal />
        <Filters />
      </section>
      <SalesList />
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
          }}
        >
          <div>
            <div>
              <Icon iconId="check" />
              <h2>!Cobro exitoso!</h2>
              <p>$100.000</p>
              <p>27/06/2024 - 16:29:01</p>
            </div>
            <div>
              <div>
                <p>ID transacción Bold</p>
                <p>GZEN8223AMMWA</p>
              </div>
              <div>
                <p>Deducción Bold</p>
                <p>-$3.000</p>
              </div>
              <hr />
              <div>
                <p>Método de pago</p>
                <p>-$3.000</p>
              </div>
              <div>
                <p>Tipo de pago</p>
                <p>Link de pagos</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Dashboard;
