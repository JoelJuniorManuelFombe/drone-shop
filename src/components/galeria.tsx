import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { EffectCoverflow, Pagination, Navigation, Autoplay, FreeMode } from "swiper";


const Galeria = () => {
    return (
        <div className="space-y-7">
            <h1 className="text-center text-5xl font-bold pb-10">Use shots gallery</h1>
            <div className="">
                <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    freeMode={true}
                    speed={38000}
                    freeModeMomentum={false}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
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
                    <SwiperSlide>
                        <img src="/images/01 (1).jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/02 (1).jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/03 (1).jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
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
                    <SwiperSlide>
                        <img src="/images/02 (1).jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/01 (1).jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/03 (1).jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default Galeria;