import React, { FunctionComponent, PropsWithChildren } from "react";

const SectionTitle: FunctionComponent<
  PropsWithChildren & { className?: string }
> = ({ children, className }) => {
  return (
    <h2 className={`text-4xl mb-2 mx-2 ${className && className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
