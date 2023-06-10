import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Section from '../Section/Section';
import Reviews from '../Reviews';
import Upcoming from '../Upcoming';
import About from '../About';
import Experience from '../Experience';
import Value from '../Value';
import FollowUs from './FollowUs';
import JoinUs from '../JoinUs';

const Home = () => {
  return (
    <div className='bg-orange-50 pb-16'>
      <h2 className='py-16 text-lg md:text-5xl font-bold text-center uppercase tracking-wider'>Bike Types</h2>
      <Category></Category>
      <Banner></Banner>
      <Section></Section>
      <Reviews></Reviews>
      <Upcoming></Upcoming>
      <About></About>
      <Experience></Experience>
      <Value></Value>
      <FollowUs></FollowUs>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;