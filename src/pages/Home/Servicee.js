import React from 'react';

const Servicee = ({service}) => {
    return (

      <div className='product '>

<div class="card cards   ">
      <figure><img src={service.img} alt="Shoes" /></figure>
      
        
        



           <h1 className='name'> {service.name}</h1>
           <h1 className='range'> {service.price}</h1>
         <div class="card-actions justify-end">
          
        </div> 
   
    </div>
      </div>
    );
};

export default Servicee;