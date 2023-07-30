import React from 'react';
import img1 from "../assets/Image/section2/pexels-curtis-adams-3571200.jpg"
import img2 from "../assets/Image/section2/pexels-dominika-gregušová-785367.jpg"
import img3 from "../assets/Image/section2/pexels-eva-bronzini-5947628.jpg"
import img4 from "../assets/Image/section2/pexels-expect-best-323776.jpg"

const VirtualTour = () => {
    return (
        <div 
        className=' font-mono container mx-auto'
        >
            <div className='flex items-center justify-between p-4 mt-10'> 
          <div className='flex items-center gap-3'>
          <h2 className="text-2xl">Videos & Virtual Tours </h2>
          <p className='bg-yellow-900 px-4 py-2 rounded-lg text-white'> NEW</p>
          </div>
            <a className='text-red-600 font-bold' href="#">View More > </a>
            </div>

            <section className='grid grid-cols-4 gap-5 '>

             <div>
             <div className='relative'>
              <img src={img1} className='h-52 w-full' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <p className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase flex items-center justify-center'>VIDEO</p>
              <p className="text-2xl text-black mt-4">LAYAN GREEN PARK, Phuket</p>
             </div>
             <div>
             <div className='relative'>
              <img src={img2} className='h-52 ' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <span className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase flex items-center justify-center'>Virtual Tour</span>
              <p className="text-2xl text-black mt-4">LAYAN GREEN PARK, Phuket</p>
              <a  className='text-gray-500' href="#">
บ้านเดี่ยวที่ได้แรงบันดาลใจจากความเป็นเมืองแห่งอนาคต ที่ยังคงความเป็นธรรมชาติที่</a>
             </div>
             <div>
             <div className='relative'>
              <img src={img3} className='h-52 w-full ' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <span className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase'>Virtual Tour</span>
              <p className="text-2xl text-black mt-4">LAYAN GREEN PARK, Phuket</p>
              <a  className='text-gray-500' href="#">
บ้านเดี่ยวที่ได้แรงบันดาลใจจากความเป็นเมืองแห่งอนาคต ที่ยังคงความเป็นธรรมชาติที่</a>
             </div>
             <div>
             <div className='relative'>
              <img src={img4} className='h-52 ' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <span className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute uppercase'>Virtual Tour</span>
              <p className="text-2xl text-black mt-4">LAYAN GREEN PARK, Phuket</p>
              <a  className='text-gray-500' href="#">
บ้านเดี่ยวที่ได้แรงบันดาลใจจากความเป็นเมืองแห่งอนาคต ที่ยังคงความเป็นธรรมชาติที่</a>
             </div>

            </section>
        </div>
    );
};

export default VirtualTour;