import React from 'react';

const WhyUs = () => {
  return (
    <div className='pb-16'>
      <h2 className='text-5xl text-black font-bold text-center py-16 uppercase tracking-wider'>Why Adventure Bikers?</h2>

      <div className='grid gap-10 grid-cols-1 md:grid-cols-2'>

        <img src={"https://i.ibb.co/DRwscg7/45.jpg"} alt="" />

        <div className='flex flex-col justify-center items-center mr-2'>
          <h4 className='text-2xl text-black text-center font-bold my-4 tracking-widest uppercase'>Why Will You Buy From Us?</h4>
          <p className='text-slate-400 px-8 text-justify'>We're a team of experienced travel agents and sales agents based in Cuba, providing personalized services to groups, corporate companies, and individual travelers from all over the world since 2002. We love our country, and we want the world to experience it and get to know it the way we do. Nothing makes us happier than seeing our customers smile, hearing what a great experience they had in Cuba. We look forward to being your local host agency.</p>
        </div>

      </div>

    </div>
  );
};

export default WhyUs;