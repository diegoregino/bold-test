import clsx from 'clsx';
import Icon from '@/components/Icon/Icon';
import Button from '@/components/Button/Button';
import useSearchFilter from '@/hooks/useSearchFilter';

const SearchInput = () => {
  const { searchTermValue, handleChangeSearch, handleSearchClick } =
    useSearchFilter();

  return (
    <div className={clsx('border-b-2 border-b-bold-light-grey relative')}>
      <span className={clsx('absolute top-2/4 -translate-y-4  left-4')}>
        <Icon iconId="search" />
      </span>
      <input
        type="search"
        placeholder="Buscar"
        className={clsx(
          'border-none  text-bold-dark-grey text-base p-4 w-full pl-12'
        )}
        value={searchTermValue}
        onChange={handleChangeSearch}
      />
      <div className={clsx('absolute top-2/4 right-4 -translate-y-2/4')}>
        <Button
          label="Search"
          variant="primary"
          size="S"
          onClick={handleSearchClick}
        />
      </div>
    </div>
  );
};

export default SearchInput;
