import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 p-4 flex flex-col gap-2 sm:flex-row-reverse sm:justify-between sm:px-48">
      <div className="w-48 h-12 bg-gray-400 sm:hidden"></div>
      <div className=" mb-4 sm:mb-0 ">
        <div className="flex gap-2 sm:gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        </div>

        <p className="text-gray-200">
          2024 Copyright Faulix Software. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="w-48 h-12 bg-gray-400 hidden sm:block "></div>
        <div className="flex flex-wrap">
          <Link
            href="#"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Link
          </Link>
          <Link
            href="#"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Link
          </Link>
          <Link
            href="#"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Link
          </Link>
          <Link
            href="#"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Link
          </Link>
          <Link
            href="#"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Link
          </Link>
          <Link
            href="#"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Link
          </Link>
          <Link
            href="#"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Link
          </Link>
          <Link
            href="#"
            className="w-1/2 text-gray-200 text-lg mb-2"
          ></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
