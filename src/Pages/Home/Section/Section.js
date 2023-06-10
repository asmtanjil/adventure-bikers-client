import React from 'react';


const Section = () => {
  return (
    <div className='pb-16 bg-orange-100'>
      <h2 className="text-5xl font-bold py-16 px-8 text-center uppercase tracking-wider">Sold bike's Photo album</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img src="https://i.ibb.co/10HF8JH/buy-4.jpg" alt="Album" className='' style={{ width: '100%' }} />
        <img src="https://i.ibb.co/wBHpCDq/buy-2.jpg" alt="Album" className='' style={{ width: '100%' }} />
        <img src="https://i.ibb.co/HpSJzH4/buy-5.jpg" alt="Album" className='' style={{ width: '100%' }} />
        <img src="https://i.ibb.co/HFw6T45/buy-3.jpg" alt="Album" className='' style={{ width: '100%' }} />
        <img src="https://i.ibb.co/HFw6T45/buy-3.jpg" alt="Album" className='' style={{ width: '100%' }} />
        <img src="https://i.ibb.co/HFw6T45/buy-3.jpg" alt="Album" className='' style={{ width: '100%' }} />
      </div>


    </div>
  );
};

export default Section;