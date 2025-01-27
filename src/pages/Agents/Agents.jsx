
import 'animate.css'
const Agents = () => {
    return (
        <div>

            <div className="mt-6 mb-2  text-center ">
                <h2 className="font-bold text-3xl animate__animated animate__rubberBand">Meet All Our Agents</h2>
                <p className="px-10 md:px-28 animate__animated animate__flash">Our partnered agents play a pivotal role in our network, bringing their expertise and properties to our platform. Collaborating closely with these professionals, we ensure a seamless experience for buyers and renters.</p>
            </div>
            <div className="py-10 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* card-1 */}
                <div data-aos="fade-up" className="card w-full bg-base-100">
                    <figure><img src="https://i.ibb.co/jHnk0Bm/arafaelsherief-270x340.png" alt="Shoes" /></figure>
                    <div className="mx-5 py-2 bg-indigo-900 text-white rounded">
                        <h2 className="text-center text-3xl">Arafa El Sherief</h2>
                        <p className="text-center text-slate-300">3 Properties</p>
                        <div className="flex items-center justify-center "><img className="rounded-full" src="https://i.ibb.co/LgP9LxK/Capture-so.pnghttps://i.ibb.co/hdnz0yS/Capture-so-removebg-preview.png" alt="" /></div>
                        {/* <div className="card-actions justify-center">
                        <button className="btn bg-lime-700">Contact</button>
                    </div> */}
                    </div>
                </div>
                {/* card-2 */}
                <div data-aos="fade-up" className="card w-full bg-base-100">
                    <figure><img src="https://i.ibb.co/94s3jpN/fatmaghaly-1-270x340.png" alt="Shoes" /></figure>
                    <div className="mx-5 py-2 bg-indigo-900 text-white rounded">
                        <h2 className="text-center text-3xl">Fatma Ghaly</h2>
                        <p className="text-center text-slate-300">2 Properties</p>
                        <div className="flex items-center justify-center "><img className="rounded-full" src="https://i.ibb.co/LgP9LxK/Capture-so.pnghttps://i.ibb.co/hdnz0yS/Capture-so-removebg-preview.png" alt="" /></div>
                        {/* <div className="card-actions justify-center">
                        <button className="btn bg-lime-700">Contact</button>
                    </div> */}
                    </div>
                </div>
                {/* card-3 */}
                <div data-aos="fade-up" className="card w-full bg-base-100">
                    <figure><img src="https://i.ibb.co/N2Swr9F/abodyswede-270x340.png" alt="Shoes" /></figure>
                    <div className="mx-5 py-2 bg-indigo-900 text-white rounded">
                        <h2 className="text-center text-3xl">Abody Swedey</h2>
                        <p className="text-center text-slate-300">2 Properties</p>
                        <div className="flex items-center justify-center "><img className="rounded-full" src="https://i.ibb.co/LgP9LxK/Capture-so.pnghttps://i.ibb.co/hdnz0yS/Capture-so-removebg-preview.png" alt="" /></div>
                        {/* <div className="card-actions justify-center">
                        <button className="btn bg-lime-700">Contact</button>
                    </div> */}
                    </div>
                </div>
                {/* card-4 */}
                <div data-aos="fade-up" className="card w-full bg-base-100">
                    <figure><img src="https://i.ibb.co/6NP4xSF/magdyayaa-270x340.png" alt="Shoes" /></figure>
                    <div className="mx-5 py-2 bg-indigo-900 text-white rounded">
                        <h2 className="text-center text-3xl">Magdy Aya</h2>
                        <p className="text-center text-slate-300">3 Properties</p>
                        <div className="flex items-center justify-center "><img className="rounded-full" src="https://i.ibb.co/LgP9LxK/Capture-so.pnghttps://i.ibb.co/hdnz0yS/Capture-so-removebg-preview.png" alt="" /></div>
                        {/* <div className="card-actions justify-center">
                        <button className="btn bg-lime-700">Contact</button>
                    </div> */}
                    </div>
                </div>
                {/* card-5 */}
                <div data-aos="fade-up" className="card w-full bg-base-100">
                    <figure><img src="https://i.ibb.co/M5yCrGp/ghalymarco-270x340.png" alt="Shoes" /></figure>
                    <div className="mx-5 py-2 bg-indigo-900 text-white rounded">
                        <h2 className="text-center text-3xl">Ghaly Marco</h2>
                        <p className="text-center text-slate-300">1 Properties</p>
                        <div className="flex items-center justify-center "><img className="rounded-full" src="https://i.ibb.co/LgP9LxK/Capture-so.pnghttps://i.ibb.co/hdnz0yS/Capture-so-removebg-preview.png" alt="" /></div>
                        {/* <div className="card-actions justify-center">
                        <button className="btn bg-lime-700">Contact</button>
                    </div> */}
                    </div>
                </div>
                {/* card-6 */}
                <div data-aos="fade-up" className="card w-full bg-base-100">
                    <figure><img src="https://i.ibb.co/zG5Skns/monaghaly-270x340.png" alt="Shoes" /></figure>
                    <div className="mx-5 py-2 bg-indigo-900 text-white rounded">
                        <h2 className="text-center text-3xl">Mona Ghaly</h2>
                        <p className="text-center text-slate-300">3 Properties</p>
                        <div className="flex items-center justify-center "><img className="rounded-full" src="https://i.ibb.co/LgP9LxK/Capture-so.pnghttps://i.ibb.co/hdnz0yS/Capture-so-removebg-preview.png" alt="" /></div>
                        {/* <div className="card-actions justify-center">
                        <button className="btn bg-lime-700">Contact</button>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agents;