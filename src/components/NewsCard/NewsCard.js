import React from "react";
import "./NewsCard.css";
import tempImage from "../../images/tempcardimage.svg";
import trashDelete from "../../images/activetrash.svg";
import { useState } from "react";

const NewsCard = ({ isSaved, searchResults, onCardLike }) => {
  /* -------------------------------------------------------------------------- */
  /*                              temp information                              */
  /* -------------------------------------------------------------------------- */

  const tempDate = "09/07/2024";
  const tempTitle = "Everyone Needs a Special 'Sit Spot' in Nature";
  const tempSite = "National Graphic";
  const tempParagraph = `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`;
  const tempCategory = "Nature";

  /* -------------------------------------------------------------------------- */
  /*                               filter results                               */
  /* -------------------------------------------------------------------------- */

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // to see if the information is being passed properly to the newscard component
  // console.log(searchResults);

  const formattedDates = () => {
    const dates = new Date(searchResults.publishedAt);
    const month = dates.toLocaleString("en-US", { month: "long" });
    const date = dates.getDate();
    const year = dates.getFullYear();

    const formatDates = `${month} ${date}, ${year}`;

    return formatDates;
  };
  // console.log(formattedDates());

  /* -------------------------------------------------------------------------- */
  /*                                  useStates                                 */
  /* -------------------------------------------------------------------------- */

  const [isLike, setLike] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                              handle functions                              */
  /* -------------------------------------------------------------------------- */

  const handleLikeClick = () => {
    // code for handling the like button functionality
    // goes here
    console.log("click");
    if (isLike === false) {
      setLike(true);
    } else if (isLike === true) {
      setLike(false);
    }
    return;
  };

  return (
    <div className="news-card__first-container">
      <div className="news-card__container">
        <div className="news-card-image__container">
          <div className="news-card-image__info">
            <img
              src={searchResults.urlToImage}
              alt="image"
              className="news-card__image"
            />
            {isSaved ? (
              <div className="news-card-image__category-container">
                <div className="news-card-image__category">{tempCategory}</div>
                <button className="news-card-image__remove-button"></button>
              </div>
            ) : (
              <div className="news-card-image__category-container">
                <button
                  className={
                    isLike
                      ? "news-card-image__save-button"
                      : "news-card-image__unsave-button"
                  }
                  onClick={handleLikeClick}
                ></button>
              </div>
            )}
          </div>
        </div>
        <div className="news-card-info__container">
          <div className="news-card__date">{formattedDates()}</div>
          <div className="news-card__title">{searchResults.title}</div>
          <div className="news-card__paragraph">
            {searchResults.description}
          </div>
          <div className="news-card__site">{searchResults.source?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
