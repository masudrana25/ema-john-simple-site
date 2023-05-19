import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  const AddCartHandle = props.AddCartHandle;
  return (
    <div className='product'>
        <div className="img">
          <img src={img} alt="" />
        </div>
      <div className="discription">
        <h4 className='name'>{name}</h4>
        <br />
        <p><small>by {seller}</small></p>
        <p>${price}</p>
        <p><small>only {stock} left in stock-order soon</small></p>
        <button className='button' onClick={()=>AddCartHandle(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
      </div>
    </div>
  );
};

export default Product;