import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPostCard = ({
  title,
  image,
  slug,
}: {
  title: string;
  image: string;
  slug: string;
}) => {
  return (
    <div className="p-4 sm:w-80">
      <Link
        href={`/project/${slug}`}
        className="group"
      >
        <div className="h-48 w-full mb-2 overflow-hidden relative">
          <Image
            className="object-cover object-center absolute"
            src={image}
            alt={`${title}_image`}
            fill
            sizes="(max-width: 500px) 400px, 700px"
          />
        </div>
        <h3 className="text-gray-700 font-semibold group-hover:text-orange-500">
          {title}
        </h3>
      </Link>
    </div>
  );
};

export default BlogPostCard;
