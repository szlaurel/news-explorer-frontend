import React from "react";
import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";

const SearchResults = ({ searchResults }) => {
  //   console.log(searchResults);

  const filterSearchDescriptions = searchResults.map(
    (searchResult) => searchResult.description
  );

  //   console.log(filterSearchDescriptions);

  return (
    <div className="search-results">
      <section className="search-results__title-container">
        <div className="search-results__title">Search Results</div>
      </section>
      <section className="search-results__container">
        {/* this is where the filter and map array methods have to go for the newscard */}
        {/* also this is where i need to pass searchResults as a child component to the newscard and map through it */}
        <NewsCard searchResults={searchResults} />
      </section>
      <section className="search-results__button-container">
        <button className="search-results__button">Show More</button>
      </section>
    </div>
  );
};

export default SearchResults;
