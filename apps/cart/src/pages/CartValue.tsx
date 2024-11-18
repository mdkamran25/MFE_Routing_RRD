import React from 'react'
import NxWelcome from '../app/nx-welcome'
import { Link, useNavigate } from 'react-router-dom';

const CartValue = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    // navigateTo(navigate, '/cartvalue');
    navigate('/cart/cartOrder')
  };
  return (
    <div>
      <Link to={{pathname:'/cart/cartOrder'}}>Link Cart Order</Link>
      <button onClick={handleNav}>CartOrder</button>
      <NxWelcome title="CartValue" /></div>
  )
}

export default CartValue