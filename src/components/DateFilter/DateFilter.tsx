import FilterOption from "./FilterOption";
import { dateLabels } from '@/constant/filter';
import useFilters from "@/hooks/useFilters";
import clsx from 'clsx';

const DateFilter = () => {
  const {dateFilter, setDateFilter} = useFilters()

  return (
    <div
      className={clsx(
        'grid grid-cols-3 gap-4 p-2 mb-4 bg-white rounded-md shadow-sm'
      )}
    >
      <FilterOption
        selected={dateFilter === 'today'}
        label={dateLabels['today']}
        onClick={() => {
          setDateFilter('today');
        }}
      />
      <FilterOption
        selected={dateFilter === 'week'}
        label={dateLabels['week']}
        onClick={() => {
          setDateFilter('week');
        }}
      />
      <FilterOption
        selected={dateFilter === 'month'}
        label={dateLabels['month']}
        onClick={() => {
          setDateFilter('month');
        }}
      />
    </div>
  );
};

export default DateFilter;
