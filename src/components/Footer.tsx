import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 p-4 flex flex-col gap-2 sm:flex-row-reverse sm:justify-center sm:px-48">
      <div className="sm:hidden">
        <Image
          src="/images/logo.png"
          alt="logo"
          className="w-48 invert"
          width={192}
          height={84}
        />
      </div>

      <div className="flex flex-col sm:justify-between sm:w-full">
        <div className="hidden sm:block mb-4">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="w-48 invert"
            width={192}
            height={84}
          />
        </div>
        <div className="flex flex-wrap">
          <Link
            href="/#inicio"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Inicio
          </Link>
          <Link
            href="/#industrias"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Industrias
          </Link>
          <Link
            href="/#clientes"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Clientes
          </Link>
          <Link
            href="/#servicios"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Servicios
          </Link>
          <Link
            href="/#trabajo"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Trabajo
          </Link>
          <Link
            href="/contacto"
            className="w-1/2 text-gray-200 text-lg mb-2"
          >
            Contacto
          </Link>
        </div>
        <div className=" mb-4 sm:mb-0 ">
          <p className="text-gray-200">
            2024 Copyright Faulix Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
