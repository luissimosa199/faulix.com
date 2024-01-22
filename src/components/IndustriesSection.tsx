import React from "react";
import LightBulbSvg from "./icons/LightBulbSvg";
import { IndustryData } from "@/types";
import ShoppingCartSvg from "./icons/ShoppingCartSvg";
import BicycleSvg from "./icons/BicycleSvg";
import FaceSmileSvg from "./icons/FaceSmileSvg";
import HouseSvg from "./icons/HouseSvg";
import DoctorSvg from "./icons/DoctorSvg";
import SectionTitle from "./SectionTitle";

const industriesData: IndustryData[] = [
  {
    id: 1,
    title: "Energía",
    icon: LightBulbSvg,
  },
  {
    id: 2,
    title: "Deportes",
    icon: BicycleSvg,
  },
  {
    id: 3,
    title: "Entretenimiento",
    icon: FaceSmileSvg,
  },
  {
    id: 4,
    title: "Salud",
    icon: DoctorSvg,
  },
  {
    id: 5,
    title: "Comercio",
    icon: ShoppingCartSvg,
  },
  {
    id: 6,
    title: "Bienes raices",
    icon: HouseSvg,
  },
];

const IndustriesSection = () => {
  return (
    <section
      id="industrias"
      className=" md:flex md:justify-center md:items-center"
    >
      <SectionTitle className="md:max-w-xs sm:text-center">
        Industrias en las que nos especializamos:
      </SectionTitle>
      <div className="flex flex-wrap">
        {industriesData.map((e) => {
          const Icon = e.icon;
          return (
            <div
              key={e.id}
              className="w-1/2 md:w-1/3 flex flex-col justify-center items-center p-4 hover:opacity-75 transition-opacity ease-in-out"
            >
              <Icon
                width={80}
                height={80}
              />
              <h3 className="mt-2 text-lg">{e.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustriesSection;
