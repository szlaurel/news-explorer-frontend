import React from "react";
import "./Preloader.css";

const Preloader = ({ showNothingFound }) => {
  return showNothingFound ? (
    <h2 className="preloader-error">Nothing Found</h2>
  ) : (
    <div className="circle-preloader"></div>
  );
};

export default Preloader;
