import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
//import DeleteConfirmModal from './DeleteConfirmModal';
import ExpertRow from './ExpertRow';

const ManageExpert = () => {
  // const [deletingExpert,setDeletingExpert]=useState(null)
    const { data: expert, isLoading ,refetch } = useQuery('expert', () => fetch('http://localhost:5000/expert', {
         headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }

        }).then(res => res.json()))

        
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl'>Manage doctor{expert.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>img</th>
        <th>Name</th>
        <th>email</th>
        <th>Specialist</th>
      </tr>
    </thead>
    <tbody>
      
      {
        expert.map((exper,index)=><ExpertRow
        index={index}
        key={exper._key}
        exper={exper}
        refetch={refetch}
      
        ></ExpertRow>)
      }
      {/* {
        expert.map((exper,index)=>console.log('hiiiiiiii',exper))
      } */}
  
     
    </tbody>
  </table>
</div>
{/* {deletingExpert && <DeleteConfirmModal
deletingExpert={deletingExpert}
refetch={refetch}
setDeletingExpert={setDeletingExpert}
></DeleteConfirmModal>} */}
        </div>
    );
};

export default ManageExpert;