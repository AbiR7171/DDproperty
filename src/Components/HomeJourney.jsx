import React from 'react';
import img1 from "../assets/Image/candidate.png"
import img2 from "../assets/Image/2467993.jpg"

const HomeJourney = () => {
    return (
        <div className='container mx-auto font-serif flex gap-5 mt-20'>
            <section >
                <h2 className="text-2xl">We'll See You Home</h2>

                <div className='grid grid-cols-2 gap-5 mt-4 '>
                   
                  <section 
                  className='flex items-center justify-between bg-red-600 p-4  col-span-2 h-52'
                  >
                    <div>
                    <h2 className="text-2xl">Buy, sell, rent with confidence & the right agents</h2>
                    <button className='bg-white text-red-600 px-8 py-2 mt-4 rounded-md'>Verify Agents</button>
                    </div>
                    <div>
                       <img src={img1} className='w-16' alt="" />
                    </div>
                  </section>

                  <section 
                  className='flex items-center justify-between bg-sky-900 p-4 text-white   h-60'
                  >
                    <div>
                    <h2 className="text-2xl">Check out hot deals from TH’s leading property developers</h2>
                    <button className='bg-red-600 text-white px-8 py-2 mt-4 rounded-md'>Verify Agents</button>
                    </div>
                  </section>

                  <section 
                  className='flex items-center justify-between bg-stone-500 p-4 '
                  >
                    <div>
                    <h2 className="text-2xl">Thailand Property Market Outlook 2023</h2>
                    <button className='bg-red-600 text-white px-8 py-2 mt-4 rounded-md'>Verify Agents</button>
                    </div>
                  </section>

                </div>
            </section>

            <section className='w-full space-y-4 '>
                <h2 className="text-2xl ">Begin Your Home Journey</h2>
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

export default HomeJourney;