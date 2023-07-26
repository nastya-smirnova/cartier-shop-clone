import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBasketShopping,
  faChevronRight,
  faLocationPin,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { HeaderBanner } from "./HeaderBanner";

export const Header = () => {
  return (
    <div className="App">
      <HeaderBanner />

      {/* <div className="bookAppointmentBannerContainer">
        <p className="bookAppointmentBanner">
          Book an appointment with a London boutique +{" "}
        </p>
        <button className="bookAppointmentCloseButton">X</button>
      </div> */}
      <header className="headerContainer">
        <nav className="navigationContainer">
          <ul className="list">
            <div className="dropdown">
              <button className="dropbtn">
                <FontAwesomeIcon icon={faBars} />
              </button>
              <div className="dropdownContent">
                <img
                  className="menuLogoItem"
                  src="https://www.cartier.com/ytos/resources/CARTIER/images/cartier-logo.svg"
                />
                <a className="dropdownListItem" href="#">
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
            {/* <li className="listLogoItem">CARTIER</li> */}
            <img
              className="listLogoItem"
              src="https://www.cartier.com/ytos/resources/CARTIER/images/cartier-logo.svg"
            />
            <li className="listItem">
              <FontAwesomeIcon icon={faLocationPin} />
            </li>
            <li className="listItem">
              <FontAwesomeIcon icon={faBasketShopping} />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
