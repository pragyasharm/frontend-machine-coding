import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressContainer = () => {
  return (
    <div>
      Progress Bar
      <ProgressBar progress={50} />
    </div>
  );
};

export default ProgressContainer;
