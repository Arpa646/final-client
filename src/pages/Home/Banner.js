import React from 'react';
import Bphoto from '../../assets/im/3.jpg'
import meh from '../../assets/im/meh.jpg'
import './a.css'
const Banner = () => {
    return (
        <div className='color text-color   '>
            <div class="hero min-h-screen ">
  <div  class="hero-content flex-col lg:flex-row-reverse ">
    <img src={Bphoto} class="max-w-sm rounded-lg shadow-2xl" />
    <div >
      <h1 class="text-5xl font-bold">Your problem We make solution</h1>
      <p class="py-6">we provide solution as required Your skin</p>
      <button class="btn bg color">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;