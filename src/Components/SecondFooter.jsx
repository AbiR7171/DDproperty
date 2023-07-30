import React, { useState } from 'react';

const SecondFooter = () => {

    const [more, setMore]=useState(false)
    const [view1, setview1]=useState(false)
    const [view2, setview2]=useState(false)
    const [view3, setview3]=useState(false)
    const [view4, setview4]=useState(false)
    const [view5, setview5]=useState(false)
    const [view6, setview6]=useState(false)
    const [view7, setview7]=useState(false)
    const [view8, setview8]=useState(false)
   
    return (
        <div
        className='container mx-auto mt-8'
        >
           
            {
                more ?  <p className='text-gray-700'>
                <span className='text-red-600'>DDproperty.com</span> is the leading Thailand Property website - the best place to start your real estate search whether you are an investor, buying for own use, or looking for a place to rent. In DDproperty, you can find thousands of properties for sale and rent with detailed information about each property, including maps and photos.
    
            We bring you the most comprehensive selection in the market - the most popular condominiums, apartments, serviced apartments, houses and commercial property. If you need additional help in your housing hunt, you can also consult our preferred real estate agents using Ask Guru - or if you a looking for a specialized agent, you can <span className='text-red-600'>search our Agent Directory</span>. If you are property owner or agent representing owner, there're many property advertising packages that fit your need.
    
             Thailand has a dynamic property market and we bring you the most complete and up-to-date for sale listings to help you make your investment decision. Prospective Property investors should also consult our property information resources, Thailand property market news and historic transaction prices. More on DDproperty:
                </p> : <p className='text-gray-700'>
                <span className='text-red-600'>DDproperty.com</span> is the leading Thailand Property website - the best place to start your real estate search whether you are an investor, buying for own use, or looking for a place to rent. In DDproperty, you can find thousands of properties for sale and rent with detailed information about each property, including maps and photos.
              </p>
               
            }
            <p onClick={()=> setMore(!more)}  className={`text-red-600 cursor-pointer ${more && "hidden"}`}>Read More</p>

            <div className="footer grid-rows-2 p-10 ">
            <div className='font-semibold'>
    {
        view1 ? <div className='flex flex-col gap-3 '>
             <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <a className="link link-hover">Property Guides</a>
        <a className="link link-hover">Condo Directory</a>
        <a className="link link-hover">Agent Directory</a>
        <a className="link link-hover">Mortgage Calculator</a>
        <a className="link link-hover">PropertyGuru Finance</a>
        </div> :
        
     <div className='flex flex-col gap-3'>
          <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <p onClick={()=>setview1(!view1)} className='text-red-600'>view more</p>
     </div>

    }
  </div> 

  <div className='font-semibold'>
    {
        view2 ? <div className='flex flex-col gap-3 '>
             <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <a className="link link-hover">Property Guides</a>
        <a className="link link-hover">Condo Directory</a>
        <a className="link link-hover">Agent Directory</a>
        <a className="link link-hover">Mortgage Calculator</a>
        <a className="link link-hover">PropertyGuru Finance</a>
        </div> :
        
     <div className='flex flex-col gap-3'>
          <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <p onClick={()=>setview2(!view2)} className='text-red-600'>view more</p>
     </div>

    }
  </div> 
  <div className='font-semibold'>
    {
        view3 ? <div className='flex flex-col gap-3 '>
             <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <a className="link link-hover">Property Guides</a>
        <a className="link link-hover">Condo Directory</a>
        <a className="link link-hover">Agent Directory</a>
        <a className="link link-hover">Mortgage Calculator</a>
        <a className="link link-hover">PropertyGuru Finance</a>
        </div> :
        
     <div className='flex flex-col gap-3'>
          <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <p onClick={()=>setview3(!view3)} className='text-red-600'>view more</p>
     </div>

    }
  </div> 
  <div className='font-semibold'>
    {
        view4 ? <div className='flex flex-col gap-3 '>
             <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <a className="link link-hover">Property Guides</a>
        <a className="link link-hover">Condo Directory</a>
        <a className="link link-hover">Agent Directory</a>
        <a className="link link-hover">Mortgage Calculator</a>
        <a className="link link-hover">PropertyGuru Finance</a>
        </div> :
        
     <div className='flex flex-col gap-3'>
          <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <p onClick={()=>setview4(!view4)} className='text-red-600'>view more</p>
     </div>

    }
  </div> 
  <div className='font-semibold'>
    {
        view5 ? <div className='flex flex-col gap-3 '>
             <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <a className="link link-hover">Property Guides</a>
        <a className="link link-hover">Condo Directory</a>
        <a className="link link-hover">Agent Directory</a>
        <a className="link link-hover">Mortgage Calculator</a>
        <a className="link link-hover">PropertyGuru Finance</a>
        </div> :
        
     <div className='flex flex-col gap-3'>
          <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <p onClick={()=>setview5(!view5)} className='text-red-600'>view more</p>
     </div>

    }
  </div> 
  <div className='font-semibold'>
    {
        view6 ? <div className='flex flex-col gap-3 '>
             <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <a className="link link-hover">Property Guides</a>
        <a className="link link-hover">Condo Directory</a>
        <a className="link link-hover">Agent Directory</a>
        <a className="link link-hover">Mortgage Calculator</a>
        <a className="link link-hover">PropertyGuru Finance</a>
        </div> :
        
     <div className='flex flex-col gap-3'>
          <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <p onClick={()=>setview6(!view6)} className='text-red-600'>view more</p>
     </div>

    }
  </div> 
  <div className='font-semibold'>
    {
        view7 ? <div className='flex flex-col gap-3 '>
             <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <a className="link link-hover">Property Guides</a>
        <a className="link link-hover">Condo Directory</a>
        <a className="link link-hover">Agent Directory</a>
        <a className="link link-hover">Mortgage Calculator</a>
        <a className="link link-hover">PropertyGuru Finance</a>
        </div> :
        
     <div className='flex flex-col gap-3'>
          <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <p onClick={()=>setview7(!view7)} className='text-red-600'>view more</p>
     </div>

    }
  </div> 
  <div className='font-semibold'>
    {
        view8 ? <div className='flex flex-col gap-3 '>
             <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <a className="link link-hover">Property Guides</a>
        <a className="link link-hover">Condo Directory</a>
        <a className="link link-hover">Agent Directory</a>
        <a className="link link-hover">Mortgage Calculator</a>
        <a className="link link-hover">PropertyGuru Finance</a>
        </div> :
        
     <div className='flex flex-col gap-3'>
          <a className="link link-hover">DDproperty</a> 
        <a className="link link-hover">AskGuru</a> 
        <a className="link link-hover">Thailand Property News</a> 
        <a className="link link-hover">Property Resources</a>
        <p onClick={()=>setview8(!view8)} className='text-red-600'>view more</p>
     </div>

    }
  </div> 
            </div>
           
        </div>
    );
};

export default SecondFooter;