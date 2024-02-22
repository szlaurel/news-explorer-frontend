import "./Main.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import homeLogOutButton from "../../images/homelogout.svg";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import SearchResults from "../SearchResults/SearchResults";
import hamburgerButton from "../../images/hamburger-button.svg";

const Main = ({ onLoginModal }) => {
  const [searchField, setSearchField] = useState("");

  const doesWork = (e) => {
    console.log("button works");
  };

  return (
    <main className="main">
      <Header
        onLoginModal={onLoginModal}
        logOutButton={homeLogOutButton}
        menuButton={hamburgerButton}
      />
      <section className="main-container">
        <div className="main__title">What's going on in the world?</div>
        <p className="main__paragraph">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
      </section>
      <section className="main__newscards-list-container">
        <SearchResults />
      </section>
      <footer className="main__footer">
        <Footer />
      </footer>
    </main>
  );
};

export default Main;

/* -------------------------------------------------------------------------- */
/*                              Old main code JIC                             */
/* -------------------------------------------------------------------------- */

// return (
//   <div className="main">
//     <Header onLoginModal={onLoginModal} logOutButton={homeLogOutButton} />
//     <div className="main-container">
//       <div className="main__title">What's going on in the world?</div>
//       <p className="main__paragraph">
//         Find the latest news on any topic and save them in your personal
//         account.
//       </p>
//       <div className="main__search-container">
//         <input
//           className="main__input"
//           name="search-field"
//           placeholder="Enter topic"
//           type="search"
//           id="searchField"
//           value={searchField}
//           onChange={(e) => setSearchField(e.target.value)}
//         />
//         <button
//           className="main__search-submit-button"
//           onMouseDown={(e) => {
//             console.log("click works");
//           }}
//         >
//           Search
//         </button>
//       </div>
//     </div>
//     <div className="main__footer">
//       <Footer />
//     </div>
//   </div>
// );
