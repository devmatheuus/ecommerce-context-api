import Header from '../../Components/Header';
import StyledButton from '../../Components/Button/style';

import { ContentContainer, TotalContainer } from './style';
import { FiTrash2, FiShoppingBag } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Providers/Cart';

const Checkout = () => {
  const { itemsOnCart, removeFromCart } = useContext(CartContext);

  const totalCart = () =>
    itemsOnCart
      .reduce((accumulator, { price }) => accumulator + price, 0)
      .toFixed(2);

  return (
    <>
      <Header />
      <ContentContainer>
        <ul>
          {itemsOnCart.length > 0 ? (
            itemsOnCart.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <div>
                  <h3>R$ {product.price.toFixed(2)}</h3>
                  <StyledButton
                    contentType="icon"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <FiTrash2 size={13} />
                  </StyledButton>
                </div>
              </li>
            ))
          ) : (
            <div className="null-cart">
              <h2>Voltar as compras</h2>
              <Link to="/">
                <FiShoppingBag size={20} />
              </Link>
            </div>
          )}
        </ul>
        {itemsOnCart.length > 0 && (
          <TotalContainer>
            <h2>Resumo do pedido</h2>
            <div>
              <p>{itemsOnCart.length} produtos</p>
              <span>R$ {totalCart()}</span>
            </div>
            <StyledButton contentType="icon">Finalizar Pedido</StyledButton>
          </TotalContainer>
        )}
      </ContentContainer>
    </>
  );
};

export default Checkout;
