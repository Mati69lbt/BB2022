// [ ] Área donde se verá el listado de personajes. Deberá mostrar su:
// Imagen
// Nombre
// Nickname

import React from "react";

export default function Card({ name, image, nickname }) {
  return (
    <p>
      <h3>{name}</h3>      
      <img src={image} alt="img not found" width="200px" height="250px" />
      <h5>{nickname}</h5>
      <hr/>
    </p>
  );
}
