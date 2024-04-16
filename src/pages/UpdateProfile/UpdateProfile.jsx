import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth"; // Import updateProfile method from Firebase authentication
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [newName, setNewName] = useState(user.displayName);
    const [newPhotoURL, setNewPhotoURL] = useState(user.photoURL);

    const handleSaveChanges = async (e) => {
        e.preventDefault();

        try {
            await updateProfile(user, {
                displayName: newName,
                photoURL: newPhotoURL
            });
            toast.success('Profile Updated Successfully!')
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Urban Charm | Update Profile</title>
            </Helmet>
            <div className="hero min-h-screen bg-indigo-50">
                <div data-aos="fade-right" className="card shrink-0 w-full max-w-lg shadow-2xl bg-indigo-200">
                    <h1 className="text-3xl text-center px-5 font-bold">Update Profile!</h1>
                    <form className="card-body" onSubmit={handleSaveChanges}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} name="name" placeholder="Enter New Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" value={newPhotoURL} onChange={(e) => setNewPhotoURL(e.target.value)} name="photo" placeholder="Enter New Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-indigo-700 text-white">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;