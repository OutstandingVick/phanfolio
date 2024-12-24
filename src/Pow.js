import React from 'react';

const Pow = () => {
  return (
    <div className='min-h-screen bg-black text-teal-300 font-nunito mt-12 w-full h-full items-center py-8 px-4 lg:px-24 overflow-hidden'>
      <div></div>
      <h2 className='text-2xl md:text-4xl font-semibold mb-6 mt-4 flex justify-center font-nunito'>
        MY LATEST WORKS
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 text-lg lg:text-xl'>
        {/* 1st Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/PhantomHex_/status/1868921172269973950?t=omS1FYu866eJbTPp7ejKjw&s=19'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            1. NFTs
          </a>
        </div>
        {/* 2nd Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/PhantomHex_/status/1864937801730424878?t=k9ivSKt_dgN2emT213qt9g&s=19'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            2. Lessons From Superteam
          </a>
        </div>
        {/* 3rd Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/PhantomHex_/status/1867296001708691499?t=JpQiJz2_KCED8TDL8VJHfQ&s=19'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            3. Base L2 Thread
          </a>
        </div>
        {/* 4th Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/PhantomOnchain/status/1866424564508770503?t=QFbEItS-SymGxfDobQJPWw&s=19'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            4. The Art of Disappearing
          </a>
        </div>
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/PhantomHex_/status/1862253879917674624?t=rdZ9WTDXUs9ux6XpLcfS_A&s=19'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            5. The New Blockchain Era
          </a>
        </div>
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/PhantomHex_/status/1863874358147420476?t=ly5CagDGGlPdhKqQzuNxSA&s=19'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline'
          >
            6. Superteam Thread
          </a>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Pow;
