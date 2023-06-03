import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';

const Shipment = () => {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
  
      <input className='aa' {...register("name", { required: true })}  placeholder='Your Name'/>
      {errors.name && <span className='error'>Name is required</span>} <br /> <br />
      

      <input {...register("email", { required: true })}  placeholder='Your email'/>
      {errors.email && <span className='error'>email is required</span>} <br /> <br />
      

      <input {...register("adress", { required: true })}  placeholder='Your adress'/>
      {errors.adress && <span className='error'>adress is required</span>} <br /> <br />
      

      <input {...register("mobile", { required: true })}  placeholder='Your mobile number'/>
      {errors.mobile && <span className='error'>mobile number is required</span>} <br /> <br />
      <input type="submit" />
    </form>
  );
};

export default Shipment;