import './App.css';
import React, { createContext, useState } from "react";
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Review from './component/Reveiw/Review';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/ProductDetails/ProductDetails';

import { BrowserRouter , Route, Routes } from "react-router-dom";
import Shipment from './component/Shipment/Shipment';
import Login from './component/Login/Login';
import PrivateRoutes from './component/PrivateRoute/PrivateRoutes';

export const UserContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>

      <BrowserRouter>
        <h1>email: {loginUser.email}</h1>
        <Header></Header>

        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/review' element={<Review />} />
          <Route path='/product/:productKey' element={<ProductDetails />} />
          <Route path='/inventory' element={
            <PrivateRoutes>
              <Inventory></Inventory>
            </PrivateRoutes>
          }>
          </Route>
          <Route path='/shipment' element={
            <PrivateRoutes>
              <Shipment></Shipment>
            </PrivateRoutes>
          }>
          </Route>
          {/* <Route element={<PrivateRoutes />}>
              <Route path='/inventory' element={<Inventory />} />
              <Route path='/shipment' element={<Shipment />} />
          </Route> */}
          <Route path='/login' element={<Login />}/>
          <Route path="*" element={<NotFound />} />           
        </Routes>

      </BrowserRouter>

       
      {/* <Router>
        
          <Route path="/shop"></Route>
        

      </Router> */}

    </UserContext.Provider>
  );
}

export default App;
