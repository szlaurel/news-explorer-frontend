import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

const SavedNews = ({ onSelectedCard }) => {
  console.log("savednews works");

  // for the saved news i need to be able to filter and i think map
  // through all the saved articles

  /* -------------------------------------------------------------------------- */
  /*                               what to do now?                              */
  /* -------------------------------------------------------------------------- */

  // this is where we left off at need to
  // fix the the styles for this to be pixel perfect
  // with the design

  return (
    <div className="saved-news">
      <div className="saved-news__header">
        <SavedNewsHeader />
      </div>
      <div className="saved-news__cards_container">
        <NewsCardList id={"saved-news-cards"} isSaved={true} />
      </div>
      <div>
        <Footer savedNewsPage={true} id={"saved-news__footer"} />
      </div>
    </div>
  );
};

export default SavedNews;
