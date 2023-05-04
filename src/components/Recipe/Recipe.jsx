import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/useTitle';

const Recipe = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false);
    useTitle('Recipe')
    const notify = () => {
        setDisabled(true);
        toast("Recipe Added In Favorite List");
     }
     
    return (
        <div>
            <div style={{ height: "600px", width: '340px' }} className="card w-96 bg-base-100 shadow-xl mb-10 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Recipe: {recipe.name}</h2>
                    <hr />
                    <h4 className="font-bold">Ingredients:</h4>
                    <ol className='mb-2'>
                        <li>1. {recipe.ingredients[0]}</li>
                        <li>2. {recipe.ingredients[1]}</li>
                        <li>3. {recipe.ingredients[2]}</li>
                        <li>4. {recipe.ingredients[3]}</li>
                        <li>5. {recipe.ingredients[4]}</li>
                    </ol>
                    <hr />
                    <h4 className='font-bold my-3'>Instructions: </h4>
                    <ol>
                        <li>{recipe.instructions[0]}</li>
                        <li>{recipe.instructions[1]}</li>
                        <li>{recipe.instructions[2]}</li>
                        <li>{recipe.instructions[3]}</li>
                        <li>{recipe.instructions[4]}</li>
                    </ol>
                </div>
                <div className='bg-slate-200'>
                    <hr />
                    <div className="card-actions mb-4 justify-between mx-4 my-3">
                        <div className='flex gap-2'>
                            <Rating style={{ maxWidth: 100 }} value={recipe.rating} readOnly />
                            <p>{recipe.rating}</p>
                        </div>
                        <div>
                            <button onClick={notify} disabled={disabled} className="btn btn-sm">
                                Favorite
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;