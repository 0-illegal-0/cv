import logo from "./logo.svg";
import "./App.css";
import about from "./images/about-2.png";
import resume from "./images/resume.png";
import portfolio from "./images/portfolio.png";
import service from "./images/service.png";
import contact from "./images/contact.png";

function App() {
  return <NavBar />;
}

function NavBar() {
  return (
    <div className="main">
      <div className="about-container"></div>
      <div className="content-body"></div>
      <div className="nav-bar">
        <ul className="nav-list">
          <li>
            <img src={about} />
            <span>About</span>
          </li>
          <li>
            <img src={resume} />

            <span>Resume</span>
          </li>
          <li>
            <img src={portfolio} />

            <span>Portfolio</span>
          </li>
          <li>
            <img src={service} />

            <span>Services</span>
          </li>
          <li>
            <img src={contact} />

            <span>Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
