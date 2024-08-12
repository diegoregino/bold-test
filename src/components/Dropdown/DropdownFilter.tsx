import clsx from 'clsx';
import DropdownItem from './DropdownItem';
import { dropdownItemType } from '@/types/filters';
import Button from '@/components/Button/Button';
import useDateFilter from '@/hooks/useDateFilter';

const dropdownItem: dropdownItemType[] = [
  {
    label: 'Cobro con datáfono',
    value: 'TERMINAL',
  },
  {
    label: 'Cobro con link de pago',
    value: 'PAYMENT_LINK',
  },
  {
    label: 'Ver todos',
    value: 'VIEW_ALL',
  },
];

const DropdownFilter = () => {
  const {
    setDropdownOpen,
    dropdownOpen,
    checked,
    handleChangeCheckbox,
    handleApply,
  } = useDateFilter();

  return (
    <div className={clsx('flex justify-end relative')}>
      <Button
        label="Filtrar"
        variant="white"
        iconId="filter"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      />
      {dropdownOpen && (
        <div
          className={clsx(
            'animate-fade-left animate-once animate-duration-500 animate-ease-in-out animate-normal animate-fill-forwards origin-top-right',
            'bg-white rounded shadow-sm right-0 py-4 px-6 absolute top-0 w-max z-10'
          )}
        >
          <div className={clsx('mb-4 text-center')}>
            <h3>Filtrar</h3>
            <Button
              iconId="close"
              variant="primary"
              className={clsx('absolute top-2 right-2')}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          </div>
          {dropdownItem.map((item) => (
            <DropdownItem
              label={item.label}
              value={item.value}
              checked={checked === item.value}
              onChange={handleChangeCheckbox}
            />
          ))}
          <Button
            label="Aplicar"
            variant="primary"
            rounded
            fullWidth
            onClick={handleApply}
          />
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
