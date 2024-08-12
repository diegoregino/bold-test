import clsx from 'clsx';
import Logo from './Logo';

const TopBar = () => {
  return (
    <nav
      className={clsx(
        'bg-gradient-to-r to-bold-red-normal from-bold-blue text-white flex justify-between items-center py-4 px-12'
      )}
    >
      <Logo />
      <ul className={clsx('flex justify-between gap-2')}>
        <li>Mi negocio</li>
        <li>Ayuda</li>
      </ul>
    </nav>
  );
};

export default TopBar;
