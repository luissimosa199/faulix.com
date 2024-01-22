import React from "react";
import BarsSvg from "./icons/BarsSvg";

const Header = () => {
  return (
    <header className="bg-gray-700 flex justify-between p-4">
      <div className="w-48 bg-gray-400"></div>
      <div>
        <BarsSvg className="fill-white" />
      </div>
    </header>
  );
};

export default Header;
