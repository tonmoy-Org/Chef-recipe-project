import React, { useEffect, useState } from 'react';
import chicken from '../../assets/basic-baked-chicken-breasts.jpg'
import burger from '../../assets/Burger.jpeg'
import rasberry from '../../assets/raspberry.jpg'
import tikka from '../../assets/image.jpg'
import ChefCard from '../ChefCard/ChefCard';
import Section from '../Section/Section';
import Recipes from '../Recipes/Recipes';
import useTitle from '../hooks/useTitle';
const Home = () => {
    useTitle('Home')
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://chef-reciepe-project-server-tonmoy-org.vercel.app/data')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full" style={{ height: '580px' }}>
                        <div className="relative w-full">
                            <img src={chicken} className="w-full brightness-75" style={{ height: '580px' }} />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                                <h2 className="text-white  md:text-5xl text-3xl mb-2 font-extrabold">Baked Chicken Breasts</h2>
                                <p className="text-white font-medium  text-center">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                            </div>
                        </div>
                        <div className='hidden sm:hidden md:hidden lg:inline-block'>
                            <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full" style={{ height: '580px' }}>
                        <div className="relative w-full">
                            <img src={burger} className="w-full brightness-75" style={{ height: '580px' }} />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                                <h2 className="text-white  md:text-5xl text-3xl mb-2 font-extrabold">Ultimate Cheese Burger </h2>
                                <p className="text-white font-medium">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                            </div>
                        </div>
                        <div className='hidden sm:hidden md:hidden lg:inline-block'>
                            <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full" style={{ height: '580px' }}>
                        <div className="relative w-full">
                            <img src={rasberry} className="w-full brightness-75" style={{ height: '580px' }} />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                                <h2 className="text-white  md:text-5xl text-3xl mb-2 font-extrabold">Raspberry Tartlet</h2>
                                <p className="text-white font-medium">A delicious and healthy meal!</p>
                            </div>
                        </div>
                        <div className='hidden sm:hidden md:hidden lg:inline-block'>
                            <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full" style={{ height: '580px' }}>
                        <div className="relative w-full">
                            <img src={tikka} className="w-full brightness-75" style={{ height: '580px' }} />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                                <h2 className="text-white  md:text-5xl text-3xl mb-2 font-extrabold">Chicken Tikka Masala</h2>
                                <p className="text-white font-medium">A delicious and healthy meal!</p>
                            </div>
                        </div>
                        <div className='hidden sm:hidden md:hidden lg:inline-block'>
                            <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section */}
            <div>
                <Section></Section>
            </div>

            {/* chef card */}
            <div className=' my-40'>
                <div className='text-center'>
                    <h1 className='md:text-5xl text-3xl font-bold my-4'>Our <span className='text-lime-400 underline'>Chef</span></h1>
                    <p>A chef is a professional cook and tradesman who is proficient in all <br /> aspects of food preparation, often focusing on a particular cuisine.</p>
                </div>

                <div className='mt-14 grid md:grid-cols-3 gap-10 md:mx-32'>
                    {
                        data.map(info =>
                            <ChefCard
                                key={info._id}
                                info={info}
                            ></ChefCard>
                        )
                    }
                </div>
            </div>
            <br />
            {/* recipes */}
            <div className='mb-28 mt-14'>
                <Recipes></Recipes>
            </div>
        </div>
    );
};

export default Home;