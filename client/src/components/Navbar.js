import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleClick }) => {
  return (
    <div>
      <Link to="/character"> Crear Personaje</Link>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reset
      </button>
      <div>
        <select>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </select>
        <select>
          <option value="All">Todos</option>
          <option value="Alive">Vivo</option>
          <option value="Deceased">Muerto</option>
          <option value="Unknown">Desconocido</option>
          <option value="Presumed dead">Murió?</option>
        </select>
        <select>
          <option value="All">Todos</option>
          <option value="created">Creados</option>
          <option value="api">Existente</option>
        </select>
      </div>
      <h1>¿Quién no vio esta Serie?</h1>
    </div>
  );
};

export default Navbar;
