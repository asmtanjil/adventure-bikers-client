import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Loading/Loading';

const AllBuyers = () => {
  const { data: buyers, isLoading, refetch } = useQuery({
    queryKey: ['buyers'],
    queryFn: async () => {
      const res = await fetch('https://adventure-bikers-server.vercel.app/users/buyer')
      const data = res.json()
      return data;
    }
  })


  const handleDeleteBuyer = buyer => {
    fetch(`https://adventure-bikers-server.vercel.app/users/${buyer._id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          refetch()
          toast.success(`${buyer.name} has been deleted successfully`)
        }
      })
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='mx-auto my-12' >
      <h2 className='text-2xl text-center my-8'>All Buyers</h2>
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
                <td><button
                  onClick={() => handleDeleteBuyer(buyer)}
                  className='btn btn-xs btn-error text-white'>Delete Buyer</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default AllBuyers;