import React from 'react';
import img1 from "../assets/Image/Train/pexels-laura-meinhardt-13909417.jpg"
import img2 from "../assets/Image/Train/pexels-luis-leon-2569246.jpg"
import img3 from "../assets/Image/Train/pexels-luis-leon-2569249.jpg"
import img4 from "../assets/Image/Train/pexels-nick-wehrli-3375874.jpg"

const MRT = () => {
    return (
        <div 
        className='mt-5 container mx-auto'
        >
           <div className='flex gap-4 items-center mb-3 '>
           <h3 className="text-3xl">Buy Condos Near BTs/ MRT</h3>
            <p className='bg-yellow-900 px-4 py-2 rounded-lg text-white'> NEW</p>
           </div>

          <section
          className='grid grid-cols-4 gap-5 '
          >
            
          <div>
             <div className='relative'>
              <img src={img1} className='h-52 w-full' alt="" />
              <div className='bg-yellow-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <p className='bg-yellow-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase flex items-center justify-center'>Condo</p>
              <p className="text-2xl text-black mt-4">COndos Near BTS Silon Line</p>
              <p className="text-gray-500">5535 listings</p>
             </div>
          <div>
             <div className='relative'>
              <img src={img2} className='h-52 w-full' alt="" />
              <div className='bg-yellow-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <p className='bg-yellow-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase flex items-center justify-center'>Condo</p>
              <p className="text-2xl text-black mt-4">COndos Near Airport Line</p>
              <p className="text-gray-500">5590 listings</p>
             </div>
          <div>
             <div className='relative'>
              <img src={img3} className='h-52 w-full' alt="" />
              <div className='bg-yellow-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <p className='bg-yellow-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase flex items-center justify-center'>Condo</p>
              <p className="text-2xl text-black mt-4">COndos Near MRT Silon Line</p>
              <p className="text-gray-500">5345 listings</p>
             </div>
          <div>
             <div className='relative'>
              <img src={img4} className='h-52 w-full' alt="" />
              <div className='bg-yellow-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <p className='bg-yellow-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase flex items-center justify-center'>Condo</p>
              <p className="text-2xl text-black mt-4">COndos Near BTS Silon Line</p>
              <p className="text-gray-500">5535 listings</p>
             </div>

          </section>

        </div>
    );
};

export default MRT;