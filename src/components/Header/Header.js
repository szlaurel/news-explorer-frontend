import { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import altLogOutButton from "../../images/logoutWhite.svg";

const Header = ({
  onLoginModal,
  isLoggedIn,
  id,
  logOutButton,
  menuButton,
  tempUserLoggedIn,
}) => {
  // the temp user state comes from the saved header component to show the
  // styles for the logged in user

  const [open, setOpen] = useState("");
  const [isActive, setIsActive] = useState(false);

  const username = "Elise";

  const handleOpenAndCloseMenu = () => {
    if (open === "open") {
      setOpen("");
      setIsActive(false);
      // console.log("its closed now");
    } else if (open === "") {
      setOpen("open");
      setIsActive(true);
      // console.log("its open now");
    } else return;
  };

  const headerBarOneClass = !isActive
    ? "header__bar-one"
    : "header__bar-one_active";

  const headerBarTwoClass = !isActive
    ? "header__bar-two"
    : "header__bar-two_active";

  const logOutChangeImage = !isActive ? logOutButton : altLogOutButton;

  return (
    <header className="header" id={id}>
      <button
        className="header__hamburger-button"
        onClick={handleOpenAndCloseMenu}
      >
        {!isActive ? (
          <>
            <div className={headerBarOneClass} id={id}></div>
            <div className={headerBarTwoClass} id={id}></div>
          </>
        ) : (
          <>
            <div className={headerBarOneClass}></div>
            <div className={headerBarTwoClass}></div>
          </>
        )}
      </button>
      <main
        className={
          !isActive
            ? "header__navbar-container"
            : "header__navbar-container_active"
        }
        id={id}
      >
        <section className="header__menu-container">
          {!isActive ? (
            <h1 className="header__logo" id={id}>
              NewsExplorer
            </h1>
          ) : (
            // <img className="header__logo" src={altNewsExplorerLogo} id={id} />
            // <img className="header__logo" src={newsExplorerLogo} />
            <h1 className="header__logo">NewsExplorer</h1>
          )}

          <span className="header__border-bottom"></span>
        </section>

        {/* <button
          className="header__hamburger-button"
          onClick={handleOpenAndCloseMenu}
        >
          <div className="header__bar-one"></div>
          <div className="header__bar-two"></div>
        </button> */}
        {/* <div className="header__menu-bar"></div> */}
        <section
          className={
            !isActive
              ? "header__button-container"
              : "header__button-container_active"
          }
          id={id}
        >
          {tempUserLoggedIn ? (
            <>
              <NavLink
                exact
                to="/"
                className="header__home-button"
                activeClassName="header__home-button_active"
                id={id}
              >
                Home
              </NavLink>
              <NavLink
                to="/saved-news"
                className="header__saved-articles_button"
                activeClassName="header__saved-articles_button_active"
                id={id}
              >
                Saved articles
              </NavLink>
              <button
                className="header__logout-button"
                onClick={onLoginModal}
                id={id}
              >
                {username}
                <img
                  src={logOutChangeImage}
                  alt="logout"
                  className="header__logout-image"
                  id={id}
                />
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                activeClassName="header__home-button_active"
                className="header__home-button"
              >
                Home
              </NavLink>
              <button className="header__signin-button" onClick={onLoginModal}>
                Sign in
              </button>
            </>
          )}
        </section>
      </main>
    </header>
  );
};
export default Header;
