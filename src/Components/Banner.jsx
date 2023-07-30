import React from 'react';
import bannerImg from "../assets/Image/cute-family-spring-park.jpg"
import BuyRent from './BuyRent';

const Banner = () => {
    return (
     <div>
           <div 
        className='banneImg
        font-serif
       
        '
        >
            <p className="text-5xl 
             py-32
             px-20
             text-gray-500
             font-bold
            ">
               <h2> Lorem ipsum dolor , <br /> consectetur</h2>
               <p>#Loremipsum</p>
            </p>
        </div>

        <div className='-mt-20'>
            <BuyRent/>
        </div>

     </div>
    );
};

export default Banner;