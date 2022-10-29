import React, { Children } from 'react';
import { Link } from 'react-router-dom';

const OrderDisplay = ({Cart, children}) => {
    let total=0;
    let shippingCharge=0;
    let GrandTotal=0;
    let quantity=0;
    for(const product of Cart)
    {    quantity=quantity+product.quantity
       total =total+product.price *product.quantity;
    //    shipping=shipping+product.shipping;
     
    }
// let
{total>1?  shippingCharge=100:  shippingCharge=0;}
    
    //  if(total>1){
    //     shippingCharge=100;
    //     GrandTotal=total+shippingCharge;
    //  }
    GrandTotal=total+shippingCharge;
    return (
        <div className='order-design shadow-2xl'>
        <h1 className='title1'>Order Summay</h1>
        <h1 className='mm'>Total Order = {quantity}</h1>
        <h3 className='mm'>Total price = {total} TK</h3>
        <h3 className='mm'>Shipping Charge = {shippingCharge} TK</h3>
      <hr className='hori' />
        <h3  className='mmm'>Grand Total = {GrandTotal} TK</h3>

  {
    children
  }
        {/* <Link to='/review'><button className=' nn btn-design'>Review Order</button></Link> */}
        </div>
    );
};

export default OrderDisplay;