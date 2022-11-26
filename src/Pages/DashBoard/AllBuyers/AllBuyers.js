import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Loading/Loading';

const AllBuyers = () => {
  const { data: buyers, isLoading } = useQuery({
    queryKey: ['buyers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users/buyer')
      const data = res.json()
      return data;
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='mx-auto my-12' >
      <h2 className='text-2xl text-center'>All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              buyers && buyers.map((buyer, i) => <tr>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td><button className='btn btn-xs btn-accent'>Delete Buyer</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default AllBuyers;