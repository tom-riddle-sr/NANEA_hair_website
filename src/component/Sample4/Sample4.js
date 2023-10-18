/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './sample4.css';

// import required modules
import {
  Pagination, Autoplay,
} from 'swiper/modules';

export default function Sample4() {
  return (

    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      loop={true}
      speed="8000"
      autoplay={{
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,

      }}
    >
      <SwiperSlide className='swiper_slide'>Discover true beauty, through a relaxing time.</SwiperSlide>
      <SwiperSlide className='swiper_slide'>Discover true beauty, through a relaxing time.</SwiperSlide>
      <SwiperSlide className='swiper_slide'>Discover true beauty, through a relaxing time.</SwiperSlide>
      <SwiperSlide className='swiper_slide'>Discover true beauty, through a relaxing time.</SwiperSlide>
      <SwiperSlide className='swiper_slide'>Discover true beauty, through a relaxing time.</SwiperSlide>
      <SwiperSlide className='swiper_slide'>Discover true beauty, through a relaxing time.</SwiperSlide>
      <SwiperSlide className='swiper_slide'>Discover true beauty, through a relaxing time.</SwiperSlide>
    </Swiper>

  );
}
