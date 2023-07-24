import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBasketShopping,
  faChevronRight,
  faExternalLink,
  faLocationPin,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="App">
      <div className="tab">
        <a className="tab" href="#link1">
          Book an appointment with a London boutique +
        </a>
        <button>X</button>

        <div className="div" id="link1">
          <p>Book an appointment with a London boutique +</p>
          <p>
            Plan your visit to a London Boutique by booking an appointment here.
            Our Cartier ambassadors are here to assist you with your online
            order. For online delivery & returns information click here. You can
            reach us in the UK by phone on +44 (0)20 3893 4243
          </p>
          <button>X</button>
        </div>
      </div>

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
    </div>
  );
};

export default Header;
