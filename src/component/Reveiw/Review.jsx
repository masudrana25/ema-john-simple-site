import React, { useEffect, useState, useHistory } from 'react';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import fakeData from '../fakeData/index';
import ReviewItem from '../ReviewItem/ReviewItem';
import {deleteFromDb} from '../../utilities/fakedb.js';
import './Review.css';
import Cart from '../Cart/Cart';
import immgg from '../../images/giphy.gif';
import { Link } from 'react-router-dom';

const Review = () => {
  const Data = fakeData;
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCartData = getStoredCart();
    const savedProductKey = Object.keys(savedCartData);

    const productInfo = savedProductKey.map(key => {
      const product = Data.find(data => data.key === key);
      product.quantity = savedCartData[key];
      return product;
    });
    setCart(productInfo);
  },[cart]);

  //handle Proceed Checkout
  const [orderPlace, setOrderPlace] = useState(false);
  // const history = useHistory();
  // const handleCheckout = () => {
  //   history.push('/shipment');
  // }
  let thankYou;
  if (orderPlace) {
    thankYou = <img src={immgg} alt="" />
  }

// Handle remove product from product item review list
  const handleRemoveProduct = (productKey) => {
    const newProduct = cart.map(pd => pd.key !== productKey);
    setCart(newProduct);
    deleteFromDb(productKey);
  }

  return (
    <div className='shop'>
      <div className="shop-product">
        {
        cart.map(pd => <ReviewItem items={pd} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
        }
        {thankYou}
      </div>
      <div className="shop-cart">
        <Cart cart={cart}>
            <Link to="/shipment"><button  className='button'>Proceed Checkout</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;