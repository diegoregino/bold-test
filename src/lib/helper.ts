import { DateSelectedType, SalesType } from '@/types/filters';
import { TransactionsType } from '@/types/transactions';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekOfYear';

export const salesTypeFiltered = (list: TransactionsType[], type: SalesType) =>
  list.filter((item) => item.salesType === type);

export const dateFiltered = (
  list: TransactionsType[],
  dateFilter: DateSelectedType
) => {
  switch (dateFilter) {
    case 'week': {
      dayjs.extend(weekday);
      const week = dayjs().week();
      const filtered = list.filter(
        (item) => dayjs(item.createdAt).week() === week
      );
      return filtered;
    }
    case 'today': {
      const date = dayjs();
      const filtered = list.filter((item) =>
        dayjs(item.createdAt).isSame(date, 'day')
      );
      return filtered;
    }

    default:
      break;
  }
  return list;
};

export const searchTermFiltered = (
  list: TransactionsType[],
  searchTerm: string
): TransactionsType[] => {
  const filtered = list.filter((item) => {
    return (
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.salesType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.createdAt).includes(searchTerm) ||
      String(item.transactionReference).includes(searchTerm) ||
      String(item.amount).includes(searchTerm) ||
      (item.deduction && String(item.deduction).includes(searchTerm))
    );
  });
  return filtered;
};
