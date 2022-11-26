import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const imageHostKey = process.env.REACT_APP_ImageHostKey;
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()


  const handleAddProduct = data => {
    console.log(data)
    const image = data.image[0]
    const formData = new FormData();
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imageData => {
        if (imageData.success) {
          const product = {
            image: imageData.data.url,
            bikeName: data.bikeName,
            resalePrice: data.resalePrice,
            marketPrice: data.marketPrice,
            condition: data.condition,
            phone: data.phone,
            location: data.location,
            year: data.year,
            sellerName: user?.displayName
          }
          fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(product)
          })
            .then(res => res.json())
            .then(data => {
              if (data.acknowledged) {
                console.log(data)
                toast.success('Product added Successfully')
                navigate('/dashboard/myProducts')
              }
            })
        }
      })
  }

  return (
    <div className='mx-auto my-12'>
      <h2 className='text-center text-3xl'>Add a Product</h2>

      <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit(handleAddProduct)} className='w-96 p-8'>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Bike Brand</span></label>
            <input
              type="text"
              {...register("bikeName", { required: "Name is required" })}
              className="input input-bordered w-full"
            />
            {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
          </div>


          <div className="form-control w-full">
            <label className="label"><span className="label-text">Resale Price</span></label>
            <input
              type="text"
              {...register("resalePrice", { required: "Resale Price is required" })}
              className="input input-bordered w-full"
            />
            {errors.resalePrice && <p className='text-red-500' role="alert">{errors.resalePrice?.message}</p>}
          </div>


          <div className="form-control w-full">
            <label className="label"><span className="label-text">Market Price</span></label>
            <input
              type="text"
              {...register("marketPrice", { required: "Market Price is required" })}
              className="input input-bordered w-full"
            />
            {errors.marketPrice && <p className='text-red-500' role="alert">{errors.marketPrice?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Condition</span></label>
            <select
              {...register("condition", { required: "Condition is required" })}
              className="select select-bordered w-full">
              <option>Please Select your Bike Condition</option>
              <option>Fair</option>
              <option>Good</option>
              <option>Excellent</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Your Contact Number</span></label>
            <input
              type="text"
              {...register("phone", { required: "Phone is required" })}
              className="input input-bordered w-full"
            />
            {errors.phone && <p className='text-red-500' role="alert">{errors.phone?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Location</span></label>
            <input
              type="text"
              {...register("location", { required: "Market Price is required" })}
              className="input input-bordered w-full"
            />
            {errors.location && <p className='text-red-500' role="alert">{errors.location?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Year of Purchase</span></label>
            <input
              type="text"
              {...register("year", { required: "Purchased year is required" })}
              className="input input-bordered w-full"
            />
            {errors.year && <p className='text-red-500' role="alert">{errors.year?.message}</p>}
          </div>


          <div className="form-control w-full">
            <label className="label"><span className="label-text">Seller</span></label>
            <input
              type="email"
              {...register("sellerName")}
              defaultValue={user?.displayName} disabled
              className="input input-bordered w-full" />
            {errors.year && <p className='text-red-500' role="alert">{errors.year?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Image</span></label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="input input-bordered w-full p-2"
            />
            {errors.image && <p className='text-red-500' role="alert">{errors.image?.message}</p>}
          </div>

          <input className='btn btn-accent w-full mt-4 text-white' type="submit" value="Add Product" />

        </form>
      </div>

    </div>
  );
};

export default AddProduct;