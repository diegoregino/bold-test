export type TransactionsType = {
  id: string;
  status: string;
  paymentMethod: 'NEQUI' | 'CARD' | 'PSE' | 'DAVIPLATA' | 'BANCOLOMBIA';
  salesType: string;
  createdAt: number;
  transactionReference: number;
  amount: number;
  deduction?: number;
};
