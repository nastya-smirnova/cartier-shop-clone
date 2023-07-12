import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faBars,
  faBasketShopping,
  faHeart,
  faLocationPin,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="headerContainer">
        <nav className="navigationContainer">
          <ul className="list">
            <li className="listItem">
              <FontAwesomeIcon icon={faBars} />
            </li>
            <li className="listItem">
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li className="listLogoItem">CARTIER</li>
            <li className="listItem">
              <FontAwesomeIcon icon={faLocationPin} />
            </li>
            <li className="listItem">
              <FontAwesomeIcon icon={faBasketShopping} />
            </li>
          </ul>
        </nav>
      </header>
      <main className="mainContainer">
        <div className="sunshineIconsContainer">
          <img
            className="sunshineIconsImage"
            src="https://www.cartier.com/content/images/cms/ycm/resource/blob/531954/065901784988e1b3ac749b61cdc26d96/single-banner-picture-data.jpg/w2560.jpg"
          ></img>
          <h2 className="sunshineIconsHeader">Sunshine icons</h2>
          <p>
            The Tank Watch, Panthère bracelet, or Love ring: the Cartier Icons
            shine brightest in the sun.
          </p>
          <button className="discoverSelectionButton">
            Discover the selection
          </button>
        </div>
        <div className="collectionsContainer">
          <div className="collectionsContainer">
            <div className="goldenHourContainer">
              <img
                className="goldenHourImage"
                src="https://www.cartier.com/content/images/cms/ycm/resource/blob/531942/2d1c27afae055bad3bb759fff955e3aa/picture-a-data.jpg/w1920.jpg"
              ></img>
              <div>
                <h2>Golden hour</h2>
                <p>
                  How to shine at the beach. Earrings, necklaces, rings: the
                  Maison's creations love to soak up the sun.
                </p>
                <button className="discoverSelectionButton">
                  Discover the selection
                </button>
              </div>
            </div>
            <div className="summerTimeContainer">
              <img
                className="summerTimeImage"
                src="https://www.cartier.com/content/images/cms/ycm/resource/blob/531916/9ed371f1813a4deb1151cca58a519456/picture-b-data.jpg/w1920.jpg"
              ></img>
              <div>
                <h2>Summer time</h2>
                <p>
                  Uncover the watch collections that have become emblems of
                  design at Cartier.
                </p>
                <button className="discoverSelectionButton">
                  Discover the selection
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cultureOfDesignContainer">
          <h2>The cartier culture of design</h2>
          <button className="discoverSelectionButton">
            Discover Cartier Icons
          </button>
          <div className="watchesContainer">
            <div className="santosContainer">
              <div className="santosContainer">
                <img
                  className="watchesImages"
                  src="https://www.cartier.com/variants/images/44733502651435035/img1/w960_tpadding12.jpg"
                ></img>
                <figcaption className="imageCaption">
                  SANTOS DE <br />
                  CARTIER <br />
                  WATCH
                </figcaption>
                <p>Medium model, automatic...</p>
                <p className="price">£ 6,750</p>
                <button className="addToBagButton">Add to bag</button>
              </div>
              {/* <div className="hide">
                <button className="addToBagButton">Add to bag</button>
              </div> */}
            </div>

            <div className="santosContainer">
              <img
                className="watchesImages"
                src="https://www.cartier.com/variants/images/25458910981768052/img1/w960_tpadding12.jpg"
              ></img>
              <figcaption className="imageCaption">
                JUSTE UN CLOU <br />
                BRACELET,
                <br /> SMALL MODEL
              </figcaption>
              <p>Yellow gold</p>
              <p className="price">£ 3,450</p>
              <button className="addToBagButton">Shop</button>
            </div>
            <div className="santosContainer">
              <img
                className="watchesImages"
                src="https://www.cartier.com/variants/images/13452677149801337/img1/w960_tpadding12.jpg"
              ></img>
              <figcaption className="imageCaption">
                TANK LOUIS <br />
                CARTIER <br />
                WATCH
              </figcaption>
              <p>
                Large model, quartz <br />
                movement, 18K...
              </p>
              <p className="price">£ 11,000</p>
              <button className="addToBagButton">Add to bag</button>
            </div>
            <div className="santosContainer">
              <img
                className="watchesImages"
                src="https://www.cartier.com/variants/images/25372685655708131/img1/w960_tpadding12.jpg"
              ></img>
              <figcaption className="imageCaption">
                LOVE <br />
                BRACELET, <br />
                SMALL MODEL
              </figcaption>
              <p>Yellow gold</p>
              <p className="price">£ 4,550</p>
              <button className="addToBagButton">Shop</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="footerContainer"> Cartier footer</footer>
    </div>
  );
}

export default App;
