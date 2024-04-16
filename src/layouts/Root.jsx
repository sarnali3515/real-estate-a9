import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;