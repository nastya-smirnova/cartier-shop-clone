import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
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
  );
};

export default Footer;
