import React from "react";
import SectionTitle from "./SectionTitle";
import BlogPostCard from "./BlogPostCard";
import { portfolioData } from "@/data/portfolioData";

const PortfolioSection = () => {
  return (
    <section
      id="trabajo"
      className="bg-gray-200 py-4"
    >
      <SectionTitle>Nuestro trabajo</SectionTitle>
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
        {portfolioData.map((e) => {
          return (
            <BlogPostCard
              key={e.id}
              title={e.title}
              image={e.image}
              slug={e.slug}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;
