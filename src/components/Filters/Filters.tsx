import clsx from 'clsx';
import FilterOption from './FilterOption';
import styles from './Filters.module.scss';
import FilterDropdown from './FilterDropdown';
import { useState } from 'react';

const Filters = () => {
  const [dateSelected, setDateSelected] = useState<string>('');
  return (
    <div>
      <div>
        <div className={clsx(styles.filters)}>
          <FilterOption
            selected={dateSelected === 'hoy'}
            onClick={() => setDateSelected('hoy')}
            label="Hoy"
          />
          <FilterOption
            selected={dateSelected === 'estasemana'}
            onClick={() => setDateSelected('estasemana')}
            label="Esta semana"
          />
          <FilterOption
            selected={dateSelected === 'junio'}
            onClick={() => setDateSelected('junio')}
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
