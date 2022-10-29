import { map } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import CilentReviewDisplay from './CilentReviewDisplay';

const ClientReview = () => {
    const [reviews,setReviews]=useState([]);
    
    useEffect(()=>{
fetch('http://localhost:5000/review')
.then(res=>res.json())
.then(data=>setReviews(data))

    },[])
    const ReviewDelete=(id)=>{
        console.log(id)
         fetch(`http://localhost:5000/review/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
           console.log(data)
           if(data.deletedCount>0)
           {
            const remaining= reviews.filter(review=>review._id !=id)
            setReviews(remaining)
        }
            })
    }
    return (
        <div className='grid grid-cols-3 '>
       
            {reviews.map((review,index)=><CilentReviewDisplay
            
            key={index}
            review={review}
            ReviewDelete={ReviewDelete}
            ></CilentReviewDisplay>)}
        </div>
    );
};

export default ClientReview;
