import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { name, image, message, price, _id } = category
  return (
    <div className="card w-90 md:w-96 lg:w-100 bg-amber-50 shadow-xl">
      <figure className='p-4'>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className='font-semibold text-xl'>Price Range: BDT {price}</p>
        <p className='text-justify'>{message}</p>
        <div className="card-actions justify-end">
          <Link to={`/category/${_id}`}>
            <button className="btn btn-accent text-white">View Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;