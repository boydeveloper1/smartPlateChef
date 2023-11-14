import React from "react";

import "./loading-spinner.styles.css";

const LoadingSpinner = (props) => {
  return (
    <div className="loader">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
