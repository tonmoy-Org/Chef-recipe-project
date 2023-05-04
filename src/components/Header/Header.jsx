import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { FaAngleDown } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="navbar bg-lime-300 font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li tabIndex={0}><ActiveLink to='/blog'>Blog</ActiveLink></li>
                        <li><ActiveLink to='/contact'>Contact</ActiveLink></li>
                        {
                            user ?
                                <Link className="btn btn-xs font-bold" onClick={handleLogOut}>Sign Out</Link>
                               :<Link className="btn btn-xs font-bold" to='/login'>LogIn</Link>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Good <span className='font-bold'>Food</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                    <li className='mr-10'><ActiveLink to='/'>Home</ActiveLink></li>
                    <li className='mr-10'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                    <li><ActiveLink to='/contact'>Contact</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user &&
                    <div className='relative flex items-center'>
                        <div>
                            <img className='w-10 rounded-full' src={user.photoURL}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0}><FaAngleDown className='mx-2'></FaAngleDown></label>
                            <ul tabIndex={0} className="dropdown-content p-4 shadow bg-base-100 rounded-md w-60 h-36 mt-8">
                                <li>{user.displayName}</li>
                                <li className='mb-3'>{user.email}</li>
                                {
                                    user ?
                                        <Link className="btn btn-xs font-bold" onClick={handleLogOut}>Sign Out</Link>
                                       :<Link className="btn btn-xs font-bold" to='/login'>LogIn</Link>
                                }
                            </ul>
                        </div>
                        {isHovered &&
                            <div className='absolute bg-white text-black rounded-md shadow-md px-2 py-1 top-1 mr-3 w-52
                             right-16'>
                                <span className='font-normal'>{user.displayName}</span>
                            </div>
                        }

                    </div>
                }
                <div className='hidden sm:hidden md:hidden lg:inline-block'>
                    {
                        user ?
                            <Link className="btn btn-link text-black no-underline font-bold" onClick={handleLogOut}>Sign Out</Link>
                           :<Link className="btn btn-link text-black no-underline font-bold" to='/login'>LogIn</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
