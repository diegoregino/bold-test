import clsx from 'clsx';
import FilterOption from './FilterOption';
import styles from './Filters.module.scss';
import FilterDropdown from './FilterDropdown';
import { useFilterStore } from '../../stores/filters/filters.store';
import { useFilters } from '../../hooks/useFilters';

const Filters = () => {
  const { dateFilter } = useFilters();
  const dateSelected = useFilterStore((state) => state.dateSelected);

  return (
    <div>
      <div>
        <div className={clsx(styles.filters)}>
          <FilterOption
            selected={dateSelected === 'hoy'}
            onClick={() => dateFilter('hoy')}
            label="Hoy"
          />
          <FilterOption
            selected={dateSelected === 'estasemana'}
            onClick={() => dateFilter('estasemana')}
            label="Esta semana"
          />
          <FilterOption
            selected={dateSelected === 'junio'}
            onClick={() => dateFilter('junio')}
            label="Junio"
          />
        </div>
      </div>
      <div className={clsx('justify-end')}>
        <FilterDropdown />
      </div>
    </div>
  );
};

export default Filters;
