import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    return (
        <div>
            <Helmet>
                <title>Urban Charm | Update Profile</title>
            </Helmet>
            <div className="hero min-h-screen bg-indigo-50">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-indigo-200">
                    <h1 className="text-3xl text-center px-5 font-bold">Update Profile!</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter New Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter New Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter New Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter New Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-indigo-700 text-white">Save Changes</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateProfile;