import React from 'react';
import img1 from "../assets/Image/Home/hom1.jpg"
import img2 from "../assets/Image/Home/home2.jpg"
import img3 from "../assets/Image/Home/hom3.jpg"
import img4 from "../assets/Image/Home/home4.jpg"

const LatestProjects = () => {
    return (
        <div 
        className='bg-zinc-300 font-mono p-6'
        >
            <div className='flex items-center justify-between  mt-10 container mx-auto'> 
            <h2 className="text-2xl">Latest Projects </h2>
            <a className='text-red-600 font-bold' href="#">View More > </a>
            </div>

            <section className='grid grid-cols-4 gap-5 container mx-auto'>

             <div >
              <div className='relative'>
              <img src={img3} className='h-52 ' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <p className='bg-red-500  rounded-lg w-1/12 text-white -mt-2 absolute'>NEW PROJECT</p>
              <p className="text-2xl text-black mt-4">LAYAN GREEN PARK, Phuket</p>
              <a  className='text-gray-500' href="#">Thalang,Phuket</a>
             </div>
             <div>
             <div className='relative'>
              <img src={img2} className='h-52 ' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <span className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute'>NEW PROJECT</span>
              <p className="text-2xl text-black mt-4">LAYAN GREEN PARK, Phuket</p>
              <a  className='text-gray-500' href="#">Thalang,Phuket</a>
             </div>
             <div>
             <div className='relative'>
              <img src={img3} className='h-52 ' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <span className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute'>NEW PROJECT</span>
              <p className="text-2xl text-black mt-4">LAYAN GREEN PARK, Phuket</p>
              <a  className='text-gray-500' href="#">Thalang,Phuket</a>
             </div>
             <div>
             <div className='relative'>
              <img src={img4} className='h-52 ' alt="" />
              <div className='bg-red-600  absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100  h-52 w-full'></div>
              </div>
              <span className='bg-red-500 rounded-lg w-1/12 text-white -mt-2 absolute'>NEW PROJECT</span>
              <p className="text-2xl text-black mt-4">LAYAN GREEN PARK, Phuket</p>
              <a  className='text-gray-900' href="#">Thalang,Phuket</a>
             </div>

            </section>
        </div>
    );
};

export default LatestProjects;