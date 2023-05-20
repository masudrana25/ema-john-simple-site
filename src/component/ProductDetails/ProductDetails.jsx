import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.JSON';
import Product from '../Product/Product';
const ProductDetails = () => {
  // const { productKey } = useParams();
  const [ Data, setProduct ] = useState([]);
  useEffect(() => {
    fetch(fakeData)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);
  const { productKey } = useParams();
  // console.log(productKey)
  // console.log(Data);
  const productInfo = Data.find(pd => pd.key === productKey);
  //  console.log(product.name);
  // const { name } = productInfo.name;
  // const { img } = productInfo.img;
  // const { seller } = productInfo.seller;
  // const { stock } = productInfo.stock;
  //  const { price } = productInfo.price;
  
  return (
    <div>
      <h1>Product Details Coming Sooooonnnn</h1>
      {/* <div className='product'>
        <div className="img">
          <img src={img} alt="" />
        </div>
      <div className="discription">
        <h4 className='name'>{name}</h4>
        <br />
        <p><small>by {seller}</small></p>
        <p>${price}</p>
        <p><small>only {stock} left in stock-order soon</small></p>
        <button className='button'><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
      </div>
    </div>  */}
    </div>
  );
};

export default ProductDetails;