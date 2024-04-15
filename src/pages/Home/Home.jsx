import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import EstateCards from "./EstateCards";


const Home = () => {

    const estates = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl font-montserrat">This is Home</h2>
            <Banner></Banner>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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