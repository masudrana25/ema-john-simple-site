import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
  const items = props.items;
  return (
    <div className='item-review'>
      <div className='product'>
        <div className="img">
          <img src={items?.img} alt="" />
        </div>
      <div className="discription">
        <h4 className='name'>{items?.name}</h4>
        <br />
        <p><small>by {items?.seller}</small></p>
        <p>${items?.price}</p>
        <p><small>only {items?.stock} left in stock-order soon</small></p>
        {/* {props.showAddToCart && <button className='button' onClick={()=>AddCartHandle(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>} */}
      </div>
    </div>
      
    </div>
  );
};

export default ReviewItem;