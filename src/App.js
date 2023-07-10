import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
function App() {
  return (
    <div className="App">
      <header className="headerContainer">
        <div className="menuSearchContainer">
          <p>Menu</p>
          <FontAwesomeIcon icon={faLinkedin} />
          <p>Search</p>
          <p>Logo</p>
          <p>Location</p>
          <p>Basket</p>
        </div>
      </header>
      <main className="mainContainer">Cartier main content</main>
      <footer className="footerContainer"> Cartier footer</footer>
    </div>
  );
}

export default App;
