import "./Main.css";
import { useState } from "react";

const Main = () => {
  const [searchField, setSearchField] = useState("");

  return (
    <div className="main">
      <div className="main-container">
        <div className="main__title">What's going on in the world?</div>
        <p className="main__paragraph">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="main__search-container">
          <input
            className="main__input"
            name="search-field"
            placeholder="Enter topic"
            type="search"
            id="searchField"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
          <button className="main__search-submit-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
