import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {


      fetch(`http://localhost:5000/booking?clint=${user.email}`, {


        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })


        .then(res => {
          console.log(res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/')
          }

          return res.json()

        }
        )
        .then(data => {
          setAppointments(data)


        })
    }
  }, [user])
  return (
    <div>
      <h1>appointment :{appointments.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>time</th>
              <th>treatment</th>
            </tr>
          </thead>
          <tbody>

            {appointments.map((a, index) =>
              <tr>
                <td>{index + 1}</td>
                <td>{a.clintName}</td>
                <td>{a.selected}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>

            )}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;