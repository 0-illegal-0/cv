import logo from "./logo.svg";
import "./App.css";

function App() {
  return <NavBar />;
}

function NavBar() {
  return (
    <div>
      <div className="nav-bar">
        <ul className="nav-list">
          <li>About</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="about-container"></div>
    </div>
  );
}

export default App;
