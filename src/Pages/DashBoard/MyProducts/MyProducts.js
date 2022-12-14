import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../../Loading/Loading';

const MyProducts = () => {

  const { user } = useContext(AuthContext)

  const { data: myProducts = [], isLoading, refetch } = useQuery({
    queryKey: ['myProducts'],
    queryFn: async () => {
      const res = await fetch(`https://adventure-bikers-server.vercel.app/products?email=${user?.email}`)
      const data = await res.json()
      return data
    }
  })

  const handleDeleteProduct = myProduct => {
    fetch(`https://adventure-bikers-server.vercel.app/myProducts/${myProduct._id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch()
          toast.success(`${myProduct.bikeName} has been deleted successfully`)
        }
      })
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='mx-auto my-12'>
      <h2 className='text-center text-2xl'>My Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Model</th>
              <th>Price</th>
              <th>Status</th>
              <th>Make a Ad</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              myProducts && myProducts.map((myProduct, i) => <tr
                key={myProduct._id}
                myProduct={myProduct}
              >
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={myProduct.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{myProduct.bikeName}</td>
                <td>{myProduct.resalePrice}</td>
                <td>Unsold</td>
                <td><button className='btn btn-xs'>Advertise</button></td>
                <td><button
                  onClick={() => handleDeleteProduct(myProduct)}
                  className='btn btn-xs btn-error text-white'>Delete Product</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;