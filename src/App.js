import './App.css';
import React from "react";
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Review from './component/Reveiw/Review';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/ProductDetails/ProductDetails';

import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
        
        <Header></Header>

        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/review' element={<Review />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/product/:productKey' element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />           
        </Routes>

      
      
      
      </BrowserRouter>

       
      {/* <Router>
        
          <Route path="/shop"></Route>
        

      </Router> */}

    </div>
  );
}

export default App;
