import React from 'react';
import img1 from "../assets/Image/Home/hom1.jpg"
import img2 from "../assets/Image/Home/home2.jpg"
import img3 from "../assets/Image/Home/hom3.jpg"
import img4 from "../assets/Image/Home/home4.jpg"

const CuratedCollection = () => {
    return (
        <div>
           <div 
        className='mt-5 container mx-auto'
        >
           <div className='flex gap-4 items-center mb-3 '>
           <h3 className="text-3xl">Curated COllections</h3>
            <p className='bg-yellow-900 px-4 py-2 rounded-lg text-white'> NEW</p>
           </div>

          <section
          className='grid grid-cols-4 gap-5 '
          >
            
          <div>
             <div className='relative'>
              <img src={img1} className='h-52 w-full' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <p className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase flex items-center justify-center'>Condo</p>
              <p className="text-2xl text-black mt-4">Affordable condo in Thailand</p>
              <p className="text-gray-500">695 listings</p>
             </div>
          <div>
             <div className='relative'>
              <img src={img2} className='h-52 w-full' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <p className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase flex items-center justify-center'>Condo</p>
              <p className="text-2xl text-black mt-4">Stay in busting Bangkok</p>
              <p className="text-gray-500">37053 listings</p>
             </div>
          <div>
             <div className='relative'>
              <img src={img3} className='h-52 w-full' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <p className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase flex items-center justify-center'>Condo</p>
              <p className="text-2xl text-black mt-4">COndos Near BTS Thong Lo</p>
              <p className="text-gray-500">182
               listings</p>
             </div>
          <div>
             <div className='relative'>
              <img src={img4} className='h-52 w-full' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <p className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase flex items-center justify-center'>Condo</p>
              <p className="text-2xl text-black mt-4">Luxury stay in Bangkok</p>
              <p className="text-gray-500">10396 listings</p>
             </div>

          </section>

        </div>  
        </div>
    );
};

export default CuratedCollection;