import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Loading/Loading';

const AllSellers = () => {

  const { data: sellers, isLoading } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users/seller')
      const data = res.json()
      return data;
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='mx-auto my-12'>
      <h2 className='text-2xl text-center'>All Buyers</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            <th>Admin Action</th>
          </tr>
        </thead>
        <tbody>
          {
            sellers && sellers.map((seller, i) => <tr>
              <th>{i + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td><button className='btn btn-xs btn-accent'>Delete Seller</button></td>
              <td><button className='btn btn-xs btn-accent'>Verify Seller</button></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;