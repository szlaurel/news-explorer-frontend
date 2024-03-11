import React, { useState } from 'react';
import './SearchResults.css';
import NewsCard from '../NewsCard/NewsCard';
// import Preloader from "../Preloader/Preloader";

function SearchResults({
  searchResults,
  searchTrue,
  cardsToShow,
  setCardsToShow,
  showFailMessage,
  onSelectedCard,
  onCardLike,
}) {
  // this is where it still shows up as an array
  // the second we pass it to newscard when mapping it
  // it becomes an object

  // console.log(searchResults);

  const [showMoreButton, setShowMoreButton] = useState(true);

  // temporary failure

  // need to defensively code against this either through making the filter card results not return
  // anything if the final filterCard information array is 0 or something else?
  // type "cnc machining" and search it up and you'll see what i mean

  const filterCardInformation = searchResults.filter(
    (searchResult) =>
      searchResult.urlToImage !== null && searchResult.urlToImage !== ''
  );

  console.log(filterCardInformation);

  const showSearchResults = searchTrue
    ? 'search-results'
    : 'search-results__inactive';

  // console.log(searchTrue);

  /* -------------------------------------------------------------------------- */
  /*                           handle show more button                          */
  /* -------------------------------------------------------------------------- */

  const handleShowMore = (e) => {
    e.preventDefault();
    // setLoading(true);
    setCardsToShow(6);
    setShowMoreButton(false);
  };

  const hideButton = showMoreButton
    ? 'search-results__button'
    : 'search-results__button_inactive';

  // console.log(searchTrue);

  // need to find a way to show the information even
  // if the information returns "type cnc machining"
  // console.log(filterCardInformation);

  // still need to make the button disappear when there are less than
  // 3 cards in the array

  const showCardResults = filterCardInformation
    .slice(0, cardsToShow)
    .map((searchResult, index) => (
      <NewsCard
        key={index}
        searchResults={searchResult}
        onSelectedCard={onSelectedCard}
        onCardLike={onCardLike}
      />
    ));

  const searchResultFailMessage =
    'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.';

  // console.log(showCardResults);

  return (
    <div className={showSearchResults}>
      <section className="search-results__title-container">
        <h3 className="search-results__title">Search results</h3>
      </section>
      <section className="search-results__container">
        {showFailMessage ? (
          <span className="search-results__error">
            {searchResultFailMessage}
          </span>
        ) : (
          showCardResults
        )}
      </section>
      <div className="search-results__button-container">
        <button className={hideButton} onClick={handleShowMore} type="button">
          Show more
        </button>
      </div>
    </div>
  );
}

export default SearchResults;

/* -------------------------------------------------------------------------- */
/*                        old return code just in case                        */
/* -------------------------------------------------------------------------- */
// before implementation of the preloader

// return (
//   <div className={showSearchResults}>
//     <section className="search-results__title-container">
//       <div className="search-results__title">Search Results</div>
//     </section>
//     <section className="search-results__container">
//       {showFailMessage ? (
//         <span className="search-results__error">
//           {searchResultFailMessage}
//         </span>
//       ) : (
//         showCardResults
//       )}
//     </section>
//     <section className="search-results__button-container">
//       <button className={hideButton} onClick={handleShowMore}>
//         Show More
//       </button>
//     </section>
//   </div>
// );
