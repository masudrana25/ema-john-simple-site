import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.JSON';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
const Review = () => {
  //load fakeData by using useEffect 
  const [Data, setData] = useState([]); 
  const [savedProductKey, setSavedProductKey] = useState([]);
  const [savedCartData, setSavedCartData] = useState(getStoredCart());
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    fetch(fakeData)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  
  useEffect(() => {
    setSavedProductKey(Object.keys(savedCartData));
  }, [savedCartData])

  useEffect(() => {
    let tempCart = []
    savedProductKey.map(key => {
      let product = Data?.find(product => product?.key === key);
      product = { ...product, quantity: savedCartData[key] }
      tempCart.push(product);
      return product;
    })
    setCart(tempCart)

  }, [savedProductKey, Data]);

  // console.log(cart);

  
  useEffect(() => {
    // savedProductKeys.map(key => {
    //   const product = Data?.find(pd => pd?.key === key);
    //   setCart(product);
    //   return product;
    // });

    
    
  },[]);
  

  useEffect(() => { 

    console.log(cart);
  }, [cart])



  // const productInfo = savedProductKey.map(key => Data?.find(pd => pd?.key === key));
// console.log(cart);

  return (
    <div>
      <h1 className='rrrr'>This is Review Section</h1>
      {
        cart?.map(pd => <ReviewItem items={pd}></ReviewItem>)
      }
    </div>
  );
};

export default Review;