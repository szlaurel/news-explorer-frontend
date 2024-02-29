import React from "react";
import "./NewsCard.css";
import tempImage from "../../images/tempcardimage.svg";
import trashDelete from "../../images/activetrash.svg";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const NewsCard = ({ isSaved, searchResults, onCardLike, onSelectedCard }) => {
  // temporary user usestate to see if certain things work
  // change the signedIn state value here to check for certain
  // functionalties that only work when signed in
  // VVVVVV
  let userId = true;
  const [signedIn, setSignedIn] = useState(true);
  const [changeHoverValue, setChangeHoverValue] = useState(
    "news-card-signin__popup_inactive"
  );

  const [isDisabled, setIsDisabled] = useState(false);

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
    const dates = new Date(searchResults?.publishedAt);
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

  // this function should come from the app and be passed down because of the api calls

  // const handleLikeClick = () => {
  //   // code for handling the like button functionality
  //   // goes here
  //   // console.log("click");
  //   if (isLike === false) {
  //     setLike(true);
  //   } else if (isLike === true) {
  //     setLike(false);
  //   }
  //   return;
  // };

  // const signedInClassChange = !signedIn
  //   ? "news-card-signin__popup_inactive"
  //   : "news-card-signin__popup";

  function signInHover() {
    if (userId !== true) {
      setChangeHoverValue("news-card-signin__popup");
      setIsDisabled(true);
      return;
      // return console.log("this works again");
    } else return;
  }

  function leaveHover() {
    setChangeHoverValue("news-card-signin__popup_inactive");
  }
  // function signInHover() {
  //   return console.log("this works hello from the otherside");
  // }

  // onMouseOver needs to check if the user is signed in
  // if the user is signed in the sign in to save hover doesn't appear and the class gets switched to inactive
  // else if the user is not sigend in the sign in to save hover appears and the class changes to active

  /* -------------------------------------------------------------------------- */
  /*                       like and dislike functionality                       */
  /* -------------------------------------------------------------------------- */

  // enable this when done with the styles for the like button

  const handleLikeClick = () => {
    onCardLike({ isLiked: isLike });
    if (isLike === false) {
      setLike(true);
    } else if (isLike === true) {
      setLike(false);
    }
  };

  const newsCardLikeButtonClass = `news-card-image__unsave-button ${
    isLike ? "news-card-image__save-button" : "news-card-image__unsave-button"
  }`;

  const newsCardLikeButtonClassHidden = `news-card-image__unsave-button ${
    !userId
      ? "news-card-image__unsave-button"
      : "news-card-image__unsave-button_hidden"
  } `;

  return (
    <div className="news-card__first-container">
      <div className="news-card__container">
        <div className="news-card-image__container">
          <div className="news-card-image__info">
            <img
              src={searchResults?.urlToImage}
              alt="image"
              className="news-card__image"
              onClick={() => onSelectedCard(searchResults)}
            />
            {isSaved ? (
              <div className="news-card-image__category-container">
                <div
                  className="news-card-image__category"
                  onClick={() => onSelectedCard(searchResults)}
                >
                  {tempCategory}
                </div>
                <button className="news-card-image__remove-button"></button>
              </div>
            ) : (
              <div className="news-card-image__category-container">
                <button
                  className={
                    userId
                      ? newsCardLikeButtonClass
                      : newsCardLikeButtonClassHidden
                  }
                  onClick={handleLikeClick}
                  onMouseOver={signInHover}
                  onMouseLeave={leaveHover}
                  disabled={isDisabled}
                  type="button"
                ></button>
                <button className={changeHoverValue}>
                  Sign in to save articles
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="news-card-info__container">
          <div className="news-card__date">{formattedDates()}</div>
          <div className="news-card__title">{searchResults?.title}</div>
          <div className="news-card__paragraph">
            {searchResults?.description}
          </div>
          <div className="news-card__site">{searchResults?.source?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
