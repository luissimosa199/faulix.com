import Link from "next/link";
import React from "react";
import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  return (
    <section className="py-8 sm:flex sm:justify-center">
      <SectionTitle className="text-center mb-12">Contactanos</SectionTitle>
      <div className="flex flex-col gap-1 mx-2 sm:flex-row">
        <Link href="#">
          <div className="bg-gray-700 text-gray-100 px-4 py-2 text-center text-lg rounded-sm">
            Futuros clientes
          </div>
        </Link>
        <Link href="#">
          <div className="bg-gray-700 text-gray-100 px-4 py-2 text-center text-lg rounded-sm">
            Futuros colaboradores
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
