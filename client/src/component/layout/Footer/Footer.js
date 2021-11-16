import React from "react";
import "./Footer.css";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="leftFooter">
        <h1>Download our app</h1>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="appstore" />
      </div>

      <div class="midFooter">
        <h1>KINGDOM SHOPS</h1>
        <p>The Era on Kingoms Returns with its greatness</p>
        <p>copyright 2021 &copy; Phoenix</p>
      </div>

      <div class="rightFooter">
        <h4>Follow us</h4>
        <a href="https://github.com/in-darkphoenix">GitHub</a>
        <a href="https://github.com/in-darkphoenix">Reddit</a>
        <a href="https://github.com/in-darkphoenix">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
