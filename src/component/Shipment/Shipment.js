import React, { useContext } from 'react';
import './Shipment.css';
import { redirect } from "react-router-dom";
import { UserContext } from '../../App';
const Shipment = () => {
  const [loginUser, setLoginUser] = useContext(UserContext)
  const loader = async () => {
  const user = loginUser.email;
  if (!user) {
    return redirect("/login");
  }
  return null;
};
  return (
    <div>
          <h1>this is shipment section</h1>
    </div>
  );
};

export default Shipment;