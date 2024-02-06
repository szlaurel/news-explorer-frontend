import React from "react";
import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";

const SearchResults = () => {
  return (
    <div className="search-results">
      <section className="search-results__title-container">
        <div className="search-results__title">Search Results</div>
      </section>
      <section className="search-results__container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
      <section className="search-results__button-container">
        <button className="search-results__button">Show More</button>
      </section>
    </div>
  );
};

export default SearchResults;
