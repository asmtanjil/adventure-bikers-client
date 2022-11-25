import React from 'react';
import BannerImages from './BannerImages';

const Banner = () => {
  const bannerItems = [
    {
      id: 1,
      image: 'https://i.ibb.co/GFBVCXk/b1.jpg',
      prev: 3,
      next: 2
    },
    {
      id: 2,
      image: 'https://i.ibb.co/Jy2Mw7F/b4.jpg',
      prev: 1,
      next: 3
    },
    {
      id: 3,
      image: 'https://i.ibb.co/QNCgBFp/b6.jpg',
      prev: 2,
      next: 1
    }
  ]
  return (
    <div className="carousel w-full my-12">
      {
        bannerItems.map(bannerItem => <BannerImages
          key={bannerItem.id}
          bannerItem={bannerItem}
        ></BannerImages>)
      }
    </div>
  );
};

export default Banner;