import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connector/connector";
import awkbao from "../../assets/awkbao.png";
import crybao from "../../assets/crybao.png";
import angrybao from "../../assets/angrybao.png";
import "./hero.css";

function Hero() {
  const { active, account, activate } = useWeb3React();
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {}
  }

  async function redirect() {
    try {
      window.open("https://opensea.io/alucial", "_blank").focus();
    } catch (ex) {}
  }
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
      <div className="buttonContainer">
        {active ? (
          <div>
            <button className="disconnected" onClick={redirect}>
              Buy on Opensea
            </button>
            <div>
              Connected with{" "}
              <b>
                {account.substring(0, 4)}...
                {account.substring(account.length - 4, account.length)}
              </b>
            </div>
          </div>
        ) : (
          <button onClick={connect} className="button">
            Connect
          </button>
        )}
      </div>
    </div>
  );
}

export default Hero;
