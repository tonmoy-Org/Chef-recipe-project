import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import LazyLoad from 'react-lazy-load';
import useTitle from '../hooks/useTitle';

const ChefDetails = () => {
    useTitle('Details')
    const data = useLoaderData();
    return (
        <div>
            <div className='md:flex items-center justify-center gap-24 mb-20 mt-20 mx-4'>
                <div className='mb-10'>
                    <LazyLoad>
                        <img style={{ height: '500px' }} src={data.img} alt="" />
                    </LazyLoad>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>{data.name}</h2>
                    <p className='md:w-80 my-5'>{data.bio}</p>
                    <div className='font-bold'>
                        <h2>Likes: {data.likes} k</h2>
                        <h2 className='my-4'>Recipes: {data.num_recipes}</h2>
                        <h2>Experience: {data.experience}</h2>
                    </div>
                </div>
            </div>
            <hr />
            <div className='mt-20 mb-12'>
                <h1 className='text-3xl font-bold text-center my-8'>Special <span className='text-lime-400 underline'>Recipe</span></h1>
                <div className='grid md:grid-cols-3 gap-5 md:mx-28'>

                    {
                        data.recipes.map(recipe =>
                            <Recipe
                                key={recipe.recipes_id}
                                recipe={recipe}
                            ></Recipe>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;