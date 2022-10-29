import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({product, reoveProduct}) => {
    const {name,price,quantity,img}=product;
    return (
        <div className='product-container shadow-xl flex justify-between'>
             <div className='flex'>
             <div>
              <img   src={img} width="50"></img>
             </div>
             <div>
             {name} 
             <small>price : {price}</small>
             <br />
               quantity :{quantity}
             <br />
           
             </div>
             </div>

             <div>
             <button onClick={()=>reoveProduct(product)} className="delete "><FontAwesomeIcon  icon={ faTrash} /></button>
             {/* <FontAwesomeIcon icon={faCoffee} /> */}
             </div>
           
        </div>
    );
};

export default ReviewItem;