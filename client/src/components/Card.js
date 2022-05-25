import { React } from "react";

export default function Card({ name, img, nickname }) {
  return (
    <div>
      <img src={img} alt="imagen" width="200px" height="250px" />
      <h3>{name}</h3>
      <h5>{nickname}</h5>
    </div>
  );
}
