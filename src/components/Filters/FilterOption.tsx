import React from 'react';
import './FilterOptions.scss';
import clsx from 'clsx';

type FilterOptions = {
  selected?: boolean;
  label: string;
  onClick: () => void;
};

const FilterOption: React.FC<FilterOptions> = ({
  selected,
  label,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx({ selected: selected }, 'option-box')}
    >
      {label}
    </div>
  );
};

export default FilterOption;
