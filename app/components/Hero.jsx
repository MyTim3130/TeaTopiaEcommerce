import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section>
      <Image
          className="w-auto h-screen object-cover sm:w-screen absolute z-[-1]"
          src="/assets/background1.png"
          width={10000}
          height={10000}
          
        />
        <h1 className="text-white text-5xl flex justify-center items-center h-72 font-extrabold bg-gradient-to-r from-lime-100 to-yellow-300 bg-clip-text text-transparent sm:text-8xl">TeaTopia</h1>
      </section>
    </>
  );
};

export default Hero;
