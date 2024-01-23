import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const [searchField, setSearchField] = useState("");

  return (
    <div className="header">
      <div className="header__link-container">
        <h1 className="header__logo">NewsExplorer</h1>
        <div className="header__button-container">
          <button className="header__home-button">Home</button>
          <button className="header__signin-button">Sign in</button>
        </div>
      </div>
    </div>
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
