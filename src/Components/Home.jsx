import React from "react";

function Hero() {
  return (
    <div className="text-center w-full h-screen">
      <section className="bg-[#ffe742] text-center flex justify-center items-center w-full h-3/4">
        <div className="">
          <h1 className="text-black md:text-10xl md:leading-none sm:text-8xl font-extrabold text-7xl">
            WALACE
          </h1>
          <h1 className="bg-black text-[#ffe742] md:text-8xl md:leading-none md:px-20 font-extrabold w-fit mx-auto px-full text-6xl px-9">
            BORGES
          </h1>
          <h1 className="text-black md:text-5xl md:leading-snug font-bold text-xl">
            FULLSTACK WEB DEVELOPER
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Hero;
