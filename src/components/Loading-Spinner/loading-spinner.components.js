import React from "react";
import "./loading-spinner.styles.css";

import DotLoader from "react-spinners/DotLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const LoadingSpinner = ({ heading, subHeading }) => {
  return (
    <div className="loading-container">
      <DotLoader
        color={"white"}
        loading
        cssOverride={override}
        size={60}
        speedMultiplier={2}
      />
      <p className="loading-text">{heading}</p>
      <p className="loading-text2"> {subHeading}</p>
    </div>
  );
};

export default LoadingSpinner;
