import React from 'react';
import img from '../../assets/im/15.webp'
const Appointment = () => {
    return (
       <section style={{background:`url(${img})`
         }} className="app-design">
         <div></div>
         <div className='align'> <button class="btn bg color">Get Started</button></div>
        
       </section>
    );
};

export default Appointment;