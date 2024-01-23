import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <section className="bg-[#adbda7] h-[6vh] sm:h-[9vh] fixed w-screen z-50">
        <div className="flex items-center justify-around h-full">
          <div>
            <Image className="h-10 w-auto rounded-full sm:h-16 sm:w-auto" src="/assets/logo.png" width={1000} height={1000} />
          </div>

          <div className="sm:text-2xl">TEATOPIA</div>

          <div className="sm:text-2xl">MENU</div>
        </div>
      </section>
      <div className="h-[6vh] sm:h-[9vh]"></div>

    </>
  );
};

export default Nav;
