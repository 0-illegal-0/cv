import logo from "./logo.svg";
import "./App.css";
import about from "./assets/images/icons/about-2.png";
import resume from "./assets/images/icons/resume.png";
import portfolio from "./assets/images/icons/portfolio.png";
import service from "./assets/images/icons/service.png";
import contact from "./assets/images/icons/contact.png";
import About from "./about.js";
import NavBar from "./nav-bar.js";
import Avatar from "./avatar.js";

function App() {
  return <Main />;
}

function Main() {
  return (
    <div className="main">
      <Avatar />
      <About />
      <NavBar
        about={about}
        resume={resume}
        portfolio={portfolio}
        service={service}
        contact={contact}
      />
    </div>
  );
}

export default App;
