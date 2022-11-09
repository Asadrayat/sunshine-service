import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import svg from '../assest/logo/signup.webp';
import { AuthContext } from '../Context/Authprovider/Authprovider';
const Signup = () => {
    const { createUser ,providerLogin} = useContext(AuthContext);
    const handleSignup = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photoURL = event.target.photoUrl.value;
        createUser(email, password,photoURL)
            .then(result => {
                const user = result.user;
                console.log(user.photoURL);
            })
            .catch(err => console.error(err));
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero py-12 my-12">
            <div className="hero-content grid grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left w-3/4">
                    <img src={svg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" required placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" required placeholder="password" name="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name="Confirm password" required placeholder="Confirm password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoUrl" required placeholder="photoUrl" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary" />

                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
                        <div className="w-10">
                            <img
                                className=" px-2 image-fluid btn-image"
                                src="https://img.icons8.com/color/344/google-logo.png"
                                alt=""
                            />
                        </div>

                        <p className="fw-bold">Google SignIn</p>
                    </button>
                    <div>
                        <p className='text-center'>Already have an account? <Link to='/login' className='text-xl  text-orange-600 font-bold'> Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;