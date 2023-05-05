import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import useTitle from '../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    useTitle('Registration')
    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' || navigate(0);
    const notify = () => {
        toast("A verification mail send to your email");
    }


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photoUrl, password);


        setError(' ');
        if (password.length < 6) {
            setError('The password is less than 6 characters');
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                // navigate(from, {replace: true});
                // history.go(0)
                updateUserData(result.user, name, photoUrl);
                emailVerification(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }
    const updateUserData = (user, name, photoURL) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {
                setError("user name updated");
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const emailVerification = (user) => {
        sendEmailVerification(user)
            .then(result => {


            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold"><span className='text-lime-400 underline'>Registration</span> now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:me-28">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                                <small className='text-blue-600' onClick={() => setShow(!show)}>
                                    <>
                                        {
                                            show ? <span>Hide</span> : <span>Show</span>
                                        }
                                    </>
                                </small>
                            </label>
                            <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={notify} className="btn btn-primary">Register</button>
                            <ToastContainer />
                        </div>
                        <p>Already Have An Account <Link className='text-blue-600 underline' to='/login'>Login</Link></p>
                        <label className="label pt-0">
                            <p className='text-red-400'>{error}</p>
                        </label>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Registration;