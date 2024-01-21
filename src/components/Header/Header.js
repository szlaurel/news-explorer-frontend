import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__link-container">
        <h1 className="header__logo">NewsExplorer</h1>
        <div className="header__button-container">
          <button className="header__home-button">Home</button>
          <button className="header__signin-button">Sign in</button>
        </div>
      </div>
      <div className="header__main-container">
        <div className="header__title">What's going on in the world?</div>
      </div>
    </div>
  );
};
export default Header;
