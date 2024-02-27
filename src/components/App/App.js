import "./App.css";
import "normalize.css/normalize.css";
import Header from "../../components/Header/Header";
// import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";
import { tempNewsCardData } from "../../utils/constants";
import { baseUrl } from "../../utils/newsApi";
import { api } from "../../utils/newsApi";
import { newsAPIkey } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function App() {
  /* -------------------------------------------------------------------------- */
  /*                           useState and useHistory                          */
  /* -------------------------------------------------------------------------- */

  const [activeModal, setActiveModal] = useState("");

  // This is needed in order to paste the search results in the field
  // this will also be needed later
  const [searchResults, setSearchResults] = useState([]);
  const [searchTrue, setSearchTrue] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

  const handleSearchResult = (values) => {
    const searchResult = values.q;
    const pageSize = 100;
    const lastWeekDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const todaysDate = new Date(Date.now());
    api
      .getItems({
        q: searchResult,
        pageSize: pageSize,
        from: lastWeekDate,
        to: todaysDate,
      })
      .then((res) => {
        setSearchResults(res.articles);
        setSearchTrue(true);
        // we pushed the res to set results and console.log it down below
      })
      .catch((err) => {
        console.log(`${err} an error occured`);
      })
      .finally(() => {
        setLoading(false);
        setCardsToShow(3);
      });
  };

  // console.log(searchResults);

  // and then once i get the results from the search bar
  // i need to pass the info from the set results to the cards

  /* -------------------------------------------------------------------------- */
  /*                        handle open and close modals                        */
  /* -------------------------------------------------------------------------- */
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
    console.log("the open register button works");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  /* -------------------------------------------------------------------------- */
  /*                            useEffect and useRef                            */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                   modals                                   */
  /* -------------------------------------------------------------------------- */

  // need to protect the saved-news route

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {loading ? (
            <Preloader />
          ) : (
            <Main
              onLoginModal={handleLoginModal}
              handleSearchResult={handleSearchResult}
              searchResults={searchResults}
              searchTrue={searchTrue}
              setLoading={setLoading}
              cardsToShow={cardsToShow}
              setCardsToShow={setCardsToShow}
            />
          )}
        </Route>
        <Route exact path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
      {/* <Footer /> */}
      {activeModal === "login" && (
        <LoginModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "login"}
          alternateModalOpen={handleRegisterModal}
        ></LoginModal>
      )}
      {activeModal === "register" && (
        <RegisterModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "register"}
          alternateModalOpen={handleLoginModal}
        ></RegisterModal>
      )}
    </div>
  );
}

export default App;
