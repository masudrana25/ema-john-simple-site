import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/products.JSON';
const Shop = () => {
  
  const [Data, setData] = useState([])
  
  useEffect(() => {
    fetch('products.JSON')
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

  return (
    <div>
        <h1>gvfbdfvjkdsl</h1>
    </div>
  );
};

function Data(params) {
  
}
export default Shop;