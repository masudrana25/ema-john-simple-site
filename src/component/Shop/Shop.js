import React, { useEffect, useState } from 'react';
import './Shop.css';
// import fakeData from '../../fakeData/products.JSON';
import fakeData from '../fakeData/index';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { addToDatabaseCart } from '../utilities/databaseManager.js';
import { Link } from 'react-router-dom';
const Shop = () => {
  const Data = fakeData.slice(0, 10);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCartData = getStoredCart();
    const dataKeys = Object.keys(savedCartData);
    const previousCartItems = dataKeys.map(pdKeys => {
      const product = fakeData.find(pd => pd.key === pdKeys);
      product.quantity = savedCartData[pdKeys];
      return product;
    });
    setCart(previousCartItems);
  })
  const AddCartHandle = (product) => {
    const sameProduct = cart.find(pd => pd.key === product.key);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      let other = cart.filter(pd => pd.key !== product.key);
      newCart = [...other, sameProduct];
    }
    else {
      product.quantity = 1;
      newCart = [...cart , product];
    }
    setCart(newCart);
    addToDb(product.key,count)
  }

 

  return (
    <div className='shop'>
      <div className="shop-product">
        {
        Data.map(data => <Product product ={data} AddCartHandle={AddCartHandle} showAddToCart ={true}></Product>)
          }
      </div>
      
      <div className="shop-cart">
        <Cart cart={cart}>
           <Link to="/review"> <button className='button'>Review Order</button></Link>
        </Cart>
      </div>
    </div>
  );
};

function Data(params) {
  
}
export default Shop;