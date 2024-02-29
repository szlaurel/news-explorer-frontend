import React from "react";
import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

const SearchResults = ({
  searchResults,
  searchTrue,
  cardsToShow,
  setCardsToShow,
  showFailMessage,
  setLoading,
  onSelectedCard,
  onCardLike,
}) => {
  // this is where it still shows up as an array
  // the second we pass it to newscard when mapping it
  // it becomes an object

  // console.log(searchResults);

  const [showMoreButton, setShowMoreButton] = useState(true);

  // temporary failure

  const filterCardInformation = searchResults.filter((searchResult) => {
    return (
      searchResult.urlToImage !== null &&
      searchResult.source.id !== null &&
      searchResult.urlToImage !== ""
    );
  });

  // console.log(filterCardInformation);

  const showSearchResults = searchTrue
    ? "search-results"
    : "search-results__inactive";

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
    ? "search-results__button"
    : "search-results__button_inactive";

  // console.log(searchTrue);

  // console.log(filterCardInformation);

  // still need to make the button disappear when there are less than
  // 3 cards in the array

  const showCardResults = filterCardInformation
    .slice(0, cardsToShow)
    .map((searchResult, index) => {
      return (
        <NewsCard
          key={index}
          searchResults={searchResult}
          onSelectedCard={onSelectedCard}
          onCardLike={onCardLike}
        />
      );
    });

  let searchResultFailMessage =
    "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.";

  return (
    <div className={showSearchResults}>
      <section className="search-results__title-container">
        <div className="search-results__title">Search Results</div>
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
      <section className="search-results__button-container">
        <button className={hideButton} onClick={handleShowMore}>
          Show More
        </button>
      </section>
    </div>
  );
};

export default SearchResults;

/* -------------------------------------------------------------------------- */
/*                        old return code just in case                        */
/* -------------------------------------------------------------------------- */

// return (
//   <div className={showSearchResults}>
//     <section className="search-results__title-container">
//       <div className="search-results__title">Search Results</div>
//     </section>
//     <section className="search-results__container">
//       {filterCardInformation
//         .slice(0, cardsToShow)
//         .map((searchResult, index) => {
//           return <NewsCard key={index} searchResults={searchResult} />;
//         })}
//     </section>
//     <section className="search-results__button-container">
//       <button className={hideButton} onClick={handleShowMore}>
//         Show More
//       </button>
//     </section>
//   </div>
// );
