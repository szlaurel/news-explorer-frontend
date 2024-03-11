import React from 'react';
import './NewsCard.css';
import { useState } from 'react';
import tempDogPhoto from '../../images/tempcardimage.svg';

// need to remove all the temp values when we pass this stage and go on to authorization
// and authentication

const NewsCard = ({
  isSaved,
  searchResults,
  onCardLike,
  onSelectedCard,
  tempSavedCard,
}) => {
  // temporary user usestate to see if certain things work
  // change the signedIn state value here to check for certain
  // functionalties that only work when signed in
  // VVVVVV
  const userId = false;
  const [changeHoverValue, setChangeHoverValue] = useState(
    'news-card-signin__popup_inactive'
  );

  const [changeRemoveHover, setChangeRemoveHover] = useState(
    'news-card-image__remove-button_inactive' || false
  );

  const [popUpValue, setPopUpValue] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                              temp information                              */
  /* -------------------------------------------------------------------------- */

  const tempCategory = 'Nature';

  /* -------------------------------------------------------------------------- */
  /*                               filter results                               */
  /* -------------------------------------------------------------------------- */

  // to see if the information is being passed properly to the newscard component
  // console.log(searchResults);

  // const tempFormattedDate = () => {
  //   let date = 4;
  //   let year = 2020;
  //   let month = "November";

  //   const tempFormatDate = `${month} ${date}, ${year}`;

  //   return tempFormatDate;
  // };

  const formattedDates = () => {
    const dates = new Date(searchResults?.publishedAt);
    const month = dates.toLocaleString('en-US', { month: 'long' });
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

  // this might need to be in the app.js

  // function handleDeleteCard () {

  // }

  // const signedInClassChange = !signedIn
  //   ? "news-card-signin__popup_inactive"
  //   : "news-card-signin__popup";

  function signInHover() {
    if (userId !== true) {
      setChangeHoverValue('news-card-signin__popup');
      setIsDisabled(true);
      return;
      // return console.log("this works again");
    } else return;
  }

  function leaveHover() {
    setChangeHoverValue('news-card-signin__popup_inactive');
  }

  function removeButtonHover() {
    if (userId !== true) {
      setChangeRemoveHover('news-card-image__remove-button_active');
      setPopUpValue(true);
      return;
    } else return;
  }

  function leaveRemoveHover() {
    setChangeRemoveHover('news-card-image__remove-button_inactive');
    setPopUpValue(false);
  }

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
    isLike ? 'news-card-image__save-button' : 'news-card-image__unsave-button'
  }`;

  const newsCardLikeButtonClassHidden = `news-card-image__unsave-button ${
    !userId
      ? 'news-card-image__unsave-button'
      : 'news-card-image__unsave-button_hidden'
  } `;

  return (
    <div className="news-card">
      <div className="news-card__container">
        <div className="news-card__image_container">
          <div className="news-card__image_info">
            <img
              src={searchResults?.urlToImage || tempDogPhoto}
              alt={searchResults?.urlToImage || 'a picture of a dog'}
              className="news-card__image"
              onClick={() => onSelectedCard(searchResults)}
            />
            {isSaved || tempSavedCard ? (
              <div className="news-card__image-category_container">
                <div
                  className="news-card-image__category"
                  onClick={() => onSelectedCard(searchResults)}
                >
                  {tempCategory}
                </div>
                <div
                  className={
                    popUpValue
                      ? 'news-card-remove__popup'
                      : 'news-card-remove__popup_inactive'
                  }
                >
                  Remove from saved
                </div>
                <button
                  className={changeRemoveHover}
                  onMouseOver={removeButtonHover}
                  onMouseLeave={leaveRemoveHover}
                ></button>
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
          <time className="news-card__date">{formattedDates()}</time>
          <h2 className="news-card__title">{searchResults?.title}</h2>
          <p className="news-card__paragraph">{searchResults?.description}</p>
          <cite className="news-card__site">
            {searchResults?.source?.name || 'Treehugger'}
          </cite>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

/* -------------------------------------------------------------------------- */
/*                        code before semantic changes                        */
/* -------------------------------------------------------------------------- */
