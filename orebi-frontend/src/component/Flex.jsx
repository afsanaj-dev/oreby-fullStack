import React from "react";

const Flex = ({ children, className, catref }) => {
  return <div ref={catref} className={`flex ${className}`}>{children}</div>;
};

export default Flex;
