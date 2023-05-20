import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const cart = props.cart;
  //const total = cart.reduce((total, prd) => total + prd.price, 0);

  
  const precision = (input) => {
    const precision = input.toFixed(2);
    return Number(precision);
  };

  let itemsPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i].price;
    itemsPrice = itemsPrice + element;    
  };

  let shipping = 0;
  if (itemsPrice>235) {
    shipping = 0;
  }
  else if (itemsPrice > 115) {
    shipping = 4.99;
  }
  else if (itemsPrice > 0) {
    shipping = 11.99;
  };

  const totalBeforeTax = precision(itemsPrice + shipping);
  const tax = precision(totalBeforeTax / 10);
  const orderTotal = precision(totalBeforeTax + tax);

  return (
    <div>
      <h3>Ordered Summary</h3>
      <p><small>Items Ordered : {cart.length}</small></p>
      <p><small>Items Price : ${precision(itemsPrice)}</small></p>
      <p><small>Shipping & Handling: ${shipping}</small></p>
      
      <p><small>Total before tax: ${totalBeforeTax}</small></p>
      <p><small>Estimated Tax: ${tax}</small></p>
      <p></p>
      <h5>Order Total: {orderTotal}</h5>
      <br />
      <Link to="/review"> <button className='button'>Review Order</button></Link>
    </div>
  );
};

export default Cart;