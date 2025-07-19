import React from "react";
import BasicLoader from "./BasicLoader";

const FullPageLoader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <BasicLoader />
    </div>
  );
};

export default FullPageLoader;
