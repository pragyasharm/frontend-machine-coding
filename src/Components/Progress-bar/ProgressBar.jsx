import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);
  return (
    <div className="border border-black">
      <div
        style={{
          backgroundColor: "green",
          color: animatedProgress < 5 ? "black" : "white",
          textAlign: "right",
          transform: `translateX(${animatedProgress - 100}%)`,
          transition: "0.5s ease-in",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
