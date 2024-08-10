import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './FilterDropdown.module.scss';
import Icon from '../Icon/Icon';
import React, { useState } from 'react';
import { useFilterStore } from '../../stores/filters/filters.store';
import { useFilters } from '../../hooks/useFilters';

const FilterDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const {applySalesTypeFilter} = useFilters()
  const setSalesType = useFilterStore((state) => state.setSalesType);
  const salesType = useFilterStore((state) => state.salesType);

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSalesType(value, checked);
  };

  const handleApplyFilter = () => {
    setDropdownOpen(!dropdownOpen);
    applySalesTypeFilter();
  }

  return (
    <div className={clsx(styles['filter-dropdown'])}>
      <Button
        label="Filtrar"
        variant="white"
        iconId="filter"
        onClick={() => {
          setDropdownOpen(!dropdownOpen);
        }}
      />
      {dropdownOpen && (
        <div
          className={clsx(styles.dropdown, {
            [styles.dropdown__show]: dropdownOpen,
          })}
        >
          <div className={clsx(styles['dropdown--title'])}>
            <h3>Filtar</h3>
            <Icon iconId="close" />
          </div>
          <div className={clsx(styles['dropdown--item'])}>
            <label htmlFor="">
              <input
                type="checkbox"
                value="PAYMENT_LINK"
                checked={salesType.PAYMENT_LINK}
                onChange={handleChangeCheckbox}
              />
              <span>Cobro con datáfono</span>
            </label>
          </div>
          <div className={clsx(styles['dropdown--item'])}>
            <label htmlFor="">
              <input
                type="checkbox"
                value="TERMINAL"
                checked={salesType.TERMINAL}
                onChange={handleChangeCheckbox}
              />
              <span>Cobro con link de pago</span>
            </label>
          </div>
          <div className={clsx(styles['dropdown--item'])}>
            <label htmlFor="">
              <input
                type="checkbox"
                value="VIEW_ALL"
                checked={salesType.VIEW_ALL}
                onChange={handleChangeCheckbox}
              />
              <span>Ver todos</span>
            </label>
          </div>
          <Button
            label="Aplicar"
            variant="primary"
            rounded
            onClick={handleApplyFilter}
          />
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
