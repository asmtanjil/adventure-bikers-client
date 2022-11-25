import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const ProductCard = ({ product }) => {
  const { image, bikeName, sellerName, used, resalePrice, marketPrice } = product;
  return (
    <div className="card w-90 md:w-96 lg:w-100 bg-amber-50 shadow-xl">
      <figure className='p-4'>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Model: {bikeName}</h2>
        <p className='font-semibold text-xl'>Price: {resalePrice}</p>
        <p className='font-semibold text-xl'>Market Price: {marketPrice}</p>
        <p className='text-justify'>Condition: {used} used</p>
        <p className='text-justify'>Seller: {sellerName}</p>
        <div className="card-actions justify-end">
          <label htmlFor="bike-Booking-Modal" className="btn btn-accent text-white">Book Now</label>
        </div>
      </div>
      {
        product && <BookingModal
          product={product}
        ></BookingModal>
      }
    </div>
  );
};

export default ProductCard;