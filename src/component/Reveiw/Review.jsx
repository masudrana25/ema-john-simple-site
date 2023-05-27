import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
// import fakeData from '../../fakeData/products.JSON';
import fakeData from '../fakeData/index';
import ReviewItem from '../ReviewItem/ReviewItem';
import {deleteFromDb} from '../../utilities/fakedb.js';
import './Review.css';

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
  },[]);

  return (
    <div>
      <h1 className='rrrr'>This is Review Section</h1>
      {
        cart?.map(pd => <ReviewItem items={pd} ></ReviewItem>)
      }
    </div>
  );
};

export default Review;