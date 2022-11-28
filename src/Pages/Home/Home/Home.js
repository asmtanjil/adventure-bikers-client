import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Section from '../Section/Section';

const Home = () => {
  return (
    <div>
      <h2 className='my-4 text-lg md:text-3xl text-center'>Some collections of used bikes are below. Explore them.</h2>
      <Category></Category>
      <Banner></Banner>
      <Section></Section>
    </div>
  );
};

export default Home;