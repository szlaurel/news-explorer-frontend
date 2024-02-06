import { useState } from "react";
import "./Header.css";
// import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink, Link } from "react-router-dom";
import homeLogOut from "../../images/homelogout.svg";
import savedNewsLogOut from "../../images/savednewslogout.svg";

const Header = ({ onLoginModal, isLoggedIn, id, logOutButton }) => {
  const [searchField, setSearchField] = useState("");

  // const [tempSwitchUser, setTempSwitchUser] = useState(false);

  const username = "Elise";
  const isActive = true;

  return (
    <header className="header" id={id}>
      <section className="header__link-container" id={id}>
        <h1 className="header__logo" id={id}>
          NewsExplorer
        </h1>
        <div className="header__button-container" id={id}>
          {/* <NavLink
            to="/"
            activeClassName="header__home-button_active"
            className="header__home-button"
          >
            Home
          </NavLink>
          <button className="header__signin-button" onClick={onLoginModal}>
            Sign in
          </button> */}
          {true ? (
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
                Saved Articles
              </NavLink>
              <button
                className="header__logout-button"
                onClick={onLoginModal}
                id={id}
              >
                {username}
                <img src={logOutButton} alt="logout" />
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
        </div>
      </section>
    </header>
  );
};
export default Header;

// This is the old code regarding the header before
// i changed the main container to the Main
// component VVVVVV

// const Header = () => {
//     const [searchField, setSearchField] = useState("");

//     return (
//       <div className="header">
//         <div className="header__link-container">
//           <h1 className="header__logo">NewsExplorer</h1>
//           <div className="header__button-container">
//             <button className="header__home-button">Home</button>
//             <button className="header__signin-button">Sign in</button>
//           </div>
//         </div>
//         <div className="header__main-container">
//           <div className="header__title">What's going on in the world?</div>
//           <p className="header__paragraph">
//             Find the latest news on any topic and save them in your personal
//             account.
//           </p>
//           <div className="header__search-container">
//             <input
//               className="header__input"
//               name="search-field"
//               placeholder="Enter topic"
//               type="search"
//               id="searchField"
//               value={searchField}
//               onChange={(e) => setSearchField(e.target.value)}
//             />
//             <button className="header__search-submit-button">Search</button>
//           </div>
//         </div>
//       </div>
//     );
//   };
