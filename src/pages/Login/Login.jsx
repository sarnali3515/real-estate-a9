import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/z8s2rD7/gus-ruballo-h5-QNcl-JUi-A8-unsplash.jpg)' }}>
            <div className="hero-content flex-col lg:flex-row hero-overlay bg-opacity-50">
                <div className="text-center lg:m-8 lg:text-left">
                    <h1 className="text-5xl font-semibold text-indigo-800 btn-ghost ">Urban <span className="text-lime-600">Charm</span></h1>
                    <h1 className="text-3xl font-semibold text-white mt-5">Welcome to Urban Charm!</h1>
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
                    <p className="mb-4 text-center">Dont have an account? <Link to="/register" className="text-blue-600 font-semibold">Register.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;