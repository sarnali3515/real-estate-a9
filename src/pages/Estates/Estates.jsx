import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineDescription, MdOutlineContentPasteSearch, } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity, FaClipboardCheck } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const Estates = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const estateIdInt = parseInt(id);
    const estate = estates.find(estate => estate.id == estateIdInt);

    return (
        <div className=" bg-indigo-50">

            <div className="flex items-center justify-center px-6 lg:px-14">
                <img src={estate.image_url} className="max-w-full my-4 rounded-lg shadow-2xl" />
            </div>
            <div className="px-3 md:px-5 lg:px-8 space-y-5">
                <h1 className="flex items-center gap-4 text-xl md:text-2xl lg:text-3xl my-8 font-bold"><FaCity></FaCity>{estate.estate_title}</h1>
                <p className="font-bold flex items-center gap-2 text-lg lg:text-xl text-indigo-700"><MdOutlineDescription></MdOutlineDescription> Description </p>
                <p className="">{estate.description}</p>
                <p className="font-bold flex items-center gap-2 text-xl text-indigo-700"><FaLocationDot></FaLocationDot>Address </p>
                <p className="">{estate.location}</p>
                <p className="flex items-center gap-2 font-bold text-xl text-indigo-700"><MdOutlineContentPasteSearch></MdOutlineContentPasteSearch>Overview</p>
                <div>
                    <div className="max-w-xl pb-5">
                        <table className="table text-base">

                            <tbody>
                                {/* row 1 */}
                                <tr className="bg-indigo-100">
                                    <td className="">Property ID</td>
                                    <td>{estate.id}</td>
                                </tr>
                                <tr >
                                    <td className="">Price</td>
                                    <td>{estate.price}</td>
                                </tr>
                                <tr className="bg-indigo-100">
                                    <td className="">Property Type</td>
                                    <td>{estate.segment_name}</td>
                                </tr>
                                <tr >
                                    <td className="">Property Status</td>
                                    <td>For {estate.status}</td>
                                </tr>
                                <tr className="bg-indigo-100">
                                    <td className="">Area</td>
                                    <td>{estate.area}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:items-center pb-8">
                    <p className="font-bold flex items-center gap-2 text-xl text-indigo-700"><FaClipboardCheck></FaClipboardCheck>Facility </p>
                    <ul className="lg:space-x-2">
                        <li className="badge bg-indigo-600 text-lg p-3 md:gap-1 font-semibold text-white"><IoMdCheckmark></IoMdCheckmark>{estate.facilities[0]} </li>
                        <li className="badge bg-indigo-600 text-lg p-3 md:gap-1 font-semibold text-white"><IoMdCheckmark></IoMdCheckmark>{estate.facilities[1]} </li>
                        <li className="badge bg-indigo-600 text-lg p-3 md:gap-1 font-semibold text-white"><IoMdCheckmark></IoMdCheckmark>{estate.facilities[2]} </li>

                    </ul>
                </div>

            </div>


        </div>
    );
};

export default Estates;