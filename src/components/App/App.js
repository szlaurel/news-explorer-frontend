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

function App() {
  /* -------------------------------------------------------------------------- */
  /*                           useState and useHistory                          */
  /* -------------------------------------------------------------------------- */

  const [activeModal, setActiveModal] = useState("");

  // This is needed in order to paste the search results in the field
  // this will also be needed later
  const [searchResults, setSearchResults] = useState([]);
  const [articles, setArticles] = useState([]);

  const handleSearchResult = (values) => {
    const searchResult = values.q;

    api
      .getItems({ q: searchResult, apiKey: newsAPIkey })
      .then((res) => {
        setSearchResults(res.articles);
        // we pushed the res to set results and console.log it down below
      })
      .catch((err) => {
        console.log(`${err} an error occured`);
      });
  };

  // console.log(searchResults);

  // and then once i get the results from the search bar
  // i need to pass the info from the set results to the cards

  // console.log(searchResults.articles);
  // console.log(searchResults.articles[0].author);

  /* -------------------------------------------------------------------------- */
  /*                             handle open modals                             */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                            useEffect and useRef                            */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                   modals                                   */
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

  // need to protect the saved-news route

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Main
            onLoginModal={handleLoginModal}
            handleSearchResult={handleSearchResult}
            searchResults={searchResults}
          />
        </Route>
        {/* <Route path="/profile">test to see if Profile</Route> */}
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
