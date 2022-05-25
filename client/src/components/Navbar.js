import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterByStatus, filterCreated, orderByName } from "../action";
import "../components/css/xahora.css";
import SearchBar from "./SearchBar";

const Navbar = ({ handleClick, setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  function handleFilterStatus(e) {
    dispatch(filterByStatus(e.target.value));
  }
  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`);
  }
  return (
    <div className="navbar">
      <Link to="/character"> Crear Personaje</Link>

      <h1>¿Quién no vio esta Serie?</h1>
      <div>
        <select onChange={(e) => handleSort(e)}>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </select>
        <select onChange={(e) => handleFilterStatus(e)}>
          <option value="All">Todos</option>
          <option value="Alive">Vivo</option>
          <option value="Deceased">Muerto</option>
          <option value="Unknown">Desconocido</option>
          <option value="Presumed dead">Murió?</option>
        </select>
        <select onChange={(e) => handleFilterCreated(e)}>
          <option value="All">Todos</option>
          <option value="Created">Creados</option>
          <option value="api">Existente</option>
        </select>
      </div>
      <SearchBar />
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Navbar;
