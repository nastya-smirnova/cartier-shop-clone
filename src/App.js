import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>

      <main className="main">
        <Main />
      </main>

      <footer className="footer">
        <Footer />
      </footer>

      <div>
        <hr className="solidDivider"></hr>
        {/* <img
          className="followUsImage"
          src="https://www.cartier.com/content/images/cms/ycm/resource/blob/42310/3c55d864c111213080a87c8453aeaa0c/cartier-women-s-logo-final-data.png/w340.jpg"
        ></img>
        <img
          className="followUsImage"
          src="https://www.cartier.com/content/images/cms/ycm/resource/blob/42316/3b1541992943e8e5156d8a784eaee9fd/cartier-foundation-logo-data.png/w340.jpg"
        ></img>
        <img
          className="followUsImage"
          src="https://www.cartier.com/content/images/cms/ycm/resource/blob/42312/42538c26e63eefec9da19585c88b90eb/cartier-philanthropy-logo-data.png/w340.jpg"
        ></img> */}
      </div>
      <div className="footerBanner ">
        <p>Shop in: United Kingdom</p>
        <button>Change Location</button>
      </div>
    </div>
  );
};

export default App;
