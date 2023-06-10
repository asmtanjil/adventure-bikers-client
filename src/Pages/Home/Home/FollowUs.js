import React from 'react';

const FollowUs = () => {
  return (
    <div className='pb-16 bg-orange-100'>
      <h2 className='text-lg text-slate-400 font-semibold text-center pt-16 lowercase tracking-wider'>Follow us</h2>
      <h2 className='text-5xl text-black font-bold text-center pb-16 uppercase tracking-wider'>Instagram Update</h2>

      <div className='grid gap-2 grid-cols-1 md:grid-cols-4 justify-center items-center'>
        <img src={"https://i.ibb.co/qWPbgJ7/b45.jpg"} alt="" />

        <div className='flex flex-col gap-2'>
          <img src={"https://i.ibb.co/DRwscg7/45.jpg"} alt="" />
          <img src={"https://i.ibb.co/HXYxf18/ab.jpg"} alt="" />
        </div>

        <img src={"https://i.ibb.co/Sfbmx52/b4545.jpg"} alt="" />

        <div className='flex flex-col gap-2'>
          <img src={"https://i.ibb.co/9WCZ7KH/ninja.jpg"} alt="" />
          <img src={"https://i.ibb.co/TWQNMM5/gnjhg.jpg"} alt="" />
        </div>
      </div>

    </div>
  );
};

export default FollowUs;