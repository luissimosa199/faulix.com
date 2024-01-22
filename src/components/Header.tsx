"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  const path = usePathname();
  const [showMenu, toggleMenu] = useState<boolean>(false);

  const handleMobileMenu = () => {
    toggleMenu(!showMenu);
  };

  useEffect(() => {
    toggleMenu(false);
  }, [path]);

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

      <MobileNav
        className="sm:hidden"
        showMenu={showMenu}
        handleMobileMenu={handleMobileMenu}
      />

      <nav className="hidden sm:block">
        <ul className="flex gap-6 text-white font-semibold text-lg">
          <li>
            <Link href="/#inicio">Inicio</Link>
          </li>
          <li>
            <Link href="/#industrias">Industrias</Link>
          </li>
          <li>
            <Link href="/#clientes">Clientes</Link>
          </li>
          <li>
            <Link href="/#servicios">Servicios</Link>
          </li>
          <li>
            <Link href="/#trabajo">Trabajo</Link>
          </li>
          <li>
            <Link href="/#contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
