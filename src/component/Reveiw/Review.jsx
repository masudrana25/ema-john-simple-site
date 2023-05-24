import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.JSON';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
const Review = () => {
  //load fakeData by using useEffect 
  const [Data, setData] = useState([]); 
  useEffect(() => {
    fetch(fakeData)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
 
    const savedCartData = getStoredCart();
  const savedProductKeys = Object.keys(savedCartData);
  console.log(savedProductKeys[0]);

    const productInfo = savedProductKeys.map(key => Data?.find(pd => pd?.key === key));


  return (
    <div>
      <h1 className='rrrr'>This is Review Section</h1>
      {
        productInfo.map(pd => <ReviewItem items={pd}></ReviewItem>)
      }
    </div>
  );
};

export default Review;