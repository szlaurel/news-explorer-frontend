import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ handleSearchResult, setLoading, setShowNothingFound }) {
  const [searchField, setSearchField] = useState('');
  const [inputError, setInputError] = useState(false);
  const [activeButtonState, setActiveButtonState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchField === '') {
      setInputError(true);
      setActiveButtonState(true);
    } else {
      setShowNothingFound(false);
      setLoading(true);
      setInputError(false);
      setActiveButtonState(true);
      handleSearchResult({ q: searchField });
    }
  };

  // const handleClickState = (e) => {
  //   console.log(e);
  // };

  const handleMouseUp = () => {
    setActiveButtonState(false);
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
          className={`search-form__submit-button ${!activeButtonState ? '' : 'search-form__submit-button_active'}`}
          onMouseEnter={(e) => {
            e.target.classList.toggle('search-form__submit-button_hover');
          }}
          onMouseLeave={(e) => {
            e.target.classList.remove('search-form__submit-button_hover');
          }}
          onMouseDown={handleSubmit}
          onMouseUp={handleMouseUp}
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
