import React from 'react';
import img1 from "../assets/Image/Home/hom1.jpg"
import img2 from "../assets/Image/Home/home2.jpg"
import img3 from "../assets/Image/Home/hom3.jpg"
import img4 from "../assets/Image/Home/home4.jpg"

const HandPicked = () => {
    return (
        <div 
        className='bg-zinc-300 font-mono p-4'
        >
            <h2 className="text-3xl ms-5">HandPicked For You</h2>

            <section
            className='grid grid-cols-4 gap-5 container mx-auto  mt-3'
            > 

            <div className='bg-white rounded-md  hover:shadow-2xl shadow-black'>
                   <img src={img3} className='h-52 w-full rounded' alt="" />
                 <div className='p-2'>
                 <h2 className="text-2xl">B4,690/mo</h2>
                   <p className='text-black font-bold'>Studio</p>
                   <h2 className="text-2xl">Exchange Towe, Bangkok</h2>
                   <p className='text-gray-500'>388 Exchange Tower, Khlong Toei...</p>
                   <button 
                   className='border px-1 rounded-lg border-sky-700 text-sky-700'
                   >office space</button>
                 </div>
                </div>
                
            <div className='bg-white  hover:shadow-2xl shadow-black'>
            <img src={img2} className='h-52 w-full rounded' alt="" />
            <div className='p-2'>
                 <h2 className="text-2xl">B4,690/mo</h2>
                   <p className='text-black font-bold'>Studio</p>
                   <h2 className="text-2xl">Exchange Towe, Bangkok</h2>
                   <p className='text-gray-500'>388 Exchange Tower, Khlong Toei...</p>
                   <button 
                   className='border px-1 rounded-lg border-sky-700 text-sky-700'
                   >office space</button>
                 </div>
                </div>
                
            <div className='bg-white  hover:shadow-2xl shadow-black'>
                   <img src={img3} className='h-52 w-full rounded' alt="" />
                   <div className='p-2'>
                 <h2 className="text-2xl">B4,690/mo</h2>
                   <p className='text-black font-bold'>Studio</p>
                   <h2 className="text-2xl">Exchange Towe, Bangkok</h2>
                   <p className='text-gray-500'>388 Exchange Tower, Khlong Toei...</p>
                   <button 
                   className='border px-1 rounded-lg border-sky-700 text-sky-700'
                   >Condo</button>
                 </div>
                </div>
                
            <div className='bg-white  hover:shadow-2xl shadow-black' >
                   <img src={img4} className='h-52 w-full rounded' alt="" />
                   <div className='p-2'>
                 <h2 className="text-2xl">B4,690/mo</h2>
                   <p className='text-black font-bold'>Studio</p>
                   <h2 className="text-2xl">Exchange Towe, Bangkok</h2>
                   <p className='text-gray-500'>388 Exchange Tower, Khlong Toei...</p>
                   <button 
                   className='border px-1 rounded-lg border-sky-700 text-sky-700'
                   >WareHouse/Factory</button>
                 </div>
                </div>
                
            </section>
        </div>
    );
};

export default HandPicked;