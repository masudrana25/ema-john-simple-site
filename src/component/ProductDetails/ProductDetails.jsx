import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.JSON';
import Product from '../Product/Product';
import './ProductDetails.css'

const ProductDetails = () => {

  const [ Data, setProduct ] = useState([]);
  useEffect(() => {
    fetch(fakeData)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);
  const { productKey } = useParams();
  // console.log(productKey)
  // console.log(Data);
  // if (Data.length !== 0) {
  //     const productInfo = Data.find(pd => pd.key === productKey);
  //   const { name, img, seller, stock, price } = productInfo;
  //   const detailss = {name, img, seller, stock, price};
    
  // }
  // const arrayData = JSON.parse(fakeData);
  // console.log(fakeData);
  const productInfo = Data?.find(pd => pd.key ===productKey);

  // console.log(productInfo?.name );
  // const { name } = productInfo?.name;
  // const { img } = productInfo?.img;
  // const { seller } = productInfo?.seller;
  // const { stock } = productInfo?.stock;
  // const { price } = productInfo?.price;
  // console.log(name,img,seller,price,stock);
  
  return (
    <div className='product-deatils'>
      <h1 className='aaa'> Items Details</h1>
      <Product showAddToCart = {false} product = {productInfo}></Product>
    </div>
  );
};

export default ProductDetails;