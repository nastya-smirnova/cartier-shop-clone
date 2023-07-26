import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const HeaderBanner = () => {
  return (
    <div className="App">
      <div className="bookAppointmentBannerContainer">
        <div className="tab">
          <a className="tab" href="#link1">
            Book an appointment with a London boutique +
          </a>
          <div className="closeButtonContainer">
            <button className="closeButton">
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div className="div" id="link1">
            <p>Book an appointment with a London boutique +</p>
            <p className="bookAppText">
              Plan your visit to a London Boutique by booking an appointment
              &nbsp;
              <a href="https://www.cartier.com/en-gb/book-an-appointment">
                here.
              </a>{" "}
              <br />
              Our Cartier ambassadors are &nbsp;{" "}
              <a href="https://www.cartier.com/en-gb/contact-us">here</a> to
              assist you with your online order. <br />
              For online delivery & returns information click &nbsp;
              <a href="https://www.cartier.com/en-gb/services/your-purchase-concierge/faq">
                here.
              </a>{" "}
              <br />
              You can reach us in the UK by phone on{" "}
              <a href="#">+44 (0)20 3893 4243</a>
            </p>

            <button className="closeButton">
              {" "}
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
