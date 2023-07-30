import React from 'react';
import avater from "../assets/Image/55855.jpg"

const AskGuru = () => {
    return (
        <div 
        className='flex items-center gap-5 container mx-auto px-20 mt-20'
        >
            <section
            className='bg-zinc-300 w-full h-[460px]'
            >
                <div
                className=' flex flex-col items-center justify-center p-6 gap-3'
                >
                    <img src={avater} className='w-32' alt="" />
                    <h2 className="text-2xl">AskGuru</h2>
                    <p className='px-20'>Make confident property decisions with advice from our PropertyGuru community of experts
                     </p>
                     <div 
                     className='flex gap-5 '
                     >
                            <button className='bg-black bg-opacity-30 p-3 rounded-lg text-white btn border-0'> 
                            Ask a Question
                            </button>
                            <button className='bg-white text-black p-3 rounded-lg btn border-black'>
                                 Browse Question
                            </button>
                     </div>
                     <h2 className="text-2xl">Trending Categories</h2>
                     <div>
                        
                        <div>
                        <a className='text-red-600 font-bold' href="#">Home Buying > </a>
                        <a className='text-red-600 font-bold' href="#">Condo Questions > </a>
                        <a className='text-red-600 font-bold' href="#">General Questions > </a>
                        </div>
                       
                     </div>
                     <a className='text-red-600 font-bold' href="#">View More > </a>
                </div>
            </section>
            <section className='w-full  space-y-4 '>
                <div className='journeyBg '>
                  <div className='p-10 space-y-4'>
                  <h2 className="text-2xl"> Loremaaonaon  <br />  Abcodobamdobafoba</h2>
                  <p>abcondeonadoufebaodhndfsbafb</p>
                  <button className='btn btn-sm bg-red-500 text-white'>asdoyen</button>
                  </div>
                </div>
            </section>
        </div>
    );
};

export default AskGuru;