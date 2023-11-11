import { Routes, Route } from 'react-router-dom';

import { Home, NotFound, Categories } from './pages';
import { MainLayout } from './layouts/MainLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
