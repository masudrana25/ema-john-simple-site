import React, { useEffect, useState } from 'react';
import './Shop.css';
// import fakeData from '../../fakeData/products.JSON';
import fakeData from '../fakeData/index';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import { addToDatabaseCart } from '../utilities/databaseManager.js';
const Shop = () => {
  const Data = fakeData.slice(0, 10);
  const [cart, setCart] = useState([]);
  const AddCartHandle = (product)  => {
      const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key)
  }

 

  return (
    <div className='shop'>
      <div className="shop-product">
        {
        Data.map(data => <Product product ={data} AddCartHandle={AddCartHandle} showAddToCart ={true}></Product>)
          }
      </div>
      
      <div className="shop-cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

function Data(params) {
  
}
export default Shop;