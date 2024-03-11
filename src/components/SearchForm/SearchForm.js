import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ handleSearchResult, setLoading, setShowNothingFound }) {
  const [searchField, setSearchField] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target) {
      console.log("wow i've been clicked");
    }
    if (searchField === '') {
      setInputError(true);
    } else {
      setShowNothingFound(false);
      setLoading(true);
      setInputError(false);
      handleSearchResult({ q: searchField });
    }
  };

  // const handleSpanError = inputError
  //   ? "search-form__error"
  //   : "search-form__error_inactive";

  return (
    <div>
      <div className="search-form__main">
        <input
          className="search-form__input"
          name="search-field"
          placeholder={inputError ? 'Please enter a topic' : 'Enter Topic'}
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
    </div>
  );
}

export default SearchForm;
