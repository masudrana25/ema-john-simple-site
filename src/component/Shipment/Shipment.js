import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';

const Shipment = () => {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
  
      <input className='aa' {...register("name", { required: true })}  placeholder='Your Name'/> <br />
      {errors.name && <span style={{color:'red'}}>Name is required</span>}  <br />
      

      <input {...register("email", { required: true })} placeholder='Your email' />
      <br />
      {errors.email && <span style={{color:'red'}}>email is required</span>}  <br />
      

      <input {...register("adress", { required: true })} placeholder='Your adress' />
      <br />
      {errors.adress && <span style={{color:'red'}}>adress is required</span>}  <br />
      

      <input {...register("mobile", { required: true })} placeholder='Your mobile number' />
      <br />
      {errors.mobile && <span style={{color:'red'}}>mobile number is required</span>} <br />
      <input type="submit" />
    </form>
  );
};

export default Shipment;