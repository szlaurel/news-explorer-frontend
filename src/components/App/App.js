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

function App() {
  /* -------------------------------------------------------------------------- */
  /*                           useState and useHistory                          */
  /* -------------------------------------------------------------------------- */

  const [activeModal, setActiveModal] = useState("");

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

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Main onLoginModal={handleLoginModal} />
        </Route>
        <Route path="/profile">test to see if Profile</Route>
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
