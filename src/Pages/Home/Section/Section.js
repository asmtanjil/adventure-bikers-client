import React from 'react';


const Section = () => {
  return (
    <div className='my-12'>
      <h2 className="text-4xl font-semibold my-8 bg-slate-200 p-4 text-center">Some of our photo collections, reviews and rating from happy buyer</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

        <div>
          <div className="card  bg-base-100 flex justify-between shadow-xl">
            <figure><img src="https://i.ibb.co/10HF8JH/buy-4.jpg" alt="Album" /></figure>
            <div className="card-body">
              <h2 className="card-title">Took That Bike!</h2>
              <div className='flex justify-center items-center font-semibold'>
                <p>Model: Yamaha MT-15</p>
                <p>Price: 250000 Bdt</p>
                <p>Rating: 4.8</p>
              </div>
              <p>Review: Their service was really amazing. I got an authentic bike and the service of that bike is better than I expected</p>
            </div>
          </div>
        </div>


        <div>
          <div className="card  bg-base-100 flex justify-between shadow-xl">
            <figure><img src="https://i.ibb.co/wBHpCDq/buy-2.jpg" alt="Album" /></figure>
            <div className="card-body">
              <h2 className="card-title">Took That Bike!</h2>
              <div className='flex justify-center items-center font-semibold'>
                <p>Model: Suzuki Intruder</p>
                <p>Price: 250000 Bdt</p>
                <p>Rating: 4.8</p>
              </div>
              <p>Review: Their service was really amazing. I got an authentic bike and the service of that bike is better than I expected</p>
            </div>
          </div>
        </div>



        <div>
          <div className="card  bg-base-100 flex justify-between shadow-xl">
            <figure><img src="https://i.ibb.co/HpSJzH4/buy-5.jpg" alt="Album" /></figure>
            <div className="card-body">
              <h2 className="card-title">Took That Bike!</h2>
              <div className='flex justify-center items-center font-semibold'>
                <p>Model: Yamaha XSR 150</p>
                <p>Price: 250000 Bdt</p>
                <p>Rating: 4.8</p>
              </div>
              <p>Review: Their service was really amazing. I got an authentic bike and the service of that bike is better than I expected</p>
            </div>
          </div>
        </div>



        <div>
          <div className="card  bg-base-100 flex justify-between shadow-xl">
            <figure><img src="https://i.ibb.co/HFw6T45/buy-3.jpg" alt="Album" /></figure>
            <div className="card-body">
              <h2 className="card-title">Took That Bike!</h2>
              <div className='flex justify-center items-center font-semibold'>
                <p>Model: Bajaj Cruiser</p>
                <p>Price: 250000 Bdt</p>
                <p>Rating: 4.8</p>
              </div>
              <p>Review: Their service was really amazing. I got an authentic bike and the service of that bike is better than I expected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;