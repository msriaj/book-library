import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";
import "swiper/css";

export default function Hero() {
  return (
    <div className="md:w-10/12 mx-auto flex gap-10 py-14 md:py-20 px-10 mb-10 bg-gradient-to-r from-indigo-200 items-center">
      <div className="w-full md:w-1/2">
        <h2 className="text-6xl font-bold ">Lorem ipsum dolor sit amet.</h2>
        <p className="text-gray-600 text-lg py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          praesentium provident vel? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur praesentium provident vel?
        </p>
        <button className="p-3 font-semibold  bg-indigo-600 text-white">
          See More
        </button>
      </div>
      <div className="md:w-1/2 hidden md:block  ">
        {" "}
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          //   centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img
              className="rounded-lg shadow-lg"
              src="https://m.media-amazon.com/images/I/81uWWAHp25L._AC_UL320_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg shadow-lg"
              src="https://m.media-amazon.com/images/I/81gTRv2HXrL._AC_UL320_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg shadow-lg"
              src="https://m.media-amazon.com/images/I/71cLhcpj5AL._AC._SR360,460.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg shadow-lg"
              src="https://m.media-amazon.com/images/I/81uWWAHp25L._AC_UL320_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg shadow-lg"
              src="https://m.media-amazon.com/images/I/81uWWAHp25L._AC_UL320_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg shadow-lg"
              src="https://m.media-amazon.com/images/I/81uWWAHp25L._AC_UL320_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg shadow-lg"
              src="https://m.media-amazon.com/images/I/81uWWAHp25L._AC_UL320_.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
