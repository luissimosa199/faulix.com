import Link from "next/link";
import React from "react";
import BarsSvg from "./icons/BarsSvg";

const MobileNav = ({
  showMenu,
  handleMobileMenu,
  className,
}: {
  showMenu: boolean;
  handleMobileMenu: () => void;
  className: string;
}) => {
  return (
    <div className={className}>
      <button onClick={handleMobileMenu}>
        <BarsSvg className="fill-white" />
      </button>

      {showMenu && (
        <nav className="absolute top-16 left-0 w-full bg-white z-50 sm:hidden">
          <ul className="">
            <li className="relative hover:text-black text-center mt-2 mb-2">
              <Link
                className="active block px-6 border-b-2 border-transparent font-semibold"
                href="/#inicio"
              >
                Inicio
              </Link>
            </li>
            <li className="relative hover:text-black text-center mb-2">
              <Link
                className="active block px-6 border-b-2 border-transparent font-semibold"
                href="/#industrias"
              >
                Industrias
              </Link>
            </li>
            <li className="relative hover:text-black text-center mb-2">
              <Link
                className="active block px-6 border-b-2 border-transparent font-semibold"
                href="/#clientes"
              >
                Clientes
              </Link>
            </li>
            <li className="relative hover:text-black text-center mb-2">
              <Link
                className="active block px-6 border-b-2 border-transparent font-semibold"
                href="/#servicios"
              >
                Servicios
              </Link>
            </li>
            <li className="relative hover:text-black text-center mb-2">
              <Link
                className="active block px-6 border-b-2 border-transparent font-semibold"
                href="/#trabajo"
              >
                Trabajo
              </Link>
            </li>
            <li className="relative hover:text-black text-center mb-2">
              <Link
                className="active block px-6 border-b-2 border-transparent font-semibold"
                href="/#contacto"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
