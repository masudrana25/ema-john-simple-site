import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/products.JSON';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
  
  const [cart, setCart] = useState([]);
  const AddCartHandle = (product)  => {
      console.log('product added', product);
      const newCart = [...cart, product];
      setCart(newCart);
  }

  const [Data, setData] = useState([]); 
  useEffect(() => {
    fetch(fakeData)
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  return (
    <div className='shop'>
      <div className="shop-product">
        {
        Data.map(data => <Product product ={data} AddCartHandle={AddCartHandle}></Product>)
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