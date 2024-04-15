

const EstateCards = ({ estate }) => {

    const { estate_title, image_url, segment_name, status } = estate;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure ><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {estate_title}
                    <div className="badge text-white bg-indigo-800">{segment_name}</div>
                </h2>
                {
                    status == 'sale' ?
                        <div></div>
                        :
                        <div>xyz</div>
                }
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <button className="btn text-white bg-lime-600">View Property</button>
            </div>
        </div>
    );
};

export default EstateCards;