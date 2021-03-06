import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, key, price} = props.product;
// css style ::
const reviewItemStyle ={
    borderBottom: '2px solid lightgray',
    marginBottom: '5px',
    paddingBottom: '5px',
    marginLeft:'200px',
   
   
};


    return (
        <div style ={reviewItemStyle} className="product-container">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>Price: ${price}</small></p>
            <button 
            className="main-button"
            onClick = {() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;