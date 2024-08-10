import Topbar from './components/Topbar/Topbar';
import Dashboard from './views/Dashboard';

const Layout = () => {
  return (
    <>
      <Topbar />
      <main>
        <Dashboard />
      </main>
    </>
  );
};

export default Layout;
