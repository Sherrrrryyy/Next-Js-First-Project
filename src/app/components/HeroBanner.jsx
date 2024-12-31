import React from 'react';

const HeroBanner = () => {
  return (
    <div className="bg-red-500 m-10 mt-5 flex flex-col md:flex-row items-center justify-center h-96">

      <div className='block justify-center items-center text-center'>
        <h1 className='font-thin text-6xl text-white -mt-10'>Clearance</h1>
        <h1 className='text-white text-8xl'>SALE</h1>
        <p className='border border-white text-white p-2 mt-2 font-bold text-2xl'>Upto 70% off</p>
        <p className='mt-10 text-white font-bold'>www.baggy.com</p>
      </div>
    </div>
  );
};

export default HeroBanner;
