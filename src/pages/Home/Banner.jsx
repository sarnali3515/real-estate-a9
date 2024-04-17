


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';




const Banner = () => {
    return (

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className='z-0'
        >
            <SwiperSlide>
                <div className="hero rounded-lg min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/kJFS9zj/allphoto-bangkok-n-I4a-C1ka-TRc-unsplash.jpg)' }}>
                    <div className="hero-overlay rounded-lg bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-5xl font-bold">Discover Your Dream Home with Urban Charm</h1>
                            <p className="mb-5">Find the perfect place to call home with our comprehensive selection of residential properties. Explore listings ranging from cozy family homes to luxurious urban retreats, each offering unique features and amenities</p>
                            <button className="btn bg-lime-700 text-white font-semibold">Explore Properties</button>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="hero rounded-lg min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/j6ph7z7/simi-iluyomade-MLbnzu-Pa-KVk-unsplash.jpg)' }}>
                    <div className="hero-overlay rounded-lg bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-5xl font-bold">Discover Your Dream Home with Urban Charm</h1>
                            <p className="mb-5">Find the perfect place to call home with our comprehensive selection of residential properties. Explore listings ranging from cozy family homes to luxurious urban retreats, each offering unique features and amenities</p>
                            <button className="btn bg-lime-700 text-white font-semibold">Explore Properties</button>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="hero rounded-lg min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3Fs6FVV/sigmund-qv-IHG1e-Fvps-unsplash.jpg)' }}>
                    <div className="hero-overlay rounded-lg bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-5xl font-bold">Discover Your Dream Home with Urban Charm</h1>
                            <p className="mb-5">Find the perfect place to call home with our comprehensive selection of residential properties. Explore listings ranging from cozy family homes to luxurious urban retreats, each offering unique features and amenities</p>
                            <button className="btn bg-lime-700 text-white font-semibold">Explore Properties</button>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="hero rounded-lg min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/S3bw4wj/luke-van-zyl-ko-H7-IVuw-RLw-unsplash.jpg)' }}>
                    <div className="hero-overlay rounded-lg bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-5xl font-bold">Discover Your Dream Home with Urban Charm</h1>
                            <p className="mb-5">Find the perfect place to call home with our comprehensive selection of residential properties. Explore listings ranging from cozy family homes to luxurious urban retreats, each offering unique features and amenities</p>
                            <button className="btn bg-lime-700 text-white font-semibold">Explore Properties</button>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            {/* Add more slides as needed */}
        </Swiper>

    );
};

export default Banner;