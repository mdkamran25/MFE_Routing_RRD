import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import SharedRoutes from '../routes/SharedRoutes';

const Shop = React.lazy(() => import('shop/Module'));
const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/shop/*" element={
          <SharedRoutes basePath="/shop">
            <Shop />
          </SharedRoutes>
        } />

        <Route path="/cart/*" element={
          <SharedRoutes basePath="/cart">
            <Cart />
          </SharedRoutes>
        } />
      </Routes>
    </React.Suspense>
  );
}

export default App;
