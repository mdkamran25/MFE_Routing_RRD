import React from 'react';
import NxWelcome from '../app/nx-welcome';
import { useNavigate } from 'react-router-dom';
import { navigateTo } from '../utils/navigateTo';

const CartOrder = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    // navigateTo(navigate, '/cartvalue');
    navigate('/cart/cartvalue')
  };

  const handleNavShop = () => {
    navigate('/shop');
  };

  return (
    <div>
      <button onClick={handleNav}>Cart Value</button>
      <button onClick={handleNavShop}>Shop Value</button>
      <NxWelcome title="cartOrder" />
    </div>
  );
};

export default CartOrder;
