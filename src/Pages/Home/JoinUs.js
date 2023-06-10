import React from 'react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  return (
    <div className='py-16 px-8 flex gap-20 justify-center items-center'>
      <div className='py-16'>
        <h2 className='text-5xl text-black font-bold py-4'>Ready To Explore our Bikes?</h2>
        <p className='text-slate-700'>Wanna learn latest technology from our world class instructor? Submit you e-mail and set a strong password. Hurry up! Don't miss the chance.</p>
      </div>
      <Link to="/signup">
        <button className='btn join-item rounded-full'>Join Us</button>
      </Link>
    </div>
  );
};

export default JoinUs;