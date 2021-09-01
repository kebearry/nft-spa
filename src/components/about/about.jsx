import * as React from "react";
import "./about.css";
import baos from "../../assets/baos.png";

function About() {
  return (
    <div id="web-about" className="section-container page-section-container">
      <div className="about-text">
        <h1><span>What are BAOs?</span></h1>
        <p>
          BAOs are a collection of programmatically, randomly generated Non
          Fungible Tokens (NFTs) on the Ethereum blockchain. The 1st generation
          consists of 13,000 randomly assembled BAOs from over 300k unique
          attributes. All BAOs are cool, but there will be the one you fall in
          love at first sight, make that yours.
        </p>
      </div>
      <img src={baos} alt="bao collection" />
    </div>
  );
}

export default About;
