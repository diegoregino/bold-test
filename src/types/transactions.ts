export type TransactionsType = {
  id: string;
  status: string;
  paymentMethod: 'NEQUI' | 'CARD' | 'PSE' | 'DAVIPLATA' | 'BANCOLOMBIA';
  salesType: 'PAYMENT_LINK' | 'TERMINAL' | 'VIEW_ALL';
  createdAt: number;
  transactionReference: number;
  amount: number;
  deduction: number;
};
