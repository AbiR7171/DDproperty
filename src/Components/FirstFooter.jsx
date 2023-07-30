import React from 'react';
import { Icon } from '@iconify/react';
import bd from "../assets/Image/Bangladesh.jpg"
import UseSelect from '../UseHook/UseSelect';

const FirstFooter = () => {
    return (
        <div 
        className='bg-black bg-opacity-70 text-white p-2 mt-10'
        >
           <section
           className='flex  justify-between items-center text-white container mx-auto mb-6 mt-4'
           >
           <div 
           className='flex items-center gap-3'
           >
                <p>Try our mobile apps</p>
                <p className='flex items-center gap-2'><Icon icon="cib:android-alt" /> Android</p>
                <p className='flex items-center gap-2'><Icon icon="bi:apple" /> IOS</p>
            </div>
            <div
            className='flex items-center gap-2'
            >
                <p>Follow us</p>
                <Icon icon="ri:facebook-fill" />
                <Icon icon="ri:instagram-line" />
                <Icon icon="mdi:youtube" />
                <Icon icon="eva:linkedin-fill" />
            </div>
           </section>

           <hr />

           <section 
           className='flex justify-between  gap-6 mt-5 font-bold container mx-auto mb-3'
           >
           <div 
           className='flex  gap-6'
           >
           <div>
                <h2>PropertyGuru Group</h2>
                <p>About us</p>
                <p>Our Products</p>
                <p>Careers</p>
            </div>

            <div>
                <h2>Contact Us</h2>
                <p>Newsroom</p>
                <p>Share Feedback</p>
            </div>

           </div>
           <div>
            <h2 className='font-bold '>Change Country</h2>
            
          <UseSelect/>
          <input type="search"  className='block mt-3 w-full h-8 rounded-md ' placeholder='   PropertyGuru Search' /> <Icon icon="material-symbols:search" className='-mt-5 end-0 me-10 absolute text-black '  />

           </div>
           </section>

           <hr />

           <section
           className='mt-3
           flex items-center gap-9
           '
           >
              <div
              className='font-bold
              text-white
              flex items-center text-4xl'
              ><Icon icon="carbon:location" /><p>think<span className='text-gray-500'>of</span>living.com</p></div>
               <div 
                className='flex
                items-center'
                >
                       <p 
                       className='text-5xl
                       text-white
                       '
                       ><Icon icon="ph:meta-logo" /></p>
                       <p 
                       className='text-white
                       text-2xl
                       font-bold
                       '
                       >DDproperty <br /> <span>by PropertyGuru</span> </p>
                </div> 

                <div 
                className='text-white text-2xl'
                >
                    Asia Real Estate Summit 
                </div>

                <div>
                    <p>PropertyGuru</p>
                    <p className='text-4xl font-bold font-serif'>PROPERTY  <br /> REPORT</p>
                    <p className='text-[9px]'>This is the best for you </p>
                </div>
           </section>
        </div>
    );
};

export default FirstFooter;