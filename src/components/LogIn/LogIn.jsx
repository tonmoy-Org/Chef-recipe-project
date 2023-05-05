import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import google from '../../assets/google.jpg';
import github from '../../assets/github.jpg';
import facebook from '../../assets/fb.png';
import useTitle from '../hooks/useTitle';

const LogIn = () => {
    useTitle('Login')
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const emailRef = useRef();

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
         
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGitHubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const loggedUserFacebook = result.user;
                console.log(loggedUserFacebook);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
       

        if (password.length < 6) {
            setError('The password is less than 6 characters')
            return;
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

    }

    const handleReset = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please enter your email')
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email')
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold"><span className='text-lime-400 underline'>Login </span>now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:me-28">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" />
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
                            <button className="btn btn-success">Login</button>

                        </div>
                    </form>
                    <div className='text-center mb-3 mt-0'>
                        <button onClick={handleReset} className="label-text-alt link link-hover">Forgot password?</button>
                    </div>

                    <div className="text-center mb-5">
                        <button onClick={handleGoogleLogin} className="mr-6 transform transition duration-300 ease hover:-translate-y-1 hover:scale-95"><img className="w-8" src={google} alt="" /></button>
                        <button onClick={handleGitHubLogin} className="mr-6 transform transition duration-300 ease hover:-translate-y-1 hover:scale-95"><img className="w-8" src={github} alt="" /></button>
                        <button onClick={handleFacebookLogin} className="transform transition duration-300 ease hover:-translate-y-1 hover:scale-95"><img className="w-8" src={facebook} alt="" /></button>
                    </div>


                    <div className='ml-4 mb-4'>

                        <label className="label">
                            <p>
                                New at Good Food Then <Link className="text-blue-600 underline" to='/register'>Register</Link>
                            </p>
                        </label>
                        <label className="label pt-0">
                            <p className='text-red-400'>{error}</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;