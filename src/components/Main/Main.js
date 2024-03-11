import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import homeLogOutButton from '../../images/homelogout.svg';
import SearchForm from '../SearchForm/SearchForm';
import hamburgerButton from '../../images/hamburger-button.svg';

function Main({
  onLoginModal,
  handleSearchResult,
  searchResults,
  searchTrue,
  setLoading,
  cardsToShow,
  setCardsToShow,
  setShowNothingFound,
}) {
  return (
    <main className="main">
      <Header
        onLoginModal={onLoginModal}
        logOutButton={homeLogOutButton}
        menuButton={hamburgerButton}
      />
      <section className="main__container">
        <h1 className="main__title">What&apos;s going on in the world?</h1>
        <p className="main__paragraph">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm
          handleSearchResult={handleSearchResult}
          setLoading={setLoading}
          setShowNothingFound={setShowNothingFound}
        />
      </section>
    </main>
  );
}

export default Main;
