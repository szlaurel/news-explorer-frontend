import React from "react";
import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";

const SearchResults = () => {
  return (
    <div className="search-results">
      <div className="search-results__title-container">
        <div className="search-results__title">Search Results</div>
      </div>
      <div className="search-results__container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className="search-results__button-container">
        <button className="search-results__button">Show More</button>
      </div>
    </div>
  );
};

export default SearchResults;
