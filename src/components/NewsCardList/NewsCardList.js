import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({ id, isSaved }) => {
  return (
    <div className="news-card-list" id={id}>
      <section className="news-card-list__container">
        <NewsCard isSaved={isSaved} />
        <NewsCard isSaved={isSaved} />
        <NewsCard isSaved={isSaved} />
        <NewsCard isSaved={isSaved} />
        <NewsCard isSaved={isSaved} />
      </section>
    </div>
  );
};

export default NewsCardList;
