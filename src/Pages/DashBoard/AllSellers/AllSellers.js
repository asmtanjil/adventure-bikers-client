import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Loading/Loading';
import { MdVerified } from "react-icons/md";

const AllSellers = () => {

  const { data: sellers, isLoading, refetch } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await fetch('https://adventure-bikers-server.vercel.app/users/seller')
      const data = res.json()
      return data;
    }
  })


  const handleDeleteSeller = seller => {
    fetch(`https://adventure-bikers-server.vercel.app/users/${seller._id}`, {
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
    fetch(`https://adventure-bikers-server.vercel.app/verifySeller/${seller.email}`, {
      method: "PUT"
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success(`${seller.name} is now a verified seller`)
          refetch()
        }
      })
  }


  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='mx-auto my-12'>
      <h2 className='text-2xl text-center my-8'>All Buyers</h2>
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
            sellers && sellers.map((seller, i) => <tr
              key={seller._id}
            >
              <th>{i + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td><button
                onClick={() => handleDeleteSeller(seller)}
                className='btn btn-xs btn-error text-white'>Delete Seller</button></td>
              {
                seller?.isVerified === 'true' ?
                  <>
                    <td>
                      <button className='btn btn-xs btn-success text-white flex gap-2'><MdVerified className='text-blue-600'></MdVerified> Verified</button>
                    </td>
                  </>
                  :
                  <>
                    <td><button
                      className='btn btn-xs btn-accent text-white'
                      onClick={() => handleVerifySeller(seller)}>Verify</button>
                    </td>
                  </>
              }
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;