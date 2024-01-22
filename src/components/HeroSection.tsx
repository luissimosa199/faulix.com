import React from "react";
import ChevronRightSvg from "./icons/ChevronRightSvg";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="h-96 mb-36 relative overflow-hidden">
        <Image
          className="object-cover absolute"
          src="/images/hero.jpg"
          alt="hero"
          fill
          sizes="100vw"
        />
      </div>
      <div className="mx-4 p-8 bg-gray-200 flex flex-col gap-2 absolute top-60 sm:max-w-[500px] lg:ml-48 sm:top-48 ">
        <h2 className="font-semibold text-lg">Titulo 1</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolorum
          saepe amet alias ea repudiandae id maxime ex ipsum iure nostrum, quia
          iste quos, quasi maiores voluptatum voluptatibus quod quas adipisci
          perferendis soluta repellat!
        </p>
        <Link
          href="#"
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
