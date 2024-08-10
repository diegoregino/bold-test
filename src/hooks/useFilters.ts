import { useFilterStore } from '../stores/filters/filters.store';
import { useTransactionStore } from '../stores/transactions/transactions';
import { dateSelectedType } from '../types/filters';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import weekday from 'dayjs/plugin/weekday';

export const useFilters = () => {
  const salesType = useFilterStore((state) => state.salesType);
  const setDateSelected = useFilterStore((state) => state.setDateSelected);
  dayjs.extend(isSameOrAfter);
  dayjs.extend(isSameOrBefore);
  dayjs.extend(weekday);

  const transactionsList = useTransactionStore(
    (state) => state.transactionsList
  );
  const setTransactionsList = useTransactionStore(
    (state) => state.setTransactionsList
  );

  const applySalesTypeFilter = (): void => {
    if (!salesType.VIEW_ALL) {
      const filteredList = transactionsList.filter(
        (transaction) => salesType[transaction.salesType]
      );
      setTransactionsList(filteredList);
    }
  };

  const dateFilter = (option: dateSelectedType): void => {
    let startDate: dayjs.Dayjs, endDate: dayjs.Dayjs;
    setDateSelected(option);

    switch (option) {
      case 'hoy':
        startDate = dayjs().startOf('day');
        endDate = dayjs().endOf('day');
        break;
      case 'estasemana':
        startDate = dayjs().weekday(0).startOf('day');
        endDate = dayjs().weekday(6).endOf('day');
        break;
      case 'junio':
        startDate = dayjs().month(5).startOf('month');
        endDate = dayjs().month(5).endOf('month');
        break;

      default:
        break;
    }

    setTransactionsList(
      transactionsList.filter((transaction) => {
        const transactionDate = dayjs(transaction.createdAt);
        return (
          transactionDate.isSameOrAfter(startDate) &&
          transactionDate.isSameOrBefore(endDate)
        );
      })
    );
  };

  return {
    applySalesTypeFilter,
    dateFilter,
  };
};
