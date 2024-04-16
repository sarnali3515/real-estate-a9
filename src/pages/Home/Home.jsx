import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import EstateCards from "./EstateCards";
import { Helmet } from "react-helmet-async";




const Home = () => {

    const estates = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Urban Charm | Home</title>
            </Helmet>

            <Banner></Banner>
            <div className="mt-10  text-center ">
                <h2 className="font-bold text-3xl">Explore All the Estates</h2>
                <p className="px-10 md:px-28">Explore our diverse range of residential treasures, from cozy family homes to luxurious urban retreats. Each property offers unique features and amenities, ensuring there is something for every lifestyle.</p>
            </div>

            <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    estates.map(estate => <EstateCards
                        key={estate.id}
                        estate={estate}
                    ></EstateCards>)
                }
            </div>

        </div>
    );
};

export default Home;