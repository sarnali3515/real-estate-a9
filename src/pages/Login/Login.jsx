import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { signIn, googlePopup, githubPopup } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogIn = () => {
        googlePopup(googleProvider)
            .then(result => {
                console.log(result);
                toast.success('Login Successful')
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 2000);
            })
            .catch(error => {
                console.error(error);
                toast.error('Incorrect Email or Password');

            })
    }
    const handleGithubLogIn = () => {
        githubPopup(githubProvider)
            .then(result => {
                console.log(result);
                toast.success('Login Successful')
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 2000);
            })
            .catch(error => {
                console.error(error);
                toast.error('Incorrect Email or Password');
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful')
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 2000);

            })
            .catch(error => {
                console.error(error);
                toast.error('Incorrect Email or Password');
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/z8s2rD7/gus-ruballo-h5-QNcl-JUi-A8-unsplash.jpg)' }}>
            <div className="hero-content flex-col lg:flex-row hero-overlay bg-opacity-50">
                <div className="text-center lg:m-8 lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-semibold text-indigo-800 btn-ghost ">Urban <span className="text-lime-600">Charm</span></h1>
                    <h1 className="text-2xl md:text-3xl font-semibold text-white mt-5">Welcome to Urban Charm!</h1>
                    <p className="py-6 lg:pr-8 text-white">Unlock your dream home with just a click - log in to explore exclusive listings and personalized recommendations.</p>
                </div>
                <div className="card w-full  shadow-2xl bg-indigo-100">
                    <h1 className="text-center font-bold text-4xl pt-2">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <div className="flex items-center justify-center px-8 pb-3">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <div className="mx-4 text-gray-500">Or Register with</div>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mb-5 text-xl">
                        <button onClick={handleGoogleLogIn} className="btn btn-outline bg-red-600 text-white">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                        <button onClick={handleGithubLogIn} className="btn btn-outline bg-black text-white">
                            <FaGithub></FaGithub>
                            GitHub
                        </button>
                    </div>
                    <p className="mb-4 text-center">Dont have an account? <Link to="/register" className="text-blue-600 font-semibold">Register.</Link></p>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;