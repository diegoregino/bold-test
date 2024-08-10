import React from 'react';
import './FilterOptions.scss';
import clsx from 'clsx';

type FilterOptions = {
  selected?: boolean;
  label: string;
};

const FilterOption: React.FC<FilterOptions> = ({ selected, label }) => {
  return (
    <div className={clsx({ selected: selected }, 'option-box')}>{label}</div>
  );
};

export default FilterOption;
