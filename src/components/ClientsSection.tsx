import React from "react";
import SectionTitle from "./SectionTitle";

const ClientsSection = () => {
  return (
    <section className="bg-gray-200 p-4">
      <SectionTitle className="text-center">
        Contribuimos significativamente al avance y prosperidad de los negocios
        de las siguientes firmas
      </SectionTitle>

      <div className="flex flex-wrap my-4">
        <div className="w-1/2 h-32 bg-gray-300 border"></div>
        <div className="w-1/2 h-32 bg-gray-300 border"></div>
        <div className="w-1/2 h-32 bg-gray-300 border"></div>
        <div className="w-1/2 h-32 bg-gray-300 border"></div>
      </div>
    </section>
  );
};

export default ClientsSection;
