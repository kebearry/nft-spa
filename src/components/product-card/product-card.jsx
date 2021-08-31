import * as React from "react";
import "./product-card.css";

function ProductCard(props) {
  return (
    <div className="clash-card barbarian">
      <div className="clash-card__image clash-card__image--barbarian">
        <img src={props.bao} alt="angry bao" />
      </div>
      <div className="clash-card__content">
        <div className="clash-card__level clash-card__level--barbarian">
          Level {props.level}
        </div>
        <div className="clash-card__unit-name">{props.title}</div>
        <div className="clash-card__unit-description">{props.description}</div>
      </div>
      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div className="one-third">
          <div className="stat">
            {props.socialLevel}
            <sup>/10</sup>
          </div>
          <div className="stat-value">Social</div>
        </div>

        <div className="one-third">
          <div className="stat">
            {props.intellectLevel}
            <sup>/10</sup>
          </div>
          <div className="stat-value">Intellect</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">
            10<sup>/10</sup>
          </div>
          <div className="stat-value">Fun</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
