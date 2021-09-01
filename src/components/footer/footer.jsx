import * as React from "react";
import "./footer.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = "service_mgxl5ko";
const TEMPLATE_ID = "template_eflz9sn";
const USER_ID = "user_lc5PjrxE6x6fdH0KfHRg6";
function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "We've sent you a mail!",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div id="web-footer">
      <div className="container">
        <div className="social-media-bar">
          <div className="social-media-icons">
            <h1>Follow Us</h1>
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-rss" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="social-media-subscribe">
            <h1>Get The Newsletter</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
              ></input>
              <input className="button-form" type="submit" value="Subcribe"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
