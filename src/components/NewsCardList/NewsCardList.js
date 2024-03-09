import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { tempCardInfo } from "../../utils/constants";

const NewsCardList = ({ id, isSaved }) => {
  const repeatSameCard = tempCardInfo.slice(0, 8).map((tempCard, index) => {
    return (
      <NewsCard key={index} searchResults={tempCard} tempSavedCard={true} />
    );
  });

  // console.log(tempCardInfo);

  return (
    <div className="news-card-list" id={id}>
      <section className="news-card-list__container">
        {repeatSameCard}
        {/* <NewsCard isSaved={isSaved} /> */}
      </section>
    </div>
  );
};

export default NewsCardList;
