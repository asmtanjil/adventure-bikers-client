import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {

  const { createUser, signInWithGoogle, updateUser } = useContext(AuthContext)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signUpError, setSignUpError] = useState('')

  const handleSignUp = data => {
    setSignUpError('')
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
        toast.success('User Created Successfully')
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
          .then(() => {
            saveUser(data?.name, data?.email, data?.role)
          })
          .catch(err => console.error(err))
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  const saveUser = (name, email, role) => {
    const user = { name, email, role }
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div className='w-96 p-7'>
        <h2 className='text-2xl text-center font-bold'>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Name</span></label>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered input-info w-full"
            />
            {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Email</span></label>
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email address is required" })}
              className="input input-bordered input-info w-full"
            />
            {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Password</span></label>
            <input
              type="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: 'Pass must be with 6 Characters' },
                pattern: { value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6}/, message: "Password must have a capital letter and a number" }
              })}
              className="input input-bordered input-info w-full"
            />
            {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
            <label className="label"><span className="label-text">Forgot Password?</span></label>
          </div>


          <div className="form-control w-full">
            <label className="label"><span className="label-text">Select User Type</span></label>
            <select type='text'
              {...register("role")}
              className="select input-bordered input-info w-full max-w-xs">
              <option>Buyer</option>
              <option>Seller</option>
            </select>
          </div>

          <input className='btn btn-info w-full mt-4' type="submit" value="Sign Up" />
          {signUpError && <p className='text-red-500'>{signUpError}</p>}
        </form>
        <p className='py-2 text-center'>Already have an account? <Link to='/login' className='text-primary'>Please Login</Link></p>
        <div className="divider">OR</div>
        <button onClick={signInWithGoogle} className='btn w-full'>Login With Google</button>
      </div>
    </div>
  );
};

export default SignUp;