import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <section className='scale-125 rounded -mt-68'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper bg-transparent"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-120"
                        src="https://www.brunomag.com/brunomag_content/uploads/2020/12/3.png"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-120"
                        src="/chromeextension.png"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-120"
                        src="https://i.imgur.com/IzyAjQE.jpeg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
  )
}

export default Carousel