import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPinterest, FaTwitter, FaStar, FaRegStarHalfStroke, FaRegStar } from 'react-icons/fa';

const Reviews = () => {
  return (
    <div className='bg-orange-50 py-4 px-8'>
      <h2 className='text-5xl text-black font-bold text-center my-16 uppercase tracking-wider'>Buyer Review</h2>

      <div className='flex gap-10 items-center justify-center my-16'>
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
            <img src={"https://i.ibb.co/jDH7KB0/r3.jpg"} alt="" />
          </div>
        </div>
        <div>
          <h2 className='uppercase py-2 tracking-widest font-semibold'>Rafsan Ahmed</h2>
          <p className='text-slate-500 text-justify'>Great communication, always replied to emails quickly and answered all questions. Only issue was when we were in Fiji they didn't have our name for the cruise back to the mainland or for the bus back to the airport. Luckily, we had screenshots of our vouchers etc but we were told they would have our name for everything. Otherwise everything was great and went smoothly with the company. Will definitely book through Travel online again.</p>
          <div className='flex gap-10 justify-between items-center'>
            <div className='flex gap-4 mt-4 text-yellow-500'>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaStar /></p>
            </div>
            <div>
              <p className='mt-4 flex gap-4'>
                <FaFacebook className='text-xl' />
                <FaInstagram className='text-xl' />
                <FaWhatsapp className='text-xl' />
                <FaPinterest className='text-xl' />
                <FaTwitter className='text-xl' />
              </p>
            </div>
          </div>

        </div>
      </div>


      <div className='flex gap-10 items-center justify-center my-16'>
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
            <img src={"https://i.ibb.co/2hbdCVd/r2.jpg"} alt="" />
          </div>
        </div>
        <div>
          <h2 className='uppercase py-2 tracking-widest font-semibold'>Helen Smith</h2>
          <p className='text-slate-500 text-justify'>Very helpful all the way through. Quick response to queries and very polite. I don't know that you can improve we were very happy with your service. Everything ran smoothly from the word go. We had a wonderful holiday. Thank you. Yes I would recommend you.Very helpful all the way through. Quick response to queries and very polite. I don't know that you can improve we were very happy with your service. Everything ran smoothly from the word go. We had a wonderful holiday. Thank you. Yes I would recommend you.</p>
          <div className='flex gap-10 justify-between items-center'>
            <div className='flex gap-4 mt-4 text-yellow-500'>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaRegStar /></p>
            </div>
            <div>
              <p className='mt-4 flex gap-4'>
                <FaFacebook className='text-xl' />
                <FaInstagram className='text-xl' />
                <FaWhatsapp className='text-xl' />
                <FaPinterest className='text-xl' />
                <FaTwitter className='text-xl' />
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className='flex gap-10 items-center justify-center my-16'>
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
            <img src={"https://i.ibb.co/6J2HBB3/r5.jpg"} alt="" />
          </div>
        </div>
        <div>
          <h2 className='uppercase py-2 tracking-widest font-semibold'>Johnny Boy</h2>
          <p className='text-slate-500 text-justify'>Staff are super efficient, picked up an error regarding travel and hotel check in and emailed me options, so good. Everything went smoothly as planned, second time we used TravelOnline great special offers that's what I like value for money with great service.</p>
          <div className='flex gap-10 justify-between items-center'>
            <div className='flex gap-4 mt-4 text-yellow-500'>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaRegStar /></p>
              <p><FaRegStar /></p>
            </div>
            <div>
              <p className='mt-4 flex gap-4'>
                <FaFacebook className='text-xl' />
                <FaInstagram className='text-xl' />
                <FaWhatsapp className='text-xl' />
                <FaPinterest className='text-xl' />
                <FaTwitter className='text-xl' />
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className='flex gap-10 items-center justify-center my-16'>
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
            <img src={"https://i.ibb.co/xjcRHCf/f2.jpg"} alt="" />
          </div>
        </div>
        <div>
          <h2 className='uppercase py-2 tracking-widest font-semibold'>Angel Jolly</h2>
          <p className='text-slate-500 text-justify'>Our first time using Travel Online for this trip. Absolutely great - everything went according to plan and really happy with our flights / accommodation and airport transfers. I appreciated having the flexibility to change flights/airlines to suit our needs as well as the ability to pay a deposit at time of booking and then pay remainder before travelling. I have now recommended Travel Online to a few friends (who have booked) and would definitely use Travel Online again for future holidays.</p>
          <div className='flex gap-10 justify-between items-center'>
            <div className='flex gap-4 mt-4 text-yellow-500'>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaStar /></p>
              <p><FaRegStar /></p>
            </div>
            <div>
              <p className='mt-4 flex gap-4'>
                <FaFacebook className='text-xl' />
                <FaInstagram className='text-xl' />
                <FaWhatsapp className='text-xl' />
                <FaPinterest className='text-xl' />
                <FaTwitter className='text-xl' />
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Reviews;