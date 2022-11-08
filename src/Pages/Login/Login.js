import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import svg from '../../assest/logo/login.webp';
import { AuthContext } from "../../Context/Authprovider/Authprovider";
const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const { login } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email,password);
        login(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                // get jwt token
              /*   fetch('https://boss-car-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('boss-token', data.token);
                        navigate(from, { replace: true });
                    }); */

            })
            .catch(error => console.log(error));
    }
    return (
        <div className="hero my-12">
            <div className="hero-content grid grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left w-3/4">
                    <img src={svg} alt="" />
                </div>
                <div className="card py-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />

                        </div>
                    </form>
                    <div>
                        <p className='text-center'>Have an account? <Link to='/signup' className='text-xl  text-orange-600 font-bold'> Sign In</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;