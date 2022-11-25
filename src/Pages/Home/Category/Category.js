import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {

  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/categories')
      const data = await res.json()
      return data;
    }
  })

  return (
    <div>
      {
        categories && categories.map(category => <CategoryCard
          key={category._id}
          category={category}
        ></CategoryCard>)
      }
    </div>
  );
};

export default Category;