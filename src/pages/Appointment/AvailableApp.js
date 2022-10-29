import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import '../Appointment/appointment.css'
import BookingModal from './BookingModal';
import Servicess from './Servicess';
import Loading from '../shared/Loading.js';
const AvailableApp = ({selected}) => {
   // const[services ,setServices]=useState([])
    const[treatment,setTreatment]=useState(null)

    const formattedDate=format(selected,'PP')


    const {data:services,isLoading,refetch}=useQuery(['available',formattedDate],()=>
    
        fetch(`http://localhost:5000/available?selected=${formattedDate}`)
           .then(res=>res.json())  
    )
    if(isLoading){
         return <Loading></Loading>
    }
    
    
    
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?selected=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formattedDate])
    return (
        <div>
            <h4 className="text-xl p-6 text-center textColor">Available Appointment on :  {format(selected, 'PP')}</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services?.map(service=><Servicess 
                key={service._id}
                service={service}
                setTreatment={setTreatment}
              
                 ></Servicess>)
                 }
              </div>
              {treatment && <BookingModal selected={selected} 
              setTreatment={setTreatment}
              treatment={treatment}
              refetch={refetch}></BookingModal>}

        </div>
    );
};

export default AvailableApp;