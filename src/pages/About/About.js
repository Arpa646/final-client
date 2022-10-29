import React from 'react';
import './about.css'
import barber from '../../assets/im/face.jpg';
import pata from '../../assets/im/pata.png';
import pata2 from '../../assets/im/pata2.png';
import meh from '../../assets/im/meh.jpg';
import meh1 from '../../assets/im/meh2.jpg';
import meh2 from '../../assets/im/meh3.jpg';
const About = () => {
  return (
    <div class='display m-6'>
      <div class='left round'>
        <img src={meh1} alt="" />
        <img className='pata' src={pata} alt="" />
      </div>
      <div  className='right'>
      <h1 class="text-5xl font-bold">Beauty and Spa <br /> Center</h1>
      <img className='' src={pata2} alt="" />
      <p class="py-6">we provide solution as required Your skin</p>
      <button class="btn bg color">Get Started</button>
    </div>

    </div>
  );
};

export default About;