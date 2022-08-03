import { createContext, useState } from 'react';
import products from '../../dataBase/dataBase';

export const ProductsContext = createContext([]);

export const ProductsProviders = ({ children }) => {
  const [productsList, setProductsList] = useState(products);

  const handleFilter = section => {
    switch (section) {
      case 'Todos':
        return setProductsList(products);

      case 'Hortifruit':
        const hortifruitFilter = products.filter(
          product => product.section === section
        );
        return setProductsList(hortifruitFilter);

      case 'Panificadora':
        const bakeryFilter = products.filter(
          product => product.section === section
        );
        return setProductsList(bakeryFilter);

      case 'Laticinios':
        const dairyFilter = products.filter(
          product => product.section === section
        );
        return setProductsList(dairyFilter);

      default:
        return products;
    }
  };

  const handleInputFilter = event => {
    const handleSearch = event.target.value;

    const inputFilter = products.filter(product =>
      product.name.toLowerCase().includes(handleSearch.toLowerCase())
    );

    return setProductsList(inputFilter);
  };

  return (
    <ProductsContext.Provider
      value={{ productsList, handleFilter, handleInputFilter }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
