import React from 'react';

const Servicess = ({service ,setTreatment}) => {
    const{name ,slots}=service
    // console.log(service)
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{slots.length>0 ?
          <span>{slots[0]}</span>
          :<span>NO Space Available</span>
          }
          </p>
          <p>{slots.length} space available</p>
          <div class="card-actions justify-srart">
           
         <label for="Booking-modal"
          onClick={()=>setTreatment(service)}
            disabled={slots.length===0}
          class="btn textColor">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Servicess;