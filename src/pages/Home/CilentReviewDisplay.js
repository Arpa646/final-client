import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import './a.css'
const CilentReviewDisplay = ({review,ReviewDelete}) => {
    const [user]=useAuthState(auth)
    const [admin]=useAdmin(user)
    const {msg,name,_id}=review
    return (
        <div>
            <div className="card mb-4 w-96 re mt-5 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{msg}</p>
    <div className="card-actions justify-end">
     {admin &&  <button className="btn btn-primary "  onClick={()=>ReviewDelete(_id)}>Delete </button>}
    </div>
  </div>
</div>
        </div>
    );
};

export default CilentReviewDisplay;