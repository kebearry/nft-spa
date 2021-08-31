import * as React from "react";
import "./navigation.css";
import { useEffect, useCallback } from "react";

function Navigation() {
  const onScroll = useCallback(() => {
    var scrollDistance = window.scrollY;
    if (scrollDistance > 200) {
      fadeIn(document.querySelector("nav"));
    } else {
      document.querySelector("nav").style.display = "none";
    }
  }, []);
  useEffect(() => {
    document.querySelector("nav").style.display = "none";
    window.addEventListener("scroll", onScroll);
  }, [onScroll]);
  function fadeIn(element) {
    var op = 0.1;
    element.style.display = "block";
    var timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1;
    }, 10);
  }
  return (
    <nav className="navigation" id="web-nav">
      <a className="navigation__link" href="#bao">
        <i class="fa fa-chevron-up"></i>
      </a>
      <a className="navigation__link" href="#about">
        About
      </a>
      <a className="navigation__link" href="#gallery">
        Gallery
      </a>
      <a className="navigation__link" href="#roadmap">
        Roadmap
      </a>
    </nav>
  );
}

export default Navigation;
