import clsx from 'clsx';
import React from 'react';

type DropdownItemProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className={clsx('m-2')}>
      <label className={clsx('flex items-center gap-2')}>
        <input type="checkbox" className={clsx('h-4 w-4')} value={value} checked={checked} onChange={onChange} />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default DropdownItem;
