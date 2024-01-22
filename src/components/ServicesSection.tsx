import React from "react";
import SectionTitle from "./SectionTitle";
import BlogPostCard from "./BlogPostCard";

const servicesData = [
  {
    id: 1,
    title: "Diseñar nuevas experiencias digitales",
    image: "",
    url: "#",
  },
  {
    id: 2,
    title: "Ingeniar mejores productos digitales",
    image: "",
    url: "#",
  },
  {
    id: 3,
    title: "Crear plataformas de servicios digitales",
    image: "",
    url: "#",
  },
  {
    id: 4,
    title: "Crear nuevos flujos de ingresos",
    image: "",
    url: "#",
  },
];

const ServicesSection = () => {
  return (
    <section>
      <SectionTitle>Te ayudaremos a: </SectionTitle>

      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
        {servicesData.map((e) => {
          return (
            <BlogPostCard
              key={e.id}
              title={e.title}
              image={e.image}
              url={e.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
