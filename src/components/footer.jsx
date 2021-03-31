import React from "react";
import FooterLogo from "../images/wmms-blk.svg";

const Footer = () => (
  <div className="container Footer wb-info brand">
    <hr />
    <ul className="footer-ul">
      <li className="footer-li">
        <a href="https://www.canada.ca/en/social.html">Social media </a>
      </li>
      <li className="footer-li">
        <a href="https://www.canada.ca/en/mobile.html">Mobile applications</a>
      </li>
      <li className="footer-li">
        <a href="https://www1.canada.ca/en/newsite.html">About Canada.ca</a>
      </li>
      <li className="footer-li">
        <a href="https://www.canada.ca/en/transparency/terms.html">
          Terms and conditions
        </a>
      </li>
      <li className="footer-li">
        <a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a>
      </li>
    </ul>
    <div className="col-md-2 pull-right">
        <img src={FooterLogo} alt="Symbol of the Government of Canada" />
    </div>
  </div>
);

export default Footer;
