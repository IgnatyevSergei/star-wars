import React from "react";
import image from "./assets/c3pol.png";
import "./heroes-information.css";

class HeroesInformation extends React.Component {
  state = {
    hero: {
      name: "C-3PO",
      gender: "n/a",
      birthYear: "112BBY",
      eyeColor: "yellow",
    },
  };

  render() {
    const { name, gender, birthYear, eyeColor } = this.state.hero;
     
    return (
      <div className="wrapper">
        <img className="img-thumbnail float-start size" src={image} alt="" />
        <h4>{name}</h4>
        <ul className="list-group list-group-flush detail">
          <li className="list-group-item">
            <span className="term">Gender:</span>
            <span className="term">{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year:</span>
            <span className="term">{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color:</span>
            <span className="term">{eyeColor}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeroesInformation;
