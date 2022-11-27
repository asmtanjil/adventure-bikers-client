import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Loading/Loading';

const AllSellers = () => {

  const { data: sellers, isLoading, refetch } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users/seller')
      const data = res.json()
      return data;
    }
  })


  const handleDeleteSeller = seller => {
    fetch(`http://localhost:5000/users/${seller._id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          refetch()
          toast.success(`${seller.name} has been deleted successfully`)
        }
      })
  }


  const handleVerifySeller = seller => {

  }


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
              <td><button
                onClick={() => handleDeleteSeller(seller)}
                className='btn btn-xs btn-error text-white'>Delete Seller</button></td>
              <td><button
                onClick={() => handleVerifySeller(seller)}
                className='btn btn-xs btn-accent'>Verify Seller</button></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;