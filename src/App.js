import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBasketShopping,
  faChevronRight,
  faExternalLink,
  faLocationPin,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="App">
      <div className="bookAppointmentBannerContainer">
        <p className="bookAppointmentBanner">
          Book an appointment with a London boutique +{" "}
        </p>
        <button className="bookAppointmentCloseButton">X</button>
      </div>
      <header className="headerContainer">
        <nav className="navigationContainer">
          <ul className="list">
            <div className="dropdown">
              <button className="dropbtn">
                <FontAwesomeIcon icon={faBars} />
              </button>
              <div className="dropdown-content">
                <a href="#">
                  Summer &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <a href="#">
                  High jewellery &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <a href="#">
                  Jewellery &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <a href="#">
                  Watches &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <a href="#">
                  Bags and accessories &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <a href="#">
                  Art of living &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <a href="#">
                  Fragrances &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <a href="#">
                  The maison &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <a href="#">
                  News &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
                <p className="dropDownLocation">
                  <FontAwesomeIcon icon={faLocationPin} /> &nbsp; UNITED KINGDOM
                </p>
              </div>
            </div>

            {/* <li className="listItem">
              <FontAwesomeIcon icon={faBars} />
            </li> */}
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
          <button
            className="discoverSelectionButton"
            onClick={() =>
              openInNewTab(
                "https://www.cartier.com/en-gb/be-inspired/cartier-icons"
              )
            }
          >
            Discover the selection
          </button>
        </div>
        <div>
          <div className="seasonalAccessoriesContainer">
            <div className="one">
              <img src="https://www.cartier.com/content/images/cms/ycm/resource/blob/531942/2d1c27afae055bad3bb759fff955e3aa/picture-a-data.jpg/w1920.jpg"></img>
              <div>
                <h2>Golden hour</h2>
                <p>
                  How to shine at the beach. Earrings, necklaces, rings: the
                  Maison's creations love to soak up the sun.
                </p>
                <button
                  className="discoverSelectionButton"
                  onClick={() =>
                    openInNewTab(
                      "https://www.cartier.com/en-gb/be-inspired/watches-must-haves"
                    )
                  }
                >
                  Discover the selection
                </button>
              </div>
            </div>
            <div className="two">
              <img src="https://www.cartier.com/content/images/cms/ycm/resource/blob/531916/9ed371f1813a4deb1151cca58a519456/picture-b-data.jpg/w1920.jpg"></img>
              <div>
                <h2>Summer time</h2>
                <p>
                  Uncover the watch collections that have become emblems of
                  design at Cartier.
                </p>
                <button
                  className="discoverSelectionButton"
                  onClick={() =>
                    openInNewTab(
                      "https://www.cartier.com/en-gb/be-inspired/jewellery-must-haves"
                    )
                  }
                >
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
                <div className="mustHaveText">Must have</div>
                <figcaption className="imageCaption">
                  SANTOS DE <br />
                  CARTIER <br />
                  WATCH
                </figcaption>
                <p className="productDescriptionText">
                  Medium model, automatic...
                </p>
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
              <div className="mustHaveText">Must have</div>
              <figcaption className="imageCaption">
                JUSTE UN CLOU <br />
                BRACELET,
                <br /> SMALL MODEL
              </figcaption>
              <p className="productDescriptionText">Yellow gold</p>
              <p className="price">£ 3,450</p>
              <button className="shopButton">Shop</button>
            </div>
            <div className="santosContainer">
              <img
                className="watchesImages"
                src="https://www.cartier.com/variants/images/13452677149801337/img1/w960_tpadding12.jpg"
              ></img>
              <div className="mustHaveText">Must have</div>
              <figcaption className="imageCaption">
                TANK LOUIS <br />
                CARTIER <br />
                WATCH
              </figcaption>
              <p className="productDescriptionText">Large model, quartz...</p>
              <p className="price">£ 11,000</p>
              <button className="addToBagButton">Add to bag</button>
            </div>
            <div className="santosContainer">
              <img
                className="watchesImages"
                src="https://www.cartier.com/variants/images/25372685655708131/img1/w960_tpadding12.jpg"
              ></img>
              <div className="mustHaveText">Must have</div>
              <figcaption className="imageCaption">
                LOVE <br />
                BRACELET, <br />
                SMALL MODEL
              </figcaption>
              <p className="productDescriptionText">Yellow gold</p>
              <p className="price">£ 4,550</p>
              <button className="shopButton">Shop</button>
            </div>
          </div>
        </div>
        <div className="seasonalAccessoriesContainer">
          <div className="one">
            <img
              className="sunshineIconsImage"
              src="https://www.cartier.com/content/images/cms/ycm/resource/blob/532040/cf713a6be639bfb5e448bc55d9c9a5a9/picture-a-data.jpg/w1920.jpg"
            ></img>
            <h2>Seasonal accessories</h2>
            <p>
              Sunglasses, bags, silk scarves... the Maison's accessories dive
              into the summer in an elegant array of joyful colours.
            </p>
            <button className="discoverSelectionButton">
              Discover the selection
            </button>
          </div>
          <div className="one">
            <img
              className="sunshineIconsImage"
              src="https://www.cartier.com/content/images/cms/ycm/resource/blob/532056/745f79d63aeb7c60c93ea9b7e079006e/picture-b-data.jpg/w1920.jpg"
            ></img>
            <h2>Objects on holiday</h2>
            <p className="productDescriptionText">
              Playful objects with a wandering spirit celebrate the sweetness of
              life in every moment of the summer.
            </p>
            <button className="discoverSelectionButton">
              Discover the selection
            </button>
          </div>

          <div className="one">
            <img
              className="sunshineIconsImage"
              src="https://www.cartier.com/content/images/cms/ycm/resource/blob/539234/360ff0cfb8480b400ccb0e59f9408205/picture-a-data.jpg/w1600.jpg"
            ></img>
            <h2>BAIGNOIRE</h2>

            <button className="discoverSelectionButton">
              Discover the selection
            </button>
          </div>
          <div className="one">
            <img
              className="sunshineIconsImage"
              src="https://www.cartier.com/content/images/cms/ycm/resource/blob/539232/31c3997fffece8ac61c6356f16d1dd8e/picture-b-data.jpg/w1600.jpg"
            ></img>
            <h2>LE VOYAGE RECOMMENCÉ</h2>
            <button className="discoverSelectionButton">
              Discover the selection
            </button>
          </div>
          <hr className="solidDivider"></hr>
          <div className="newsletterContainer">
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <label for="email"></label>
            <input
              className="newsletterInput"
              type="email"
              id="email"
              pattern=".+@globex\.com"
              size="30"
              placeholder="Email (required field)*"
              required
            ></input>
            <button className="proceedButton">Proceed</button>
          </div>
          <hr className="solidDivider"></hr>
        </div>
      </main>

      <footer className="footerContainer">
        <div className="footerRowContainer">
          <h3>Custom care</h3>
          <p>Contact us</p>
          <p>Call now: +44 (0)20 3780 8185</p>
          <p>Shopping online</p>
          <p>Track your order</p>
          <p>Shipping & delivery</p>
          <p>Orders & payment</p>
          <p>Help</p>
          <p>Sitemap</p>
        </div>
        <div className="footerRowContainer">
          <h3 className="footerRowContainer">Our company</h3>
          <p>
            Find a boutique &nbsp;
            <FontAwesomeIcon icon={faExternalLink} />
          </p>
          <p>
            Careers &nbsp;
            <FontAwesomeIcon icon={faExternalLink} />
          </p>
          <p>Cartier and corporate responsibility</p>
        </div>
        <div className="footerRowContainer">
          <h3>Legal & privacy</h3>
          <p>Terms of use</p>
          <p>Conditions of safe</p>
          <p>Peturns policy</p>
          <p>Cookie policy</p>
          <p>Cookie center</p>
          <p>Modern slavery act statement</p>
        </div>
        <div className="footerRowContainer">
          <h3 className="footerRowContainer">Follow us</h3>
          <img
            className="followUsImage"
            src="https://www.cartier.com/content/images/cms/ycm/resource/blob/191716/cfe85e78a25bad631c3e3bdeb6c4faef/cartier-royal-warrant-15-07-21-png-data.png/w320.jpg"
          ></img>
        </div>
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
