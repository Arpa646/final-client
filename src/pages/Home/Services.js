import React from 'react';
import cream from '../../assets/im/cream.jpg';
import loson from '../../assets/im/loson.jpg';
import anti from '../../assets/im/aniage.jpg';
import syrum from '../../assets/im/syrum.jpg';

import flower from '../../assets/im/pata.png';

import './a.css'

import Servicee from './Servicee';
const Services = () => {

const services=[
    {
        _id:1,
        name:'VC Moisturizerber',
        price:'500Tk',
        img:cream
    },
    {
        _id:2,
        name:' Body Loson',
        price:'700Tk',
        img:loson
    },
    {
        _id:3,
        name:'Anti-Age Face Mask',
        price:'800Tk',
        img:anti
    },
    {
        _id:4,
        name:'Face Glow Serum',
        price:'1000Tk',
        img:syrum
    },
   
    
]


    return (
        <div class="padding ">
         
      
            <div class="text-center text-xl font-bold service">
            <h1>Our Best Product</h1>
         
            </div>
<div class="grid n grid-cols-1 lg:grid-cols-4 gap-3 ml-5" >
    
     {services.map(service=><Servicee key={service._id} service={service}></Servicee>)}
     <img  className='flower' src={flower}  alt="" />
    

</div>



        </div>
    );
};

export default Services;
