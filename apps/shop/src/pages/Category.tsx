import React from 'react';
import NxWelcome from '../app/nx-welcome';
import { useNavigate } from 'react-router-dom';
import { navigateTo } from '../utils/navigateTo';

const Category = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigateTo(navigate, '/shopItem');
  };

  const handleCart = () =>{
    navigate('/cart/cartvalue')
  }

  return (
    <div>
      <button onClick={handleNav}> Shop Items</button>
      <button onClick={handleCart}> Cart Value </button>
      <NxWelcome title="Shop Category" />
    </div>
  );
};

export default Category;
