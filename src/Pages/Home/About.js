import React from 'react';

const About = () => {
  return (
    <div className='pb-16'>
      <h2 className='text-5xl text-black font-bold text-center py-16 uppercase tracking-wider'>About adventure bikers</h2>
      <div className='grid gap-10 grid-cols-1 md:grid-cols-2'>
        <img src={"https://i.ibb.co/HXYxf18/ab.jpg"} alt="" />
        <div className='flex items-center'>
          <p className='text-slate-400 px-8 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit fuga cum temporibus accusamus, eius vero. Rem dolor dolore nam nihil natus. Voluptate ipsam dolor repudiandae ex voluptatem fugiat rerum deleniti optio nesciunt esse, accusamus quisquam! Quaerat quam officia dignissimos ab unde est qui nam quod! Dolores, debitis sint corporis saepe, id temporibus voluptatem adipisci mollitia in soluta est necessitatibus beatae voluptate. Enim nisi aspernatur voluptate cupiditate dignissimos numquam rem nemo quae tenetur accusantium iste placeat, quaerat fugit blanditiis fugiat vero odit beatae vel facilis architecto vitae, neque, minima libero doloremque. Rerum iste et sapiente voluptates sequi reiciendis, repellat nemo?</p>
        </div>
      </div>
    </div>
  );
};

export default About;