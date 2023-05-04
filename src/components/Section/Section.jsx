import React from 'react';
import banner from '../../assets/h1-img-1.jpg'
import LazyLoad from 'react-lazy-load';
const Section = () => {
    return (
        <div className='mt-44 mx-2'>
            <div className='mb-20 text-center'>
                <h1 className='md:text-5xl text-3xl font-bold'><span className='text-lime-400 underline'>Health</span> First</h1>
                <br />
                <p>If you’re ready to change your relationship with food for the better, follow us</p>
            </div>
            <div className='md:flex justify-center md:mx-44 gap-16 '>
                <div>
                    <h1 className='mt-16 text-2xl font-bold'>It's time to kick start a new lifestyle. <br /> Start eating, feeling & living better <br /> today. Build good habits with us in no time.</h1>
                    <br />
                    <p>
                        In addition, good food can be enjoyed in various settings, <br /> whether it's a casual meal with friends and family, a fancy <br /> restaurant experience, or a street food vendor. Ultimately, <br /> what makes good food is a combination of factors that <br /> appeal to your taste buds and satisfy your hunger while nourishing your body.
                    </p>
                    <br />
                    <button className='btn bg-lime-400 my-10'>Learn More</button>
                </div>
                <div>
                    <LazyLoad>
                        <img style={{ width: '800px' }} src={banner} alt="" />
                    </LazyLoad>
                </div>
            </div>
        </div>
    );
};

export default Section;