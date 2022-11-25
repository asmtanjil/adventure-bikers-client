import React from 'react';

const ProductCard = ({ product }) => {
  const { image, bikeName, price, sellerName, used } = product;
  return (
    <div className="card w-90 md:w-96 lg:w-100 bg-amber-50 shadow-xl">
      <figure className='p-4'>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bikeName}</h2>
        <p className='font-semibold text-xl'>Price Range: BDT {price}</p>
        <p className='text-justify'>{used}</p>
        <p className='text-justify'>{sellerName}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent text-white">View Products</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;