import React from 'react';
import NequiLogo from '../../assets/nequi-logo.png';
import CardLogo from '../../assets/card-logo.png';
import PseLogo from '../../assets/pse-logo.png';
import DaviplataLogo from '../../assets/daviplata-logo.png';
import BancolombiaLogo from '../../assets/bancolombia-logo.png';

const paymentMethodImages = {
  NEQUI: NequiLogo,
  CARD: CardLogo,
  PSE: PseLogo,
  DAVIPLATA: DaviplataLogo,
  BANCOLOMBIA: BancolombiaLogo,
};

type PaymentMethodLogoProps = {
  paymentMethod: 'NEQUI' | 'CARD' | 'PSE' | 'DAVIPLATA' | 'BANCOLOMBIA';
};

const PaymentMethodLogo: React.FC<PaymentMethodLogoProps> = ({
  paymentMethod,
}) => {
  const imageUrl = paymentMethodImages[paymentMethod];

  return <img src={imageUrl} alt="logo" height="24px" width="24px" />;
};

export default PaymentMethodLogo;
