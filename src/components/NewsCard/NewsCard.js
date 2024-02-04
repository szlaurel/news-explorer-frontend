import React from "react";
import "./NewsCard.css";
import tempImage from "../../images/tempcardimage.svg";
import trashDelete from "../../images/activetrash.svg";

const NewsCard = () => {
  const tempDate = "09/07/2024";
  const tempTitle = "Everyone Needs a Special 'Sit Spot' in Nature";
  const tempSite = "National Graphic";
  const tempParagraph = `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`;
  const tempCategory = "Nature";

  return (
    <div className="news-card__container">
      <div className="news-card-image__container">
        <div className="news-card-image__info">
          <img src={tempImage} alt="image" className="news-card__image" />
          <div className="news-card-image__category-container">
            <div className="news-card-image__category">{tempCategory}</div>
            <button className="news-card-image__remove-button"></button>
          </div>
        </div>
      </div>
      <div className="news-card-info__container">
        <div className="news-card__date">{tempDate}</div>
        <div className="news-card__title">{tempTitle}</div>
        <div className="news-card__paragraph">{tempParagraph}</div>
        <div className="news-card__site">{tempSite}</div>
      </div>
    </div>
  );
};

export default NewsCard;
