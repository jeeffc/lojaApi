import React from 'react';
import SearchBar from '../SearchBar/SerachBar';
import CartButton from '../CartButton/CartButton';

import './Header.css';


function Header() {
  return(
    <header className="header">
      <div className="conteiner">
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
