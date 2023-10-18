/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './sample5.css';

// import required modules
import {
  Pagination, Autoplay,
} from 'swiper/modules';

export default function Sample5() {
  return (

    <Swiper
      slidesPerView={3}
      spaceBetween={800}
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

      <SwiperSlide className='swiper_slide'>
        <img src="https://naneaahua-hair.com/wp/wp-content/uploads/other06-900x675.jpg">
        </img></SwiperSlide>
      <SwiperSlide className='swiper_slide'>
        <img src="https://naneaahua-hair.com/wp/wp-content/uploads/main03-900x675.jpg">
        </img></SwiperSlide>
      <SwiperSlide className='swiper_slide'>
        <img src="https://naneaahua-hair.com/wp/wp-content/uploads/other11-900x675.jpg">
        </img></SwiperSlide>
      <SwiperSlide className='swiper_slide'>
        <img src="https://naneaahua-hair.com/wp/wp-content/uploads/main01-675x900.jpg">
        </img></SwiperSlide>
      <SwiperSlide className='swiper_slide'>
        <img src="https://naneaahua-hair.com/wp/wp-content/uploads/main07-900x675.jpg">
        </img></SwiperSlide>
      <SwiperSlide className='swiper_slide'>
        <img src="https://naneaahua-hair.com/wp/wp-content/uploads/other14-900x675.jpg">
        </img></SwiperSlide>
      <SwiperSlide className='swiper_slide'>
        <img src="https://naneaahua-hair.com/wp/wp-content/uploads/sub09-675x900.jpg">
        </img></SwiperSlide>

    </Swiper>

  );
}
