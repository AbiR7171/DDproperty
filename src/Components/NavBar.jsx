import React from 'react';
import { Icon } from '@iconify/react';

const NavBar = () => {
    return (
       <div
       className='bg-white'
       >
         <div 
        className='flex 
           items-center 
         justify-between
         px-10
         py-3'
        >
            <section 
            className='flex 
               items-center
               space-x-5
               '
            >
                <div 
                className='flex
                items-center'
                >
                       <p 
                       className='text-7xl
                       text-red-600
                       '
                       ><Icon icon="ph:meta-logo" /></p>
                       <p 
                       className='text-black
                       text-1xl
                       font-bold
                       '
                       >DDproperty <br /> <span>by PropertyGuru</span> </p>
                </div> 

                <div 
                className='flex
                items-center
                 space-x-4
                 text-gray-500
                 font-semibold
                '
                >
                      <p>Buy</p>
                      <p>Rent</p>
                      <p>Condos</p>
                      <p>New Projects</p>
                      <p>Commercial</p>
                      <p>Guides</p>
                      <p>Find Agent</p>
                      <p>

                      <select className="outline-0  w-full  ">
                      <option className='mt-2'>News</option>
                      <option className='mt-2'>Home Loan Tools</option>
                      <option>AskGuru</option>
                      <hr />
                      <option disabled className='text-gray-500' >FOR AGENT</option>
                      <option>Agent Offerings</option>
                      <option>AgentNet</option>
                      </select>

                      </p>
                </div>

            </section>
           
            <section 
            className='flex
            items-center
            space-x-4'
            >

            <div className="dropdown dropdown-end  ">
             <label tabIndex={0} className="btn btn-sm m-1 border-2 border-black opacity-50"><Icon icon="heroicons-outline:menu" /></label>
             <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
             <li 
             className='text-gray-700'
             ><a><Icon icon="mdi:heart" /> Shortlist</a></li>
             </ul>
             </div>
             
             <button className="btn btn-sm btn-outline">Login</button>
             
             <select className=" border-black    max-w-lg btn btn-sm">
                      <option  selected ><Icon icon="flagpack:gb-ukm" />English</option>
                      <option><Icon icon="twemoji:flag-bangladesh" /> Bangla</option>
                      </select>
           
            </section>

        </div>
       </div>
    );
};

export default NavBar;