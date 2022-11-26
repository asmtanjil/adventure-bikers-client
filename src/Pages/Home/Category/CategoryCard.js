import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { bikeType, image, details, price } = category
  return (
    <div className="card w-90 md:w-96 lg:w-100 bg-amber-50 shadow-xl">
      <figure className='p-4'>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bikeType} Bikes</h2>
        <p className='text-lg'>Price: Upto Bdt {price}</p>
        <p className='text-justify'>{details}</p>
        <div className="card-actions justify-end">
          <Link to={`/category/${bikeType}`}>
            <button className="btn btn-accent text-white">View Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;