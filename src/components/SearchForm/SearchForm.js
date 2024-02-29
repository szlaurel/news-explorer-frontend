import React from "react";
import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ handleSearchResult, setLoading }) => {
  const [searchField, setSearchField] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchField === "") {
      setInputError(true);
      return;
    } else {
      setLoading(true);
      handleSearchResult({ q: searchField });
      return;
    }
  };

  const handleSpanError = inputError
    ? "search-form__error"
    : "search-form__error_inactive";

  return (
    <div>
      <div className="search-form__container">
        <input
          className="search-form__input"
          name="search-field"
          placeholder="Enter topic"
          type="search"
          id="searchField"
          value={searchField}
          min="1"
          onChange={(e) => setSearchField(e.target.value)}
        />
        <button
          className="search-form__submit-button"
          onMouseDown={handleSubmit}
        >
          Search
        </button>
      </div>
      <span className={handleSpanError}>Please enter a keyword</span>
    </div>
  );
};

export default SearchForm;
