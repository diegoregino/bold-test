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
      className={clsx(
        { 'bg-bold-light-grey': selected },
        'p-2 rounded-md text-center cursor-pointer'
      )}
    >
      {label}
    </div>
  );
};

export default FilterOption;
