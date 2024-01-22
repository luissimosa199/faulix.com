import React from "react";

const SocialNetworkSection = () => {
  return (
    <section className="px-2 py-16 sm:hidden">
      <h2 className="text-center mb-6">Comparte esta página</h2>
      <div className="flex gap-4 justify-center">
        <div className="w-16 h-16 rounded-full bg-gray-300"></div>
        <div className="w-16 h-16 rounded-full bg-gray-300"></div>
        <div className="w-16 h-16 rounded-full bg-gray-300"></div>
        <div className="w-16 h-16 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
};

export default SocialNetworkSection;
