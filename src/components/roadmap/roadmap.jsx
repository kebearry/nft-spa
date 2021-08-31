import * as React from "react";
import "./roadmap.css";

function Roadmap() {
  return (
    <div id="web-roadmap" className="section-container">
      <div className="about-text">
        <h1>
          <span>The future of BAOs</span>
        </h1>
      </div>
      <ul className="timeline">
        <li className="event" data-date="OCT">
          <h3>Launch 1st Generation BAOs</h3>
          <p>
            Get here on time, it's first come first serve. Be late, get turned
            away.
          </p>
        </li>
        <li className="event" data-date="DEC">
          <h3>Community ETH Raffle</h3>
          <p>
            Once we sell out 50% of BAOs we’ll be doing a community exclusive
            raffle to win some Ethereum!
          </p>
        </li>
        <li className="event" data-date="FEB">
          <h3>Community ETH Raffle</h3>
          <p>
            Once we sell out 100% of BAOs we’ll be doing a community exclusive
            raffle to win some more Ethereum!
          </p>
        </li>
        <li className="event" data-date="JUNE">
          <h3>Launch 2nd Generation BAOs</h3>
          <p>
            With your inputs from the 1st generation of BAOs, we make the 2nd
            generation even more to your liking.
          </p>
        </li>
        <li className="event" data-date="SEP">
          <h3>Merch Store & Giveaway!</h3>
          <p>
            All the cool merchandises you can imagine, and you may be lucky to
            grab one for free!
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Roadmap;
