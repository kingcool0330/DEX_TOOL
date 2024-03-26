import React from "react";

const LoadingButton = ({ loadingFlag, loadingElement, text, style }) => {
  return (
    <div style={style}>
      {!loadingFlag && <div>{text}</div>}
      {loadingFlag && <div className="loading">{loadingElement}</div>}
    </div>
  );
};

export default LoadingButton;
