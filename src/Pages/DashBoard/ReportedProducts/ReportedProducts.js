import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Loading/Loading';

const ReportedProducts = () => {

  const { data: reportedProducts = [], isLoading, refetch } = useQuery({
    queryKey: ['reportedProducts'],
    queryFn: async () => {
      const res = await fetch('https://adventure-bikers-server.vercel.app/reportedProducts')
      const data = await res.json()
      return data
    }
  })

  const handleDeleteReportedProduct = rep => {
    fetch(`https://adventure-bikers-server.vercel.app/reportedProducts/${rep._id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch()
          toast.success(`Product reported by ${rep.buyerEmail} has been deleted successfully`)
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
              <th>Image</th>
              <th>Buyer Email</th>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              reportedProducts && reportedProducts.map((rep, i) => <tr
                key={rep._id}
              >
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src={rep.image} alt='' />
                    </div>
                  </div>
                </td>
                <td>{rep.buyerEmail}</td>
                <td>{rep.bikeName}</td>
                <td>{rep.resalePrice} Bdt</td>
                <td><button
                  onClick={() => handleDeleteReportedProduct(rep)}
                  className='btn btn-xs btn-error text-white'>Delete Product</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default ReportedProducts;