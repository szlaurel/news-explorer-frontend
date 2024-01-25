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

function App() {
  /* -------------------------------------------------------------------------- */
  /*                           useState and useHistory                          */
  /* -------------------------------------------------------------------------- */

  const [activeModal, setActiveModal] = useState("");

  /* -------------------------------------------------------------------------- */
  /*                             handle open modals                             */
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
      <Header onLoginModal={handleLoginModal} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/profile">test to see if Profile</Route>
        <Route path="/saved-news">test to see if saved-news works</Route>
      </Switch>
      <Footer />
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
