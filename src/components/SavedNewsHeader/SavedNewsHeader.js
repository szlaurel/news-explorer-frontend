import React from "react";
import "./SavedNewsHeader.css";
import Header from "../Header/Header";
import savedNewsLogOutButton from "../../images/savednewslogout.svg";
import alternateHamburgerButton from "../../images/hamburger-button-black.svg";
import { useState } from "react";

const SavedNewsHeader = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 temp values                                */
  /* -------------------------------------------------------------------------- */

  const username = "Elise";
  const articles = 5;
  const keyWords1 = "Nature";
  const keyWords2 = "Yellowstone";
  const otherKeywords = 2;

  const [tempUserLoggedIn, setTempUserLoggedIn] = useState(true);

  return (
    <div className="saved-news-header__main">
      <div>
        <Header
          id={"saved-news_header"}
          logOutButton={savedNewsLogOutButton}
          menuButton={alternateHamburgerButton}
          tempUserLoggedIn={tempUserLoggedIn}
        />
      </div>
      <div className="saved-news_header_container">
        <div className="saved-news_header_title">Saved articles</div>
        <div className="saved-news_header_paragraph-container">
          {`${username}, you have ${articles} saved articles`}
        </div>
        <div className="saved-news_header_keywords__container">
          <div className="saved-news_header_keywords">
            <span className="saved-news_header_keywords__title">
              By keywords:{" "}
            </span>
            {`${keyWords1}, ${keyWords2}, and ${otherKeywords} other`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedNewsHeader;

// return (
//   <div className="saved-news_header">
//     <div>
//       <Header id={"saved-news_header"} />
//     </div>
//     <div className="saved-news_container">
//       <div className="saved-news_title">Saved Articles</div>
//       <div className="saved-news_paragraph-container">
//         {`${username}, you have ${articles} saved articles`}
//       </div>
//       <div className="saved-news_keywords__container">
//         <div className="saved-news_keywords__title">By keywords: </div>
//         <div className="saved-news_keywords">
//           {`${keyWords1}, ${keyWords2}, ${otherKeywords} other`}
//         </div>
//       </div>
//     </div>
//   </div>
// );
