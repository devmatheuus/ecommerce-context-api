import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';

import { BrowserRouter } from 'react-router-dom';
import { ProductsProviders } from './Providers/Products';
import { CartProviders } from './Providers/Cart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProviders>
      <CartProviders>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProviders>
    </ProductsProviders>
  </React.StrictMode>
);
