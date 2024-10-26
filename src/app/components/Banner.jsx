import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center mt-16 bg-red-50 p-6 md:p-12">
      <div className="max-w-lg text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-950 leading-tight">
          Don’t cry! Buy a bag <br />
          <span className="text-green-950">and get over it</span>
        </h1>
        <p className="text-green-950 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis autem asperiores 
          consequatur accusantium quisquam, consequuntur recusandae? Minus quidem officiis distinctio 
          sunt quis, dolorem corporis perferendis, unde nobis, nesciunt rem?
        </p>
      </div>

      <div className="relative w-72 h-72 md:w-96 md:h-96 mt-6 md:mt-0 md:ml-10">
        <Image
          src="/Bag.png"
          alt="Bag"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
