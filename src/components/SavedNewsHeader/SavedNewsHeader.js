import React from "react";
import "./SavedNewsHeader.css";
import Header from "../Header/Header";

const SavedNewsHeader = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 temp values                                */
  /* -------------------------------------------------------------------------- */

  const username = "Elise";
  const articles = 5;
  const keyWords1 = "Nature";
  const keyWords2 = "Yellowstone";
  const otherKeywords = 2;

  return (
    <div className="saved-news_header">
      <div>
        <Header id={"saved-news_header"} />
      </div>
      <div className="saved-news_container">
        <div className="saved-news_title">Saved Articles</div>
        <div className="saved-news_paragraph">
          {`${username}, you have ${articles} saved articles`}
        </div>
        <div className="saved-news_keywords__container">
          <div className="saved-news_keywords__title">By keywords: </div>
          <div className="saved-news_keywords">
            {`${keyWords1}, ${keyWords2}, ${otherKeywords} other`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedNewsHeader;
