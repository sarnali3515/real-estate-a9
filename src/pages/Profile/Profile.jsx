import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";


const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Urban Charm | Profile</title>
            </Helmet>
            <div className="bg-indigo-50">
                <div className="flex items-center justify-center pt-10">
                    <div className="avatar">
                        <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                </div>
                <div className="text-center text-2xl py-10">
                    <h2 className=""><span className="font-bold">Name:</span> {user.displayName}</h2>
                    <h3 className=""><span className="font-bold">Email: </span>{user.email}</h3>
                </div>
            </div>

        </div>
    );
};

export default Profile;