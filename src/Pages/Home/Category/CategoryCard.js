import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div>
      <h2>{category.message}</h2>
    </div>
  );
};

export default CategoryCard;