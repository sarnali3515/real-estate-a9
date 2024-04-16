import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { MdEmail } from "react-icons/md";

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Urban Charm | Profile</title>
            </Helmet>
            <div data-aos="fade-up" className="bg-indigo-50">
                <div className="flex items-center justify-center pt-10">
                    <div className="avatar">
                        <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                </div>
                <div className="text-center py-10">
                    <h2 className="text-3xl pb-3 font-bold"><span className=" font-bold"></span> {user.displayName}</h2>
                    <h3 className="text-xl flex justify-center items-center gap-2"><span className="text-2xl"><MdEmail></MdEmail></span>{user.email}</h3>
                </div>
            </div>

        </div>
    );
};

export default Profile;