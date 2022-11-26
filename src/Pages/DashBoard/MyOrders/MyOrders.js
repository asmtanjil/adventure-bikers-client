import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../../Loading/Loading';

const MyOrders = () => {
  const { user } = useContext(AuthContext)

  const { data: bookings, isLoading } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      const data = await res.json()
      return data
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='my-12 bg-sky-50'>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Model</th>
              <th>Price</th>
              <th>Name</th>
              <th>Contact</th>
              <th>location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings && bookings.map((booking, i) => <tr
                key={booking._id}
                booking={booking}
              >
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={booking.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{booking.bikeName}</td>
                <td>{booking.resalePrice}</td>
                <td>{booking.name}</td>
                <td>{booking.phone}</td>
                <td>{booking.location}</td>
                <td><button className='btn btn-xs btn-accent text-white'>Make Payment</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;