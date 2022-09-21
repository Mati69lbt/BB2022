import React from "react";
import "./css/loading.css";
import p1 from "./css/assets/p1";

const ale = (datos) => {
  if (!Array.isArray(datos)) {
    throw TypeError("debe ser arreglo");
  }
  if (!datos.length) {
    return null;
  }
  let indicador = Math.floor(Math.random() * datos.length);
  return datos[indicador];
};

const z = ale(p1);

const Loading = () => {
  return (
    <div className="load">
      <img
        src={z}
        alt="mostramela!"
        width="700vh"
        height="350vh"
        className="iii"
      />
    </div>
  );
};

export default Loading;
