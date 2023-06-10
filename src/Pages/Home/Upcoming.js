import React from 'react';

const Upcoming = () => {
  return (
    <div className='bg-orange-100 pb-16 px-4'>
      <h2 className='text-5xl text-black font-bold text-center py-16 uppercase tracking-wider'>upcoming bikes pictures</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <img src={'https://i.ibb.co/9WCZ7KH/ninja.jpg'} alt="" style={{ width: '100%' }} className='rounded-lg' />
        <img src={'https://i.ibb.co/9WCZ7KH/ninja.jpg'} alt="" style={{ width: '100%' }} className='rounded-lg' />
        <img src={'https://i.ibb.co/9WCZ7KH/ninja.jpg'} alt="" style={{ width: '100%' }} className='rounded-lg' />
        <img src={'https://i.ibb.co/9WCZ7KH/ninja.jpg'} alt="" style={{ width: '100%' }} className='rounded-lg' />
        <img src={'https://i.ibb.co/9WCZ7KH/ninja.jpg'} alt="" style={{ width: '100%' }} className='rounded-lg' />
        <img src={'https://i.ibb.co/9WCZ7KH/ninja.jpg'} alt="" style={{ width: '100%' }} className='rounded-lg' />
      </div>
    </div>
  );
};

export default Upcoming;