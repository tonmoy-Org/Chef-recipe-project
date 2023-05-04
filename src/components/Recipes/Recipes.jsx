import React from 'react';
import recipe1 from '../../assets/audio-img2.jpg';
import recipe2 from '../../assets/recipes-img-02-1.jpg';
import recipe3 from '../../assets/recipes-img-03.jpg';
import recipe4 from '../../assets/recipes-img-04.jpg';
import LazyLoad from 'react-lazy-load';

const Recipes = () => {
    return (
        <div>
            <div>
                <div className='text-center my-14'>
                    <h1 className='md:text-5xl text-3xl font-bold'>Popular <span className='text-lime-400 underline'>Recipes</span></h1>
                </div>
                <div className='md:flex justify-center gap-10 md:mx-10'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-8" style={{ height: '450px', width: '340px' }}>
                        <figure>
                            <LazyLoad>
                                <img style={{ height: "500px" }} src={recipe1} alt="recipes" />
                            </LazyLoad>
                        </figure>
                        <small className='text-center my-2'><span>Diet</span> . <span className='px-4'>10 MINUTES</span> . <span>Easy</span> </small>
                        <div className="card-body">
                            <h2 className="card-title">Fitness-Friendly Snacks When Working Out</h2>

                            <div className="card-actions justify-end">
                                <button className="btn bg-lime-400">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-8" style={{ height: '450px', width: '340px' }}>
                        <figure>
                            <LazyLoad>
                                <img style={{ height: "500px" }} src={recipe2} alt="recipes" />
                            </LazyLoad>
                        </figure>
                        <small className='text-center my-2'><span>Diet</span> . <span className='px-4'>10 MINUTES</span> . <span>Easy</span> </small>
                        <div className="card-body">
                            <h2 className="card-title">5 Ways Restricting Calories Can Be Harmful</h2>

                            <div className="card-actions justify-end">
                                <button className="btn bg-lime-400">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-8" style={{ height: '450px', width: '340px' }}>
                        <figure>
                            <LazyLoad>
                                <img style={{ height: "500px" }} src={recipe3} alt="recipes" />
                            </LazyLoad>
                        </figure>
                        <small className='text-center my-2'><span>Diet</span> . <span className='px-4'>10 MINUTES</span> . <span>Easy</span> </small>
                        <div className="card-body">
                            <h2 className="card-title">Is Dieting Slowing Down Your Metabolism?</h2>

                            <div className="card-actions justify-end">
                                <button className="btn bg-lime-400">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-8" style={{ height: '450px', width: '340px' }}>
                        <figure>
                            <LazyLoad>
                                <img style={{ height: "500px" }} src={recipe4} alt="recipes" />
                            </LazyLoad>
                        </figure>
                        <small className='text-center my-2'><span>Diet</span> . <span className='px-4'>10 MINUTES</span> . <span>Easy</span> </small>
                        <div className="card-body">
                            <h2 className="card-title">Vegan & Gluten Free Chocolate Chip Cookie</h2>

                            <div className="card-actions justify-end">
                                <button className="btn bg-lime-400">Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Recipes;