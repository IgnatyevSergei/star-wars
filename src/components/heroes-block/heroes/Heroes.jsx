import React from "react";
import "../heroes/heroes.css";

const heroes = [
  { name: "Luke Skywalker", id: 1 },
  { name: "C-3PO", id: 2 },
  { name: "R2-D2", id: 3 },
  { name: "Darth Vader", id: 4 },
  { name: "Lela Organa", id: 5 },
  { name: "Owen Lars", id: 6 },
  { name: "Beru Whitesun lars", id: 7 },
  { name: "R5-D4", id: 8 },
  { name: "Biggs Darklighter", id: 9 },
  { name: "Obi-Wan Kenobi", id: 10 },
];

const Heroes = () => {
  const heroesName = heroes.map(({ name, id }) => {
    return (
      <li className="list-group-item term" key={id}>
        {name}
      </li>
    );
  });

  return <ul className="list-group list-group-flush detail">{heroesName}</ul>;
};

export default Heroes;
