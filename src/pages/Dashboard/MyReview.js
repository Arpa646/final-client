import React from 'react';

const MyReview = () => {
    
const handle =(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    // const email=e.target.email.value;
    const msg=e.target.msg.value;
    const user={msg,msg}
    console.log(user)
    
    fetch('http://localhost:5000/review', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
         console.log(data)
         alert('data inserted succesfully')
         e.target.reset();
        })
}
    
    return (
        <div>
           <h1 className='text-2xl'>HYou can See Your review</h1> 

           <form onSubmit={handle} >  
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <textarea  name='name' placeholder="Name" className="input input-bordered" />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input  placeholder="Which Service" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Review</span>
                                </label>
                                <textarea name='msg' placeholder="Your Opinion" className="input input-bordered" />
                            </div> 
                         
                            <div className="form-control mt-6">
                                <input className='btn ' type="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </form>

        </div>
    );
};

export default MyReview;