import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
 import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../FakeDb';
import OrderDisplay from './OrderDisplay';
import ReviewItem from './ReviewItem';



const ReviewOrder = () => {
    
  const [ shops,setShops]=useProduct()
  const [Cart,setCart]=useCart(shops)
  const reoveProduct=(product)=>{
const rest=Cart.filter(pd=>pd.id !==product.id)
setCart(rest)
removeFromDb(product.id)
  }
    
    return (
        <div className='display1'>
 
 <div className='box' >
       {
        Cart.map(product=><ReviewItem
        key={product.id}
        product={product}
        reoveProduct={reoveProduct}
        ></ReviewItem>)
       }
 </div>
 <div classname='order_container '>
<div>
<OrderDisplay Cart={Cart}>

  <button className='btn-design'>Place Order</button>
</OrderDisplay>
</div>
 </div>



        </div>
    );
};

export default ReviewOrder;