import React from "react";
import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

const SearchResults = ({
  searchResults,
  searchTrue,
  cardsToShow,
  setCardsToShow,
  setLoading,
}) => {
  // this is where it still shows up as an array
  // the second we pass it to newscard when mapping it
  // it becomes an object

  // console.log(searchResults);

  const [showMoreButton, setShowMoreButton] = useState(true);

  const filterCardInformation = searchResults.filter((searchResult) => {
    return searchResult.urlToImage !== null && searchResult.source.id !== null;
  });

  // console.log(filterCardInformation);

  const showSearchResults = searchTrue
    ? "search-results"
    : "search-results__inactive";

  // console.log(searchTrue);

  const handleShowMore = (e) => {
    e.preventDefault();
    // setLoading(true);
    setCardsToShow(6);
    setShowMoreButton(false);
  };

  // console.log(searchTrue);

  // console.log(filterCardInformation);

  return (
    <div className={showSearchResults}>
      <section className="search-results__title-container">
        <div className="search-results__title">Search Results</div>
      </section>
      <section className="search-results__container">
        {filterCardInformation
          .slice(0, cardsToShow)
          .map((searchResult, index) => {
            return <NewsCard key={index} searchResults={searchResult} />;
          })}
      </section>
      <section className="search-results__button-container">
        <button
          className={
            showMoreButton
              ? "search-results__button"
              : "search-results__button_inactive"
          }
          onClick={handleShowMore}
        >
          Show More
        </button>
      </section>
    </div>
  );
};

export default SearchResults;
