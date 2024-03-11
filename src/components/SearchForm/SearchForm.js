import React from "react";
import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({
  handleSearchResult,
  setLoading,
  setShowNothingFound,
}) => {
  const [searchField, setSearchField] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target) {
      console.log("wow i've been clicked");
    }
    if (searchField === "") {
      setInputError(true);
      return;
    } else {
      setShowNothingFound(false);
      setLoading(true);
      setInputError(false);
      handleSearchResult({ q: searchField });
      return;
    }
  };

  // const handleSpanError = inputError
  //   ? "search-form__error"
  //   : "search-form__error_inactive";

  return (
    <div>
      <main className="search-form__main">
        <input
          className="search-form__input"
          name="search-field"
          placeholder={inputError ? "Please enter a topic" : "Enter Topic"}
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
      </main>
    </div>
  );
};

export default SearchForm;
