import clsx from 'clsx';
import Logo from '../Logo';
import styles from './Topbar.module.scss';

const Topbar = () => {
  return (
    <nav className={clsx('background-gradient', styles.nav)}>
      <Logo />
      <ul>
        <li>Mi negocio</li>
        <li>Ayuda</li>
      </ul>
    </nav>
  );
};

export default Topbar;
