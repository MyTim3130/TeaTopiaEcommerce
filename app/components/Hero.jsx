import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="h-[100vh] mb-40">
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
        className="w-auto h-auto object-cover sm:w-screen absolute z-[0] top-[101vh] xl:top-[85vh] lg:top-[95vh]"
        src="/assets/liana.png"
        width={10000}
        height={10000}
      />
      <section className="h-screen w-screen flex flex-col">
        <Image
          className="w-auto h-screen object-cover sm:w-[110vw] absolute z-[-1] top-[106vh]"
          src="/assets/bg3.png"
          width={10000}
          height={10000}
        />
        <div className="w-sceen h-auto flex items-center flex-col">
          <h2 className="text-3xl text-white sm:text-5xl sm:mt-0">
            Verschiedenste Sorten!
          </h2>

          <Image
            className="w-64 h-auto object-cover absolute z-[0] mt-16 sm:h-[80vh] sm:w-auto sm:mt-0"
            src="/assets/kannen.png"
            width={10000}
            height={10000}
          />

          <div className="w-screen h-96 bg-lime-950 mt-96 sm:mt-[35rem] sm:h-[50vh] grid grid-cols-2">
            <div className="h-50% flex mt-4 items-center flex-col">
              <span className="text-white text-2xl sm:text-4xl">Vegan</span>
              <div>
                <Image src='/assets/vegan.png' className="mt-10 h-20 w-auto sm:h-28 sm:mt-5" width={500} height={500} />
              </div>
            </div>
            <div className="h-50% flex mt-4 items-center flex-col">
              <span className="text-white text-2xl sm:text-4xl">Price</span>
              <div>
                <Image src='/assets/increase.png' className="mt-10 h-20 w-auto sm:h-28 sm:mt-5" width={500} height={500} />
              </div>
            </div>
            <div className="h-50% flex mt-4 items-center flex-col">
              <span className="text-white text-2xl sm:text-4xl">Health</span>
              <div>
                <Image src='/assets/healthcare.png' className="mt-10 h-20 w-auto sm:h-28 sm:mt-5" width={500} height={500} />
              </div>
            </div>
            <div className="h-50% flex mt-4 items-center flex-col">
              <span className="text-white text-2xl sm:text-4xl">Taste</span>
              <div>
                <Image src='/assets/taste.png' className="mt-10 h-20 w-auto sm:h-28 sm:mt-5" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
