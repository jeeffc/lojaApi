import React from 'react';
import Header from './componets/Header/Header';
import Products from './componets/Products/Products';
import Provider from './context/Provider';
import Cart from './componets/Cart/Cart';


function App() {
  return (
    <Provider>
      <Header />   
      <Products />
      <Cart />
    </Provider>
      
    
  );
}

export default App;
