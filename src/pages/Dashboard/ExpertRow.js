import React from 'react';
import { toast } from 'react-toastify';

const ExpertRow = ({ exper, index, refetch, }) => {

    const { name, speciality, email, img } = exper
    const handleDelete = email=> {
        fetch(`http://localhost:5000/expert/${email}`, {

            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }


        })
            .then(res => res.json())
            .then(data => {
                console.log('toast',data)
                if (!data.deleteCount) {
                    toast.success(`Doctor: ${name} is deleted`)
                   refetch()
                }


            })


    }
    return (
        <tr>
            <th>1</th>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div>{index+1}</td>

            <td>{name}</td>

            <td>{speciality}</td>
            <td>

                {/* <label onClick={()=>setDeletingExpert(exper)} for="delete-confirm-modal" class="btn btn-primary">Delete</label> */}
                <button onClick={() => handleDelete(email)} className='btn btn-primary'>Delete</button>
            </td>
        </tr>
    );
};

export default ExpertRow;