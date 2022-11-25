import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, signInWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';

  const [loginError, setLoginError] = useState('')

  const handleLogIn = data => {
    setLoginError('')
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user
        console.log(user)
        toast.success('You have logged in successfully')
        navigate(from, { replace: true })
      })
      .catch(err => {
        console.error(err.message)
        setLoginError(err.message)
      })
  }

  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div className='w-96 p-7'>
        <h2 className='text-2xl text-center font-bold'>Login</h2>
        <form onSubmit={handleSubmit(handleLogIn)}>

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


          <input className='btn btn-info w-full mt-4' type="submit" value="Login" />
          {loginError && <p className='text-red-500'>{loginError}</p>}
        </form>
        <p className='py-2 text-center'>Are you new here? <Link to='/signup' className='text-primary'>Please Register</Link></p>
        <div className="divider">OR</div>
        <button onClick={signInWithGoogle} className='btn w-full'>Login With Google</button>
      </div>
    </div>
  );
};

export default Login;