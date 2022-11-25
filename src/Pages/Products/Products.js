import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
  const products = useLoaderData()
  return (
    <div className='my-12'>
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          products && products.map(product => <ProductCard
            key={product._id}
            product={product}
          ></ProductCard>)
        }
      </div>
    </div>
  );
};

export default Products;