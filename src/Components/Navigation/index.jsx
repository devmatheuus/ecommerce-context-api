import React, { useContext } from 'react';

import NavigationContainer from './style';
import StyledButton from '../Button/style';

import { FiSearch } from 'react-icons/fi';
import { ProductsContext } from '../../Providers/Products';

const Navigation = () => {
  const { handleFilter, handleInputFilter } = useContext(ProductsContext);

  return (
    <NavigationContainer>
      <nav>
        <StyledButton contentType="text" onClick={() => handleFilter('Todos')}>
          Produtos
        </StyledButton>
        <StyledButton
          contentType="text"
          onClick={() => handleFilter('Hortifruit')}
        >
          Hortifruit
        </StyledButton>
        <StyledButton
          contentType="text"
          onClick={() => handleFilter('Panificadora')}
        >
          Panificadora
        </StyledButton>
        <StyledButton
          contentType="text"
          onClick={() => handleFilter('Laticinios')}
        >
          Laticínios
        </StyledButton>
      </nav>
      <div>
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={event => handleInputFilter(event)}
        />
        <StyledButton contentType="icon">
          <FiSearch size={15} />
        </StyledButton>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
