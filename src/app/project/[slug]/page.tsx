import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = ({ params: { slug } }: { params: { slug: string } }) => {
  const project = portfolioData.find((project) => project.slug === slug);

  if (!project) {
    return <p>Ha ocurrido un error</p>;
  }

  return (
    <main>
      <section>
        <div className="bg-gray-600">
          <div className="w-full sm:w-1/2 h-52 sm:h-96 sm:mx-auto relative overflow-hidden">
            <Image
              className="object-cover absolute"
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 700px) 700px, 100vw"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row justify-center items-center">
        <div className="p-4 text-lg sm:w-1/2">
          <p>{project.text}</p>
        </div>
        <div className="p-6 my-2">
          <h1 className="text-orange-500 font-semibold text-6xl">
            {project.title}
          </h1>
          {project.url && (
            <div className="bg-orange-500 opacity-85 px-4 py-2 rounded-md my-4 w-fit ">
              <Link href={project.url}>Ir a la web</Link>
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="my-2 flex flex-col gap-2 items-center">
          {project.photos.map((e, idx) => {
            return (
              <Image
                src={e}
                alt={project.title}
                key={idx}
                width={700}
                height={700}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Project;
