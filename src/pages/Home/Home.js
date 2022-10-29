import React from 'react';
import About from '../About/About';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Formation from './Formation';
import Pricee from './Pricee';
import Services from './Services';



const Home = () => {
    return (
        <div>
         {/* <Banner></Banner> */}
         <About></About>
         <Formation></Formation>
          <Services></Services> 

         <Pricee></Pricee>

          
        
         {/* <Appointment></Appointment> */}
         
         <Contact></Contact>
        </div>
    );
};

export default Home;