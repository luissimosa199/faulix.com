import React from "react";
import BarsSvg from "./icons/BarsSvg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-700 flex justify-between p-4">
      <div className="">
        <Image
          src="/images/logo.png"
          alt="logo"
          className="w-48 invert"
          width={192}
          height={84}
        />
      </div>
      <div>
        <BarsSvg className="fill-white" />
      </div>
    </header>
  );
};

export default Header;
