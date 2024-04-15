import { useLoaderData, useParams } from "react-router-dom";


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
            <div className="px-3 md:px-5 lg:px-8 space-y-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{estate.estate_title}</h1>
                <p className="font-bold text-lg lg:text-xl text-indigo-700">Description </p>
                <p className="">{estate.description}</p>
                <p className="font-bold text-xl text-indigo-700">Address </p>
                <p className="">{estate.location}</p>
                <p className="font-bold text-xl text-indigo-700">Overview</p>
                <div>
                    <div className="max-w-xl">
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

            </div>


        </div>
    );
};

export default Estates;