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
      <div class="container">
        <div class="social-media-bar">
          <div class="social-media-icons">
            <h1>Follow Us</h1>
            <ul>
              <li>
                <a href="/">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa fa-rss" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="social-media-subscribe">
            <h1>Get The Newsletter</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
              ></input>
              <input class="button-form" type="submit" value="Subcribe"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
