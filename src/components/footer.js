import React from "react"

const Footer = () => (
  <footer id="wb-info">
    <div className="landscape">
      <nav className="container wb-navcurr">
        <h2 className="wb-inv"></h2>
        <ul className="list-unstyled colcount-sm-2 colcount-md-3">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
    <div className="brand">
      <div class="container">
        <div className="row">
          <nav className="col-md-9 col-lg-10 ftr-urlt-lnk">
            <h2 className="wb-inv">About this site</h2>
            <ul className="footer-ul">
              <li className="footer-li">
                <a href="https://www.canada.ca/en/social.html">Social media</a>
              </li>
              <li className="footer-li">
                <a href="https://www.canada.ca/en/mobile.html">
                  Mobile Applications
                </a>
              </li>
              <li className="footer-li">
                <a href="https://www1.canada.ca/en/newsite.html">
                  About Canada.ca
                </a>
              </li>
              <li className="footer-li">
                <a href="https://www.canada.ca/en/transparency/terms.html">
                  Terms and conditions
                </a>
              </li>
              <li className="footer-li">
                <a href="https://www.canada.ca/en/transparency/privacy.html">
                  Privacy
                </a>
              </li>
            </ul>
          </nav>
          <div className="col-xs-6 col-md-3 col-lg-2 text-right">
            <img
              src="https://wet-boew.github.io/themes-dist/GCWeb/assets/wmms-blk.svg"
              alt="Symbol of the Government of Canada"
            ></img>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
