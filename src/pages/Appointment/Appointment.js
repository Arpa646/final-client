import React, { useState } from 'react';
import AppBanner from './AppBanner';
import AvailableApp from './AvailableApp';
import '../Appointment/appointment.css'

const Appointment = () => {
    //const [selected,setDate]=useState(new Date())
    const [selected,setDate]=useState(new Date())

    return (
        <div>
           <AppBanner selected={selected} setDate={setDate} ></AppBanner>
           <AvailableApp  selected={selected}></AvailableApp>
       
        </div>
    );
};

export default Appointment;