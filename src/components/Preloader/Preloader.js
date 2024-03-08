import React from "react";
import "./Preloader.css";
import nothingFoundIcon from "../../images/notfoundicon.svg";

const Preloader = ({ showNothingFound }) => {
  return showNothingFound ? (
    <div className="preloader-error_container">
      <img
        src={nothingFoundIcon}
        className="preloader-error-icon"
        alt={nothingFoundIcon}
      />
      <h2 className="preloader-error_title">Nothing Found</h2>
      <p className="preloader-error_paragraph">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  ) : (
    <div className="circle-preloader_container">
      <div className="circle-preloader"></div>
      <h3 className="circle-preloader_title">Searching for news...</h3>
    </div>
  );
};

export default Preloader;
