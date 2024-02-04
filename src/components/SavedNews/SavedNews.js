import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";

const SavedNews = () => {
  console.log("savednews works");

  // for the saved news i need to be able to filter and i think map
  // through all the saved articles

  return (
    <div className="saved-news-container">
      <div className="saved-news__header">
        <SavedNewsHeader />
      </div>
      <div className="saved-news-cards__container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default SavedNews;
