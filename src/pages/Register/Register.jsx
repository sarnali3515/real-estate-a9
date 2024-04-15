import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";


const Register = () => {

    const { createUser, googlePopup } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        googlePopup(googleProvider)
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/QMP9Bjc/max-okhrimenko-s0-Nd-YEWui-Y-unsplash.jpg)' }}>
            <div className="hero-content flex-col lg:flex-row hero-overlay bg-opacity-50">
                <div className="text-center lg:m-8 lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-semibold text-indigo-800 btn-ghost ">Urban <span className="text-lime-600">Charm</span></h1>
                    <h1 className="text-2xl md:text-3xl font-semibold text-white mt-5">Welcome to Urban Charm!</h1>
                    <p className="py-6 md:pr-8 text-white">Unlock your dream home with just a click - log in to explore exclusive listings and personalized recommendations.</p>
                </div>
                <div className="card w-full  shadow-2xl bg-indigo-100">
                    <h1 className="text-center font-bold text-4xl pt-2">Register</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <div className="flex items-center justify-center px-8 pb-3">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <div className="mx-4 text-gray-500">Or Register with</div>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mb-5 ">
                        <button onClick={handleGoogleSignIn} className="btn  bg-red-600 text-white">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                        <button className="btn  bg-black text-white">
                            <FaGithub></FaGithub>
                            GitHub
                        </button>
                    </div>
                    <p className="mb-4 text-center">Already have an account? <Link to="/login" className="text-blue-600 font-semibold">Login.</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;