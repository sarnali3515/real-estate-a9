import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FaChartArea } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";



const EstateCards = ({ estate }) => {

    const { id, estate_title, image_url, segment_name, status, description, area, location, facilities, price } = estate;

    return (
        <div className="card bg-indigo-50 shadow-xl">
            <figure className="relative">
                <div className="absolute bottom-0 left-0 font-extrabold text-xl text-black rounded-t-xl px-1 bg-indigo-50">{price}</div>
                <div className="absolute bottom-2 right-2">
                    {
                        status == 'sale' ?
                            <div className="badge text-xl p-3 text-white bg-red-700">Sale</div>
                            :
                            <div className="badge text-xl p-3 text-white bg-lime-600">Rent</div>
                    }
                </div>
                <img src={image_url} alt="Shoes" /></figure>

            <div className="badge text-xl p-3 text-white bg-indigo-800">{segment_name}</div>


            <div className="card-body">
                <h2 className="card-title">
                    {estate_title}

                </h2>

                <p>{
                    description.length > 80 ?
                        <p>{description.slice(0, 80)} <Link
                            className="text-blue-600 font-bold"
                            to={`/news/${id}`}
                        >Read More...</Link></p>
                        :
                        <p>{description}</p>
                }
                </p>
                <p className="flex gap-2 items-center"><FaChartArea></FaChartArea>Area: <span className="font-semibold">{area}</span></p>
                <hr />
                <p className="flex gap-2 items-center"><FaLocationDot></FaLocationDot>Location: <span className="font-semibold">{location}</span></p>
                <hr />
                <ul className="text-left ml-5">
                    <span className="font-bold text-lg">Facilities</span>
                    {
                        facilities.map((facility, idx) =>
                            <li
                                key={idx}
                                className="flex items-center gap-3"
                            ><IoMdCheckmark></IoMdCheckmark><a>{facility}</a>
                            </li>)
                    }
                </ul>
                {/* <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div> */}
                <button className="btn text-white bg-lime-600">View Property</button>
            </div>
        </div>
    );
};

export default EstateCards;