import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const HeaderBanner = () => {
  return (
    <div className="App">
      <div className="tab">
        <a className="tab" href="#link1">
          Book an appointment with a London boutique +
        </a>

        <button className="bookAppointmentCloseButton">
          <FontAwesomeIcon icon={faClose} />
        </button>

        <div className="div" id="link1">
          <p>Book an appointment with a London boutique +</p>
          <p>
            Plan your visit to a London Boutique by booking an appointment here.
            Our Cartier ambassadors are here to assist you with your online
            order. For online delivery & returns information click here. You can
            reach us in the UK by phone on +44 (0)20 3893 4243
          </p>
          <button className="bookAppointmentCloseButton">
            {" "}
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      </div>
    </div>
  );
};
