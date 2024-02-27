import React from "react";
import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ handleSearchResult, setLoading }) => {
  const [searchField, setSearchField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    handleSearchResult({ q: searchField });
  };

  return (
    <div className="search-form__container">
      <input
        className="search-form__input"
        name="search-field"
        placeholder="Enter topic"
        type="search"
        id="searchField"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <button className="search-form__submit-button" onMouseDown={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
