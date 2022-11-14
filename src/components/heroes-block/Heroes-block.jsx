import React from "react";
import Heroes from "./heroes";
import HeroesInformation from "./heroes-information";
import './heroes-block.css'

const HeroesBlock = () => {
  return (
    <div className="heroesBlockPossition">
      <Heroes />
      <HeroesInformation />
    </div>
  );
};

export default HeroesBlock;
