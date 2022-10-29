
import { format } from 'date-fns';
import React from 'react';
//import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { set } from 'date-fns/esm';
const BookingModal = ({ treatment, selected ,setTreatment ,  refetch}) => {
  
    const { _id,name , slots} = treatment
    const [user, loading, ] = useAuthState(auth);
    const formattedDate= format(selected,'PP');
    const handleBooking=(event)=>{
      event.preventDefault();

      const slot=event.target.slot.value;
    console.log(slot);
    
      const booking={
        treamentId:_id,
        treatment:name,
        selected:formattedDate,slot,
         
        clint:user.email,
        clintName:user.displayName,
        phone:event.target.phone.value,
      }
      fetch('http://localhost:5000/booking',{

      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
      })

      .then(res =>res.json())
      .then(data=>{
        console.log(data)
        if(data.success)
        {
          toast(`Appointment is set,${formattedDate} at ${slot}`)
        }
        else{
          toast.error(` Already have Appointment is set,${data.booking?.selected} at ${data.booking?.slot}`)
        }
        refetch()
      setTreatment(null);
      })
     
     
    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="Booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">you are booking for{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={format(selected, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select  name="slot" class="select select-bordered w-full max-w-xs">
                           {
                            slots.map((slot,index)=><option
                            key={index}
                            value={slot}

                            > 
                            
                            {slot}</option>)
                           }
                           
                        </select>
                        <input name="name" type="text" value={user?.displayName|| ''} class="input input-bordered w-full max-w-xs" />
                        <input name="email" type="email"value={user?.email || ''}class="input input-bordered w-full max-w-xs" />
                        <input name="phone" type="number" placeholder='number' class="input input-bordered w-full max-w-xs" />
                        <input   type="submit" value='submit' class="btn btn-primary w-full max-w-xs" />
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default BookingModal;