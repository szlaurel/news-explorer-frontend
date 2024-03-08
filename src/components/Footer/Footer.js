import "./Footer.css";
import authorImage from "../../images/authorimage.png";
import gitHubLogo from "../../images/github.svg";
import faceBookLogo from "../../images/fb.svg";
// import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink, Link, useHistory } from "react-router-dom";
// import { NavLink } from "react-router-dom/cjs/react-router-dom";

// note footer is causing side scrolling on the page so be weary
// and fix that

const Footer = ({ savedNewsPage, id }) => {
  const gitHubLink = "https://github.com/szlaurel";
  const facebookLink = "https://www.facebook.com/tripleten.tech/";
  const tripleTenLink = "https://tripleten.com/";
  const history = useHistory();

  return (
    <footer className="footer">
      {savedNewsPage ? (
        <div className="footer__credits-container" id={id}>
          <h3 className="footer__credits-title">
            © 2023 Supersite, Powered by News API
          </h3>
          <nav className="footer__links-container">
            <NavLink
              to="/"
              activeClassName="footer__link_active"
              className="footer__link"
            >
              Home
            </NavLink>
            {/* <h3 className="footer__link">Home</h3> */}
            <a
              href={tripleTenLink}
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              <h3 className="footer__link">TripleTen</h3>
            </a>
            <a href={gitHubLink} target="_blank" rel="noreferrer">
              <img
                src={gitHubLogo}
                alt="github"
                className="footer__social-icons"
              />
            </a>
            <a href={facebookLink} target="_blank" rel="noreferrer">
              <img
                src={faceBookLogo}
                alt="facebook"
                className="footer__social-icons"
              />
            </a>
          </nav>
        </div>
      ) : (
        <>
          <div className="footer__info-container">
            <img
              src={authorImage}
              className="footer__image"
              alt="authorimage"
            />
            <div className="footer__text-info">
              <h3 className="footer__title">About the Author</h3>
              <p className="footer__paragraph">
                Hi! I'm Seane, and yup that's how you spell my name! In this
                project i’m here to display a culmination of all that I learned
                and put together during my time at TripleTen's Software
                Engineering Course!
              </p>
            </div>
          </div>
          <div className="footer__credits-container">
            <h3 className="footer__credits-title">
              © 2023 Supersite, Powered by News API
            </h3>
            <nav className="footer__links-container">
              <NavLink
                to="/"
                activeClassName="footer__link_active"
                className="footer__link"
              >
                Home
              </NavLink>
              {/* <h3 className="footer__link">Home</h3> */}
              <a
                href={tripleTenLink}
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                <h3 className="footer__link">TripleTen</h3>
              </a>
              <a href={gitHubLink} target="_blank" rel="noreferrer">
                <img
                  src={gitHubLogo}
                  alt="github"
                  className="footer__social-icons"
                />
              </a>
              <a href={facebookLink} target="_blank" rel="noreferrer">
                <img
                  src={faceBookLogo}
                  alt="facebook"
                  className="footer__social-icons"
                />
              </a>
            </nav>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;

/* -------------------------------------------------------------------------- */
/*                                Just in case                                */
/* -------------------------------------------------------------------------- */

// return (
//   <div className="footer">
//     {}
//     <div className="footer__info-container">
//       <img src={authorImage} className="footer__image" alt="authorimage" />
//       <div className="footer__text-info">
//         <h3 className="footer__title">About the Author</h3>
//         <p className="footer__paragraph">
//           Hi! I'm Seane, and yup that's how you spell my name! In this project
//           i’m here to display a culmination of all that I learned and put
//           together during my time at TripleTen's Software Engineering Course!
//         </p>
//       </div>
//     </div>
//     <div className="footer__credits-container">
//       <h3 className="footer__credits-title">
//         © 2023 Supersite, Powered by News API
//       </h3>
//       <div className="footer__links-container">
//         <NavLink
//           to="/"
//           activeClassName="footer__link_active"
//           className="footer__link"
//         >
//           Home
//         </NavLink>
//         {/* <h3 className="footer__link">Home</h3> */}
//         <a
//           href={tripleTenLink}
//           target="_blank"
//           rel="noreferrer"
//           className="footer__link"
//         >
//           <h3 className="footer__link">TripleTen</h3>
//         </a>
//         <a href={gitHubLink} target="_blank" rel="noreferrer">
//           <img
//             src={gitHubLogo}
//             alt="github"
//             className="footer__social-icons"
//           />
//         </a>
//         <a href={facebookLink} target="_blank" rel="noreferrer">
//           <img
//             src={faceBookLogo}
//             alt="facebook"
//             className="footer__social-icons"
//           />
//         </a>
//       </div>
//     </div>
//   </div>
// );
