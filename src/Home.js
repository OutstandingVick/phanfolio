import React from 'react';

const Home = () => {
  return (
    <div className='bg-black text-british h-full w-full pt-10 md:pt-32'>
      <div className='relative md:flex md:justify-center py-6 lg:py-20 lg:pl-28 gap-2 font-orbitron'>
        <div className='font-bold text-white pt-10 pl-6 md:pt-20 pr-10 md:pr-20 pb-12 md-pb-0'>
          <h2 className='pb-1 lg:pb-2 text-base lg:text-3xl'>Hello, I'm</h2>
          <h1 className='pb-1 lg:pb-2 text-2xl lg:text-6xl font-poetsen text-teal-300'>
            Phantom Hex
          </h1>
          <h1 className='pb-1 lg:pb-2 text-base lg:text-3xl'>
            Web3 Storyteller
          </h1>
          <h1 className='pb-0 lg:pb-2 text-base lg:text-3xl'>
            Welcome to My Personal Website
          </h1>
        </div>
        <div className='rounded-full border-2 border-red-600 overflow-hidden'>
          <img
            src={`${process.env.PUBLIC_URL}/img/PhantomHex1.jpg`}
            alt='Kavishan'
            className='object-cover w-full md:w-96 h-full md:h-96'
          />
        </div>
      </div>
      <div className='invisible relative flex place-items-center py-6 lg:py-12 px-10 lg:px-8 gap-2'>
        <div className='lg:text-xl font-rubik font-bold text-white'>
          <h2 className='pb-1 lg:pb-2'>Hello, I'm</h2>
          <h1 className='pb-1 lg:pb-2'>Phantom Hex</h1>
          <h1 className='pb-1 lg:pb-2'>manager and a Blockchain</h1>
          <h1 className='pb-0 lg:pb-2'>Tester. I live in Nigeria.</h1>
        </div>
        <div className='rounded-full border-2 border-red-600 overflow-hidden'>
          <img
            src={`${process.env.PUBLIC_URL}/img/PhatomHex.jpg`}
            alt='Kavishan'
            className='object-cover w-96 h-96'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
