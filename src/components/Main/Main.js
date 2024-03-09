import "./Main.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import homeLogOutButton from "../../images/homelogout.svg";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import SearchResults from "../SearchResults/SearchResults";
import hamburgerButton from "../../images/hamburger-button.svg";

const Main = ({
  onLoginModal,
  handleSearchResult,
  searchResults,
  searchTrue,
  setLoading,
  cardsToShow,
  setCardsToShow,
  setShowNothingFound,
}) => {
  const [searchField, setSearchField] = useState("");

  return (
    <main className="main">
      <Header
        onLoginModal={onLoginModal}
        logOutButton={homeLogOutButton}
        menuButton={hamburgerButton}
      />
      <section className="main-container">
        <h1 className="main__title">What's going on in the world?</h1>
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
};

export default Main;
