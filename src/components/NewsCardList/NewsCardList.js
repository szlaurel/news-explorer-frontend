import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({ id }) => {
  return (
    <div className="news-card-list" id={id}>
      <div className="news-card-list__container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default NewsCardList;
