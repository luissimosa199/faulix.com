import React from "react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import { servicesData } from "@/data/servicesData";

const ServicesSection = () => {
  return (
    <section>
      <SectionTitle>Te ayudaremos a: </SectionTitle>
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
        {servicesData.map((e) => {
          return (
            <Card
              key={e.id}
              title={e.title}
              image={e.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
