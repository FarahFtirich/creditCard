import React from "react";

const Card = ({ nom, exp, num }) => {
  return (
    <div className="comp card">
      <div className="card-cnt">
        <div className="heading">
          <img
            id="puce"
            alt="puce"
            src="https://img.icons8.com/officel/2x/sim-card-chip.png"
          ></img>
          <h1>Visa Card</h1>
        </div>
        <h1>{num}</h1>
        <h3>{exp}</h3>
        <h2 >{nom}</h2>
        
        <img
            id="master"
            alt="master"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
          ></img>
      </div>
    </div>
  );
};

export default Card;
