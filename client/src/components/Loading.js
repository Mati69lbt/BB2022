import React from "react";
import "./css/xahora.css";
import p1 from "./css/assets/p1";

const ale = (datos) => {
  if (!Array.isArray(datos)) {
    throw TypeError("debe ser arreglo");
  }
  if (!datos.length) {
    return null;
  }
  let indicador = Math.floor(Math.random() * datos.length);
  console.log(datos[indicador]);
  return datos[indicador];
};

const z = ale(p1);
console.log(z);

const Loading = () => {
  return (
    <div className="load">
      <img src={z} alt="mostramela!" />
    </div>
  );
};

export default Loading;
