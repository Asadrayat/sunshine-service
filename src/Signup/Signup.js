import React from 'react';
import svg from '../assest/logo/login.webp';
const Signup = () => {
    return (
        <div className="hero py-12 my-12">
            <div className="hero-content grid grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left w-3/4">
                    <img src={svg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  className="card-body">
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
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;