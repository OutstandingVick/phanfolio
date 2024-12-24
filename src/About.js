import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-black mt-20 w-full h-full font-orbitron text-teal-300 flex flex-col items-center py-8 px-4 lg:px-24 overflow-hidden'>
      <div className='max-w-6xl w-full shadow-lg rounded-lg p-6 lg:p-12'>
        <h1 className='text-2xl lg:text-4xl font-rye text-center mb-6'>
          ABOUT ME
        </h1>
        <h2 className=' flex justify-center text-xl lg:text-3xl text-oxford font-poiret font-bold mb-2'>
          Hi, I'm Phantom Hex. Nice to meet you
        </h2>
        <hr className='border-t-2 border-oxford my-2' />
        <p className='mb-2 pb-2 lg:text-2xl text-base font-nunito'>
          I'm a faceless Web3 brand driving innovation, collaboration, and
          growth in the crypto and DeFi space through impactful storytelling and
          strategic engagement.
        </p>
        <div className='text-center mt-4 md:mt-8'>
          <a
            href='https://x.com/PhantomHex_'
            className='inline-block text-powder rounded-full px-4 md:px-8 py-1 md:py-3 text-base md:text-xl font-bold transition hover:border-2 hover:border-oxford'
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
