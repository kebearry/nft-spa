import * as React from "react";
import "./footer.css";

function Footer() {
  return (
    <div id="web-footer">
      <footer id="lab_social_icon_footer">
        <div className="container">
          <div className="text-center center-block">
            <a href="/">
              <i
                id="social-fb"
                className="fa fa-facebook-square fa-3x social"
              ></i>
            </a>
            <a href="/">
              <i
                id="social-tw"
                className="fa fa-twitter-square fa-3x social"
              ></i>
            </a>
            <a href="/">
              <i
                id="social-gp"
                className="fa fa-google-plus-square fa-3x social"
              ></i>
            </a>
            <a href="mailto:kebearry123@outlook.com">
              <i
                id="social-em"
                className="fa fa-envelope-square fa-3x social"
              ></i>
            </a>
          </div>
        </div>
        © 2021 Baonation LLC
      </footer>
    </div>
  );
}

export default Footer;
