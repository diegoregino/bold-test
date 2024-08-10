import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './FilterDropdown.module.scss';
import Icon from '../Icon/Icon';
import { useState } from 'react';

const FilterDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
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
        <div className={clsx(styles.dropdown, {[styles.dropdown__show]: dropdownOpen})}>
          <div className={clsx(styles['dropdown--title'])}>
            <h3>Filtar</h3>
            <Icon iconId="close" />
          </div>
          <div className={clsx(styles['dropdown--item'])}>
            <label htmlFor="">
              <input type="checkbox" />
              <span>Cobro con datáfono</span>
            </label>
          </div>
          <div className={clsx(styles['dropdown--item'])}>
            <label htmlFor="">
              <input type="checkbox" />
              <span>Cobro con link de pago</span>
            </label>
          </div>
          <div className={clsx(styles['dropdown--item'])}>
            <label htmlFor="">
              <input type="checkbox" />
              <span>Ver todos</span>
            </label>
          </div>
          <Button
            label="Aplicar"
            variant="primary"
            rounded
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
