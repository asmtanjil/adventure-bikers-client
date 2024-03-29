import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast('You have Logged Out')
      })
      .catch()
  }

  const menuItems = <React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    {
      user?.uid ?
        <>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><button onClick={handleLogOut}>Sign Out</button></li>
        </>
        :
        <li><Link to='/login'>Login</Link></li>
    }
  </React.Fragment>

  return (
    <div className="navbar bg-black text-white flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-outline lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={1} className="font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Adventure-Bikers</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-semibold menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
  );
};

export default Navbar;