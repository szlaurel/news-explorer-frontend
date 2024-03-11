import React, { useState } from 'react';
import './App.css';
import 'normalize.css/normalize.css';
// import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import SavedNews from '../SavedNews/SavedNews';
import { api } from '../../utils/newsApi';
import Preloader from '../Preloader/Preloader';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  /* -------------------------------------------------------------------------- */
  /*                           useState and useHistory                          */
  /* -------------------------------------------------------------------------- */

  const [activeModal, setActiveModal] = useState('');

  // This is needed in order to paste the search results in the field
  // this will also be needed later
  const [searchResults, setSearchResults] = useState([]);
  const [searchTrue, setSearchTrue] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [selectedCard, setSelectedCard] = useState({});
  // have to change the usestate value for show message to be false
  // but to test the error message for the search results container just switch
  // the value to be false and search for something
  const [showNothingFound, setShowNothingFound] = useState(false);

  console.log(selectedCard);

  /* -------------------------------------------------------------------------- */
  /*                            handle search results                           */
  /* -------------------------------------------------------------------------- */

  const handleSearchResult = (values) => {
    const searchResult = values.q;
    const pageSize = 100;
    const lastWeekDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const todaysDate = new Date(Date.now());
    api
      .getItems({
        q: searchResult,
        pageSize,
        from: lastWeekDate,
        to: todaysDate,
      })
      .then((res) => {
        if (res.totalResults === 0) {
          // console.log('oopsie daises');
          throw new Error('data was not found');
        }
        // im guessing if the results are true then you push the information
        // to local storage here when the request is sucessful
        // still need to ask on about this
        setSearchResults(res.articles);
        setSearchTrue(true);
        setCardsToShow(3);
        // we pushed the res to set results and console.log it down below
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setSearchTrue(true);
        // setShowFailureMessage(true);
        setShowNothingFound(true);
        setSearchResults([]);
        console.log(`${err} an error occured`);
      });
  };

  // console.log(searchResults);

  /* -------------------------------------------------------------------------- */
  /*             handle like card and remove like card functionality            */
  /* -------------------------------------------------------------------------- */

  const handleLikeClick = ({ isLiked }) => {
    // if there was a token it would get the token here from localstorage
    // and then you console.log it here

    // we just need to write code so that when the card save button gets clicked
    // it sends the post request through
    // but if the card is liked and you click on it, it removes the like filled icon
    // and replaces it with the unfilled icon and sends
    // a delete request through

    isLiked
      ? api
          .removeCardLike()
          .then((updatedCard) => {
            console.log(updatedCard);
          })
          .catch((err) => console.log(err, 'an error occurred'))
      : api
          .addCardLike()
          .then((updatedCard) => {
            console.log(updatedCard);
          })
          .catch((err) => console.log(err, 'an error occurred'));
  };

  /* -------------------------------------------------------------------------- */
  /*                        handle open and close modals                        */
  /* -------------------------------------------------------------------------- */
  const handleCreateModal = () => {
    setActiveModal('create');
  };

  const handleLoginModal = () => {
    setActiveModal('login');
  };

  const handleRegisterModal = () => {
    setActiveModal('register');
    console.log('the open register button works');
  };

  const handleCloseModal = () => {
    setActiveModal('');
  };

  /* -------------------------------------------------------------------------- */
  /*                            useEffect and useRef                            */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                   modals                                   */
  /* -------------------------------------------------------------------------- */

  // console.log(selectedCard);
  // console.log(searchResults);

  return (
    <div className="app__main">
      <Switch>
        <Route exact path="/">
          <Main
            onLoginModal={handleLoginModal}
            handleSearchResult={handleSearchResult}
            setLoading={setLoading}
            setShowNothingFound={setShowNothingFound}
          />
          {loading ? (
            <Preloader showNothingFound={showNothingFound} />
          ) : (
            <SearchResults
              searchResults={searchResults}
              showNothingFound={showNothingFound}
              searchTrue={searchTrue}
              cardsToShow={cardsToShow}
              setCardsToShow={setCardsToShow}
              setLoading={setLoading}
              loading={loading}
              // showFailMessage={showFailureMessage}
              onSelectedCard={setSelectedCard}
              onCardLike={handleLikeClick}
            />
          )}

          <Footer />
          {/* still need to make a protected route for saved-news */}
        </Route>
        <Route exact path="/saved-news">
          <SavedNews onSelectedCard={setSelectedCard} />
        </Route>
      </Switch>
      {activeModal === 'login' && (
        <LoginModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === 'login'}
          alternateModalOpen={handleRegisterModal}
        />
      )}
      {activeModal === 'register' && (
        <RegisterModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === 'register'}
          alternateModalOpen={handleLoginModal}
        />
      )}
    </div>
  );
}

export default App;

/* -------------------------------------------------------------------------- */
/*                be sure to get rid of this code if not needed               */
/* -------------------------------------------------------------------------- */

// return (
//   <div>
//     <Switch>
//       <Route exact path="/">
//         {loading ? (
//           <Preloader showNothingFound={showNothingFound} />
//         ) : (
//           <Main
//             onLoginModal={handleLoginModal}
//             handleSearchResult={handleSearchResult}
//             setLoading={setLoading}
//           />
//         )}
//         {loading ? (
//           <></>
//         ) : (
//           <SearchResults
//             searchResults={searchResults}
//             searchTrue={searchTrue}
//             cardsToShow={cardsToShow}
//             setCardsToShow={setCardsToShow}
//             setLoading={setLoading}
//             showFailMessage={showFailureMessage}
//             onSelectedCard={setSelectedCard}
//             onCardLike={handleLikeClick}
//           />
//         )}
//         {loading ? <></> : <Footer />}
//         {/* still need to make a protected route for saved-news */}
//       </Route>
//       <Route exact path="/saved-news">
//         <SavedNews onSelectedCard={setSelectedCard} />
//       </Route>
//     </Switch>
//     {activeModal === "login" && (
//       <LoginModal
//         handleCloseModal={handleCloseModal}
//         isOpen={activeModal === "login"}
//         alternateModalOpen={handleRegisterModal}
//       ></LoginModal>
//     )}
//     {activeModal === "register" && (
//       <RegisterModal
//         handleCloseModal={handleCloseModal}
//         isOpen={activeModal === "register"}
//         alternateModalOpen={handleLoginModal}
//       ></RegisterModal>
//     )}
//   </div>
// );
