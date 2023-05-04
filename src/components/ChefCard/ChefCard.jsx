import React from 'react';
import './ChefCard.css';
import { Link, useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import useTitle from '../hooks/useTitle';


const ChefCard = ({ info }) => {
    useTitle('Chef Card')
    const { _id, name, experience, num_recipes, likes, img } = info;
    return (
        <div >
            <div style={{ width: '340px' }} className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure>
                    <LazyLoad>
                        <img src={img} />
                    </LazyLoad>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between mt-2'>
                        <h3>Experience: {experience}</h3>
                        <h3>Recipes: {num_recipes}</h3>
                    </div>

                    <div className="flex justify-between mt-2">
                        <h3>Likes: {likes}k</h3>
                        <button className="btn btn-sm"><Link to={`/data/${_id}`}>View Recipes </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;