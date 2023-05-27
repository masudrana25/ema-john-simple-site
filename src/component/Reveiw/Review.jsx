import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import fakeData from '../fakeData/index';
import ReviewItem from '../ReviewItem/ReviewItem';
import {deleteFromDb} from '../../utilities/fakedb.js';
import './Review.css';
import Cart from '../Cart/Cart';

const Review = () => {
  const Data = fakeData;
  // const [savedProductKey, setSavedProductKey] = useState([]);
  // const [savedCartData, setSavedCartData] = useState(getStoredCart());
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
      </div>
      <div className="shop-cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;