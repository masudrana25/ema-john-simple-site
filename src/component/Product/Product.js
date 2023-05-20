import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
  console.log(props)
  const { name, img, seller, price, stock,key } = props.product;
  const AddCartHandle = props.AddCartHandle;
  return (
    <div className='product'>
        <div className="img">
          <img src={img} alt="" />
        </div>
      <div className="discription">
        <h4 className='name'><Link to={"/product/"+key}>{name}</Link></h4>
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