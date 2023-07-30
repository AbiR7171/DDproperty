import React from 'react';
import { Icon } from '@iconify/react';

const MostSection = () => {
    return (
        <div
        className='flex  gap-5 mt-20 px-20'
        >
            
            <section 
            className='flex items-center justify-center flex-col space-y-2'
            >
                  <p className='text-9xl'><Icon icon="twemoji:tokyo-tower" /></p>
                  <h2 className="text-2xl">Most Properties</h2>
                  <p className="text-gray-500">Either you are looking to <span className='text-red-600'>Sell,Buy</span> or <span  className='text-red-600'>Rent</span> a Property, our listing database is the most comprehensive one that you can find in Thailand.</p>
            </section>
            
            <section 
            className='flex items-center justify-center flex-col space-y-2'
            >
                  <p className='text-9xl text-red-500'><Icon icon="iconamoon:profile-fill" /></p>
                  <h2 className="text-2xl">Most Condo Details</h2>
                  <p className="text-gray-500">Either you are looking to <span className='text-red-600'>Sell,Buy</span> or <span  className='text-red-600'>Rent</span> a Property, our listing database is the most comprehensive one that you can find in Thailand.</p>
            </section>
            
            <section 
            className='flex items-center justify-center flex-col space-y-2'
            >
                  <p className='text-9xl  text-red-500'><Icon icon="game-icons:radio-tower" /></p>
                  <h2 className="text-2xl">Latest Launches</h2>
                  <p className="text-gray-500">Either you are looking to <span className='text-red-600'>Sell,Buy</span> or <span  className='text-red-600'>Rent</span> a Property, our listing database is the most comprehensive one that you can find in Thailand.</p>
            </section>
            
            <section 
            className='flex items-center justify-center flex-col space-y-2'
            >
                  <p className='text-9xl text-red-500'><Icon icon="pepicons-pencil:internet" /></p>
                  <h2 className="text-2xl">Overseas Property</h2>
                  <p className="text-gray-500">Looking to<span className='text-red-600'>Purchase or Invest on Overseas Property?</span> or On our overseas property section, we cover listings from around the world including the US and UK.</p>
            </section>
        </div>
    );
};

export default MostSection;