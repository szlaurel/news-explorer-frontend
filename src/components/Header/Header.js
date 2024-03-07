import { useState } from "react";
import "./Header.css";
// import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink, Link } from "react-router-dom";
import homeLogOut from "../../images/homelogout.svg";
import savedNewsLogOut from "../../images/savednewslogout.svg";
import hamburgerButton from "../../images/hamburger-button.svg";

const Header = ({ onLoginModal, isLoggedIn, id, logOutButton, menuButton }) => {
  const [searchField, setSearchField] = useState("");
  const [open, setOpen] = useState("");
  const [isActive, setIsActive] = useState(false);

  // const [tempSwitchUser, setTempSwitchUser] = useState(false);

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
  {
    /* <section className="header__navbar-container" id={id}></section> */
  }

  return (
    <header className="header" id={id}>
      <button
        className="header__hamburger-button"
        onClick={handleOpenAndCloseMenu}
      >
        {!isActive ? (
          <>
            <div className="header__bar-one" id={id}></div>
            <div className="header__bar-two" id={id}></div>
          </>
        ) : (
          <>
            <div className="header__bar-one"></div>
            <div className="header__bar-two"></div>
          </>
        )}
      </button>
      <section
        className={
          !isActive
            ? "header__navbar-container"
            : "header__navbar-container_active"
        }
        id={id}
      >
        <div className="header__menu-container">
          {!isActive ? (
            <h1 className="header__logo" id={id}>
              NewsExplorer
            </h1>
          ) : (
            <h1 className="header__logo">NewsExplorer</h1>
          )}

          <div className="header__border-bottom"></div>
        </div>

        {/* <button
          className="header__hamburger-button"
          onClick={handleOpenAndCloseMenu}
        >
          <div className="header__bar-one"></div>
          <div className="header__bar-two"></div>
        </button> */}
        {/* <div className="header__menu-bar"></div> */}
        <div
          className={
            !isActive
              ? "header__button-container"
              : "header__button-container_active"
          }
          id={id}
        >
          {false ? (
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
                <img
                  src={logOutButton}
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
        </div>
      </section>
    </header>
  );
};
export default Header;

/* -------------------------------------------------------------------------- */
/*                           recently commented out                           */
/* -------------------------------------------------------------------------- */

// return (
//   <header className="header" id={id}>
//     <button
//       className="header__hamburger-button"
//       onClick={handleOpenAndCloseMenu}
//     >
//       <div className="header__bar-one" id={id}></div>
//       <div className="header__bar-two" id={id}></div>
//     </button>
//     <section
//       className={
//         !isActive
//           ? "header__navbar-container"
//           : "header__navbar-container_active"
//       }
//       id={id}
//     >
//       <div className="header__menu-container">
//         <h1 className="header__logo" id={id}>
//           NewsExplorer
//         </h1>
//         <div className="header__border-bottom"></div>
//       </div>
// comment start
//        <button
//         className="header__hamburger-button"
//         onClick={handleOpenAndCloseMenu}
//       >
//         <div className="header__bar-one"></div>
//         <div className="header__bar-two"></div>
//       </button>
//       <div className="header__menu-bar"></div>
// comment end
//       <div
//         className={
//           !isActive
//             ? "header__button-container"
//             : "header__button-container_active"
//         }
//         id={id}
//       >
//         {false ? (
//           <>
//             <NavLink
//               exact
//               to="/"
//               className="header__home-button"
//               activeClassName="header__home-button_active"
//               id={id}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/saved-news"
//               className="header__saved-articles_button"
//               activeClassName="header__saved-articles_button_active"
//               id={id}
//             >
//               Saved Articles
//             </NavLink>
//             <button
//               className="header__logout-button"
//               onClick={onLoginModal}
//               id={id}
//             >
//               {username}
//               <img
//                 src={logOutButton}
//                 alt="logout"
//                 className="header__logout-image"
//                 id={id}
//               />
//             </button>
//           </>
//         ) : (
//           <>
//             <NavLink
//               to="/"
//               activeClassName="header__home-button_active"
//               className="header__home-button"
//             >
//               Home
//             </NavLink>
//             <button className="header__signin-button" onClick={onLoginModal}>
//               Sign in
//             </button>
//           </>
//         )}
//       </div>
//     </section>
//   </header>
// );

/* -------------------------------------------------------------------------- */
/*                              old code comment                              */
/* -------------------------------------------------------------------------- */

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
