import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Product } from '../pages/Product';
import { SalesReport } from '../pages/SalesReport';
import { Suppliers } from '../pages/Suppliers';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/sales-report" element={<SalesReport />} />
      <Route path="/suppliers" element={<Suppliers />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}