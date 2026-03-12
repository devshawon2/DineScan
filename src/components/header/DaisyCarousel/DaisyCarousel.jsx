import React from 'react';

const DaisyCarousel = () => {
    return (
        <div className="carousel w-full border border-orange-400 h-80 rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover" />
                <div className="absolute inset-0 grid h-full w-full place-items-start bg-black/50 items-center">
                    <div className="w-3/4 text-start md:w-2/4 ms-20 ">
                        <h1 className="mb-2 md:text-3xl lg:text-4xl text-white roboto-bold">
                            Today's Special!
                        </h1>
                        <p className="mb-6 opacity-80 text-white">
                            Get 20% off on all lunch items between 12 PM - 3 PM
                        </p>
                        <div className="btn DineScan-primary-bg px-8 text-semibold text-md">Order Now</div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover" />
                <div className="absolute inset-0 grid h-full w-full place-items-start bg-black/50 items-center">
                    <div className="w-3/4 text-start md:w-2/4 ms-20 ">
                        <h1 className="mb-2 md:text-3xl lg:text-4xl text-white roboto-bold">
                            Fast Delivery
                        </h1>
                        <p className="mb-6 opacity-80 text-white">
                            Orders delivered to your desk within 15 minutes
                        </p>
                        <div className="btn DineScan-primary-bg px-8 text-semibold text-md">Start Ordering</div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover" />
                <div className="absolute inset-0 grid h-full w-full place-items-start bg-black/50 items-center">
                    <div className="w-3/4 text-start md:w-2/4 ms-20 ">
                        <h1 className="mb-2 md:text-3xl lg:text-4xl text-white roboto-bold">
                            New Menu Items
                        </h1>
                        <p className="mb-6 opacity-80 text-white">
                            Try our freshly added South Indian breakfast specials
                        </p>
                        <div className="btn DineScan-primary-bg px-8 text-semibold text-md">Explore Menu</div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default DaisyCarousel;