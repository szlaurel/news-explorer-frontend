import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { tempCardInfo } from '../../utils/constants';

// isSaved component is part of the newcard list
// its part of passing a component

function NewsCardList({ id }) {
  const repeatSameCard = tempCardInfo
    .slice(0, 8)
    .map((tempCard, index) => (
      <NewsCard key={index} searchResults={tempCard} tempSavedCard />
    ));

  // console.log(tempCardInfo);

  return (
    <div className="news-card-list" id={id}>
      <section className="news-card-list__container">
        {repeatSameCard}
        {/* <NewsCard isSaved={isSaved} /> */}
      </section>
    </div>
  );
}

export default NewsCardList;
