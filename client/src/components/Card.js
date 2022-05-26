import { React } from "react";
import "./css/xahora.css";

export default function Card({ name, img, nickname }) {
  return (
    <div className="carta">
      <img src={img} alt="imagen" width="200vh" height="250vh" />
      <div className="texto">
        <h3>{name}</h3>
        <h5>{nickname}</h5>
      </div>
    </div>
  );
}
