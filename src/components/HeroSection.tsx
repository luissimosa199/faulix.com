import React from "react";
import ChevronRightSvg from "./icons/ChevronRightSvg";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative"
      id="inicio"
    >
      <div className="h-96 mb-72 min-[390px]:mb-56 sm:mb-36 relative overflow-hidden">
        <Image
          className="object-cover absolute"
          src="/images/hero.jpg"
          alt="hero"
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className="mx-4 p-8 bg-gray-200 flex flex-col gap-2 absolute top-60 sm:max-w-[500px] lg:ml-48 sm:top-48 ">
        <h2 className="font-semibold text-lg">
          Soluciones Digitales Personalizadas
        </h2>
        <p>
          Faulix especializa en desarrollo de software a medida, ofreciendo
          soluciones innovadoras aplicando inteligencia artificial en análisis y
          automatización empresarial. Proporcionamos mantenimiento web continuo,
          junto con la gestión eficiente de campañas publicitarias en
          plataformas digitales.
        </p>
        <Link
          href="/contacto"
          className="text-orange-500 font-semibold flex gap-1 items-center"
        >
          <span>Saber más</span>

          <ChevronRightSvg
            className="fill-orange-500"
            width={16}
            height={16}
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
