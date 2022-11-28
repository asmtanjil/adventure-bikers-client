import React from 'react';
import './Banner.css'

const BannerImages = ({ bannerItem }) => {
  const { image, id, prev, next } = bannerItem
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carousel-img">
        <img src={image} alt='' className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-start w-4/5 transform -translate-y-1/2 left-24 top-1/2">
        <p className='text-white text-lg lg:text-2xl'>You are on your own. You are not protected by two tons of steel, rubber, foam padding and safety glass. Neither are you steering two tons of guided missile toward other cars, people and property. Riding is an art as well as a craft and no amount of explanation can take the place of experience</p>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle mr-5">❯</a>
      </div>
    </div>
  );
};

export default BannerImages;