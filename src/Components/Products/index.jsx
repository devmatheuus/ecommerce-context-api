import React, { useContext } from 'react';

import ItemsContainer from './style';

import StyledButton from '../Button/style';

import { toast } from 'react-toastify';
import { ProductsContext } from '../../Providers/Products';
import { CartContext } from '../../Providers/Cart';

const Products = () => {
  const { productsList } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <ItemsContainer>
      {productsList?.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>R$ {product.price.toFixed(2)}</p>
          <span>Secção - {product.section}</span>
          <StyledButton
            contentType="text"
            onClick={() => {
              toast.success('Produto adicionado');
              addToCart(product);
              product.id++;
            }}
          >
            Adicionar ao carrinho
          </StyledButton>
        </li>
      ))}
    </ItemsContainer>
  );
};

export default Products;
