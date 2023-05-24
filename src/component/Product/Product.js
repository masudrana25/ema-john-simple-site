import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
  const products = props.product;
  console.log(props);
  const AddCartHandle = props.AddCartHandle;
  return (
    <div className='product'>
        <div className="img">
          <img src={products?.img} alt="" />
        </div>
      <div className="discription">
        <h4 className='name'><Link to={"/product/"+products?.key}>{products?.name}</Link></h4>
        <br />
        <p><small>by {products?.seller}</small></p>
        <p>${products?.price}</p>
        <p><small>only {products?.stock} left in stock-order soon</small></p>
        {props.showAddToCart && <button className='button' onClick={()=>AddCartHandle(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
      </div>
    </div>
  );
};

export default Product;