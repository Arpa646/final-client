import React from 'react';

import './shop.css'
const ShopDisplay = ({shop,addCart}) => {
    const{name,price,_id,img}=shop;
    return (
        <div className='cardDesign shadow-2xl'>
         
        
            {/* <img></img> */}
            <div className='img'>
            <img className='img-design' src={img}></img>
            </div>
            <h3 className='name-design'>{name}</h3>
            <h3 className='price-design'>{price} BTD</h3>
            <button onClick={()=>addCart(shop)} className='btn-design'>Add to Cart</button>
        </div>
    );
};

export default ShopDisplay;