import React, { useState } from "react";
import "./CardAdvice.css";
import PatterAdvice from "../../images/pattern-divider-desktop.svg";
import Dice from "../../images/icon-dice.svg";
import { useApiServices } from "../../services/useApiServices";

function CardAdvice() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };
  const { data } = useApiServices(clicked);
  if (!data) {
    return <div>Cargando datos...</div>;
  }
  return (
    <div className="container-advice">
      <h2 className="id-advice">ADVICE #{data.slip.id}</h2>
      <h1 className="text-advice">"{data.slip.advice}"</h1>
      <img
        src={PatterAdvice}
        alt="Pattern Divider"
        className="pattern-divider"
      />
      <button className="random-advice" onClick={handleClick}>
        <img src={Dice} alt="Dice" />
      </button>
    </div>
  );
}

export default CardAdvice;
