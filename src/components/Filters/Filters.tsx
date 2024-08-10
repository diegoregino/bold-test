import clsx from 'clsx';
import FilterOption from './FilterOption';
import styles from './Filters.module.scss';
import FilterDropdown from './FilterDropdown';

const Filters = () => {
  return (
    <div>
      <div>
        <div className={clsx(styles.filters)}>
          <FilterOption selected label="Hoy" />
          <FilterOption label="Esta semana" />
          <FilterOption selected label="Junio" />
        </div>
      </div>
      <div className={clsx('justify-end')}>
        <FilterDropdown />
      </div>
    </div>
  );
};

export default Filters;
