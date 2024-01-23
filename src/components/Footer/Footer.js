import "./Footer.css";
import authorImage from "../../images/authorimage.png";
import gitHubLogo from "../../images/github.svg";
import faceBookLogo from "../../images/fb.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// note footer is causing side scrolling on the page so be weary
// and fix that

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info-container">
        <img src={authorImage} className="footer__image" alt="authorimage" />
        <div className="footer__text-info">
          <h3 className="footer__title">About the Author</h3>
          <p className="footer__paragraph">
            Hi! I'm Seane, and yup that's how you spell my name! In this project
            i’m here to display a culmination of all that I learned and put
            together during my time at TripleTen's Software Engineering Course!
          </p>
        </div>
      </div>
      <div className="footer__credits-container">
        <h3 className="footer__credits-title">
          © 2023 Supersite, Powered by News API
        </h3>
        <div className="footer__links-container">
          <h3 className="footer__link">Home</h3>
          <h3 className="footer__link">TripleTen</h3>
          <img src={gitHubLogo} alt="github" className="footer__social-icons" />
          <img
            src={faceBookLogo}
            alt="facebook"
            className="footer__social-icons"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
