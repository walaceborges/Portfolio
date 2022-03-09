// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// import images Carrousel
import construction from "../assets/images/Untitled-design.jpg";
import ejobs from "../assets/images/ejobs.png";

function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="w-10/12 md:w-8/12"
    >
      <SwiperSlide className="flex justify-center h-full md:w-full">
        <div class="w-max md:w-11/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 border-t-0">
          <div className="h-68">
            <img class="w-screen h-68" src={ejobs} alt="" />
          </div>
          <div class="p-12 text-center">
            <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-4xl">
              Ejobs
            </h5>
            <p class="my-3 font-normal text-base text-gray-700 dark:text-gray-400 text-center md:text-lg">
              Site para busca de empregos.
            </p>
            <p class="my-3 font-normal text-sm text-violet-600 text-center md:text-lg">
              #HTML #CSS #Bootstrap #Javascript
            </p>
            <a
              href="https://github.com/walaceborges/adzuna"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Codigo
              </button>
            </a>
            <a
              href="https://ejobs.vercel.app/#"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Review
              </button>
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex justify-center h-full md:w-full">
        <div class="w-max md:w-11/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 border-t-0">
          <div className="h-68">
            <img class="w-screen h-68" src={construction} alt="" />
          </div>
          <div class="p-12   text-center">
            <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-4xl">
              Construindo
            </h5>
            <p class="my-3 font-normal text-base text-gray-700 dark:text-gray-400 text-center md:text-lg">
              Essa aplicação está quase pronta
            </p>
            <p class="my-3 font-normal text-sm text-violet-600 text-center md:text-lg">
              # # # #
            </p>
              <button
                type="button"
                class="text-white bg-slate-800 hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Codigo
              </button>
              <button
                type="button"
                class="text-white bg-slate-800 hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Review
              </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex justify-center h-full md:w-full">
        <div class="w-max md:w-11/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 border-t-0">
          <div className="h-68">
            <img class="w-screen h-68" src={construction} alt="" />
          </div>
          <div class="p-12   text-center">
            <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-4xl">
              Construindo
            </h5>
            <p class="my-3 font-normal text-base text-gray-700 dark:text-gray-400 text-center md:text-lg">
              Essa aplicação está quase pronta
            </p>
            <p class="my-3 font-normal text-sm text-violet-600 text-center md:text-lg">
              # # # #
            </p>
              <button
                type="button"
                class="text-white bg-slate-800 hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Codigo
              </button>
              <button
                type="button"
                class="text-white bg-slate-800 hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Review
              </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
