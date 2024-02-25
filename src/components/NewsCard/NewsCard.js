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

  console.log(searchResults);

  const filterSearchDescriptions = searchResults.map(
    (searchResult) => searchResult.description
  );

  // console.log(filterSearchDescriptions)

  const filterImagesAndMap = searchResults
    .filter(
      (searchResult) =>
        searchResult.urlToImage !== null &&
        searchResult.urlToImage !== undefined
    )
    .map((searchResult) => {
      return searchResult.urlToImage;
    });

  // console.log(filterImagesAndMap);

  const filterSourceName = searchResults
    .filter(
      (searchResult) =>
        searchResult.source?.name !== null &&
        searchResult.source?.name !== undefined
    )
    .map((searchResult) => {
      return searchResult.source?.name;
    });

  // console.log(filterSourceName);

  const filterTitles = searchResults
    .filter(
      (searchResult) =>
        searchResult.title !== null && searchResult.title !== undefined
    )
    .map((searchResult) => {
      return searchResult.title;
    });

  console.log(filterTitles);

  // ill need to change the publication date to match the way it looks on figma

  const filterPublishDates = searchResults
    .filter(
      (searchResult) =>
        searchResult.publishedAt !== null &&
        searchResult.publishedAt !== undefined
    )
    .map((searchResult) => {
      return searchResult.publishedAt;
    });

  console.log(filterPublishDates);

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
            <img src={tempImage} alt="image" className="news-card__image" />
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
          <div className="news-card__date">{tempDate}</div>
          <div className="news-card__title">{tempTitle}</div>
          <div className="news-card__paragraph">{tempParagraph}</div>
          <div className="news-card__site">{tempSite}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
