import React, { useState, useContext } from 'react';
import { BsSearch }  from 'react-icons/bs';
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';


function SearchBar(){

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');


  const handSearch = async (event) => {

    event.preventDefault();
    setLoading(true);
    const products = await  fetchProducts(searchValue);
   
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handSearch} >
      {}
      <input type="search"  value={searchValue}placeholder="Buscar Produtos"  className="search-input" onChange={({target}) => setSearchValue (target.value)}required/>

      
      <button type="submit" className="search_button">
        <BsSearch />
      </button>

    </form>
  );
}

export default SearchBar;
