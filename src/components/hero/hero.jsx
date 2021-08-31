import * as React from "react";
import awkbao from "../../assets/awkbao.png";
import crybao from "../../assets/crybao.png";
import angrybao from "../../assets/angrybao.png";
import "./hero.css";

function Hero() {
  return (
    <div id="web-hero">
      <span className="navbar__menu-item">
        <span
          data-menu-item-text="#DiscoverBao"
          className="navbar__menu-item-title"
        >
          #DiscoverBao
        </span>
      </span>
      <div>
        <img src={awkbao} alt="awkward bao" />
        <img src={crybao} alt="crying bao" />
        <img src={angrybao} alt="angry bao" />
      </div>
      <div className="note-container">
        <aside>
          <small>Note</small>
          <p>
            We're more than <code>just baos</code> that are cute. We are baos
            with<code>feelings(fillings).</code>Treat us seriously, please!!!
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Hero;
