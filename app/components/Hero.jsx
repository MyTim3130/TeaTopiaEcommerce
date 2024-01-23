import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="h-[100vh]">
        <Image
          className="w-auto h-screen object-cover sm:w-screen absolute z-[-1]"
          src="/assets/background1.png"
          width={10000}
          height={10000}
        />
        <h1 className="text-white text-5xl flex justify-center items-center h-72 font-extrabold  sm:text-8xl">
          TeaTopia
        </h1>
        <div className="w-screen h-fit flex items-center justify-center text-center">
          <p className="w-[70vw] text-2xl text-white relative bottom-16 sm:text-3xl sm:bottom-11">
            Willkommen bei TeaTopia <br />
            Entdecken Sie eine Welt voller exquisiter Tees!
          </p>
        </div>
      </section>

      <Image
        className="w-auto h-auto object-cover sm:w-screen absolute z-[0] top-[101vh] sm:top-[88vh]"
        src="/assets/liana.png"
        width={10000}
        height={10000}
      />
      <section className="h-screen flex flex-col items-center">
        <div className="w-full h-fit">
          <div className="w-full h-fit">
            <Image
              className="w-52 h-auto object-cover sm:w-screen absolute z-[0]"
              src="/assets/kannen.png"
              width={10000}
              height={10000}
            />
          </div>

          <div></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
