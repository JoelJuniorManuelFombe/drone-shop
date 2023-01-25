import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { EffectCoverflow, Pagination, Navigation, Autoplay, FreeMode } from "swiper";

import { BsArrowRightShort, BsPlayFill } from "react-icons/bs";

const Thumbnails = ({ src }: any) => {
    return (
        <div className="">
            <img className="rounded-xl" src={src} alt="slide" />
        </div>
    )
}

const Hero = () => {
    return (
        <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 overflow-x-hidden">
            <div className="flex container mx-auto lg:content-between lg:max-w-7xl my-20 content-center">
                <div className="lg:min-w-[550px] flex flex-col content-center items-center text-white mx-auto space-y-10">
                    <div className="text-center">
                        <p className="text-xl">Make your moments fly with</p>
                        <h1 className="text-7xl">ProDrone 2.0</h1>
                    </div>
                    <div className="flex gap-5 items-center content-center">
                        <a href="">
                            <div className="rounded-lg border py-3 px-5 flex items-center content-center gap-2 bg-hero-btn-primary hover:bg-hero-btn-secondary">
                                <span>Whatch Vidio</span>
                                <BsPlayFill />
                            </div>
                        </a>
                        <a href="">
                            <div className="rounded border py-3 px-5 flex justify-center items-center gap-2">
                                <span>Learn more</span>
                                <BsArrowRightShort />
                            </div>
                        </a>
                    </div>
                    {/* <div className="ontent-center items-center max-w-lg">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 2,
                                slideShadows: true,
                            }}
                            autoplay ={{
                                delay: 5000,
                                disableOnInteraction: false,
                              }}
                            


                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            <div>
                            <SwiperSlide>
                                <Thumbnails
                                    src={'/images/01.jpg'}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Thumbnails
                                    src={'/images/02.jpg'}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Thumbnails
                                    src={'/images/03.jpg'}
                                />
                            </SwiperSlide>
                            </div>
                        </Swiper>
                    </div> */}
                    {/* carousel */}
                    {/* <div className="carousel rounded-box">
                        <div className="carousel-item">
                            <img src="/images/02.jpg" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                        </div>
                    </div> */}

                    <div className="w-96">
                        <Swiper
                            loop={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            centeredSlides={true}
                            freeMode={true}
                            speed={38000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                reverseDirection: true
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 8
                                },
                                500: {
                                    spaceBetween: 16
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 24
                                }
                            }}

                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>                                <Thumbnails
                                src={'/images/01.jpg'}
                            /></SwiperSlide>
                            <SwiperSlide>                                <Thumbnails
                                src={'/images/01.jpg'}
                            /></SwiperSlide>
                            <SwiperSlide>                                <Thumbnails
                                src={'/images/01.jpg'}
                            /></SwiperSlide>
                        </Swiper>
                    </div>
                    {/* fim do carousel */}
                </div>
                <div className="min-w-[1000px] relative h-full hidden lg:block">
                    <img className="" src="./images/image.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;