import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({img ,item1,item2,item3,item4,name, price}) => {
    return (

<div>


  
<div className="package">
             <h1 className='pac'>{name}</h1>
             <img src={img} alt="" />

             <h3 className='tk'>{price}</h3>
                 <li>{item1}</li>
                        +
                 <li>{item2}</li>
                 +
                 <li>{item3}</li>+
                 <li>{item4}</li>
                 <li><Link to="/package"> <button   className='btn  btn-design'>Take Package</button></Link></li>
                


            

      </div>
</div>
       
        /* <figure><img src={img} alt="Album"/></figure>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div> */
             
            



      
    );
};

export default Card;