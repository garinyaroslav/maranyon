import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../components';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
