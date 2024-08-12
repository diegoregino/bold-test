import { dateFiltered, salesTypeFiltered, searchTermFiltered } from '@/lib/helper';
import { DateSelectedType, SalesType } from '@/types/filters';
import { TransactionsType } from '@/types/transactions';
import axios from 'axios';

const transactionGetRequest = async (): Promise<{
  data: TransactionsType[];
}> => {
  const { data } = await axios.get<{ data: TransactionsType[] }>(
    'https://bold-fe-api.vercel.app/api'
  );

  return data;
};

const filterData = (
  response: { data: TransactionsType[] },
  dateFilter: DateSelectedType,
  salesTypeFilter: SalesType,
  searchTerm: string
): TransactionsType[] => {
  let { data } = response;
  if (salesTypeFilter !== 'VIEW_ALL')
    data = salesTypeFiltered(data, salesTypeFilter);
  if (dateFilter !== 'month') {
    data = dateFiltered(data, dateFilter);
  }
  if (searchTerm) {
    data = searchTermFiltered(data, searchTerm);
  }
  return data;
};

export const fetchTransactionsList = async (
  dateFilter: DateSelectedType,
  salesTypeFilter: SalesType,
  searchTerm: string
): Promise<TransactionsType[]> => {
  const response = await transactionGetRequest();
  return filterData(response, dateFilter, salesTypeFilter, searchTerm);
};
