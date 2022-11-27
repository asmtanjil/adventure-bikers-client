import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
  const [booking, setBooking] = useState(null)
  const products = useLoaderData()
  return (
    <div className='my-12 flex justify-center'>
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          products && products.map(product => <ProductCard
            key={product._id}
            product={product}
            setBooking={setBooking}
          ></ProductCard>)
        }
      </div>
      {
        booking &&
        <BookingModal
          booking={booking}
          setBooking={setBooking}
        ></BookingModal>
      }
    </div>
  );
};

export default Products;