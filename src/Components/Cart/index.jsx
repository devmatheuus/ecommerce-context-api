import React, { useContext } from 'react';

import CartContainer from './style';

import { FiAlertCircle, FiShoppingCart } from 'react-icons/fi';
import StyledButton from '../Button/style';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Providers/Cart';

const Cart = () => {
  const { itemsOnCart } = useContext(CartContext);

  return (
    <CartContainer>
      <p>
        <FiAlertCircle />
        Desconto especial na primeira compra
      </p>
      <Link to="/checkout">
        <StyledButton contentType="icon">
          <FiShoppingCart size={15} />
          {itemsOnCart.length > 0 && <span>{itemsOnCart.length}</span>}
        </StyledButton>
      </Link>
    </CartContainer>
  );
};

export default Cart;
