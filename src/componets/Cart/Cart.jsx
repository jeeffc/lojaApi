import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CarItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const { cartItems, isCArtVisible} = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc,0);

  return(
    <section className={`cart ${isCArtVisible ? 'cart--active' : ''}`}>
      <div className="cart-itens">
        {cartItems.map((cartItem)=> <CartItem key={cartItem.id} data={cartItem}/>)} 
      </div>
      
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
 
    </section>
  );
}

export default Cart;
