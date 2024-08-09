import Logo from '../Logo';
import './Topbar.module.scss';

const Topbar = () => {
  return (
    <nav>
      <Logo />

      <ul>
        <li>Mi negocio</li>
        <li>Ayuda</li>
      </ul>
    </nav>
  );
};

export default Topbar;
