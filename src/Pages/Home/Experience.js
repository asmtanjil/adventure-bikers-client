import React from 'react';

const Experience = () => {
  return (
    <div className='pb-16 bg-orange-100'>
      <h4 className='text-lg text-slate-400 font-semibold text-center pt-16 lowercase tracking-wider'>Adventure-bikers</h4>
      <h2 className='text-5xl text-black font-bold text-center pb-16 uppercase tracking-wider'>Experience The Fun</h2>
      <div className='grid gap-10 grid-cols-1 md:grid-cols-2'>

        <div className='flex flex-col justify-center items-center'>
          <p className='text-slate-400 px-8 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit fuga cum temporibus accusamus, eius vero. Rem dolor dolore nam nihil natus. Voluptate ipsam dolor repudiandae ex voluptatem fugiat rerum deleniti optio nesciunt esse, accusamus quisquam! Quaerat quam officia dignissimos ab unde est qui nam quod! Dolores, debitis sint corporis saepe, id temporibus voluptatem adipisci mollitia in soluta est necessitatibus beatae voluptate. Enim nisi aspernatur voluptate cupiditate dignissimos numquam rem nemo quae tenetur accusantium iste placeat, quaerat fugit blanditiis fugiat vero odit beatae vel facilis architecto vitae, neque, minima libero doloremque. Rerum iste et sapiente voluptates sequi reiciendis, repellat nemo?</p>
          <div className='flex gap-10 justify-evenly items-center text-slate-600 pt-8'>
            <p className='text-lg uppercase'>fast delivery</p>
            <p className='text-lg uppercase'>free shipping</p>
            <p className='text-lg uppercase'>free return</p>
          </div>
        </div>
        <img src={"https://i.ibb.co/9WCZ7KH/ninja.jpg"} alt="" />
      </div>
    </div>
  );
};

export default Experience;