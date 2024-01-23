import "./App.css";
import "normalize.css/normalize.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
