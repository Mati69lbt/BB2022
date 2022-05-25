import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCharacters } from "../action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSumit(e) {
    e.preventDefault();
    if (name !== "") {
      dispatch(getNameCharacters(name));
      setName({
        name: "",
      });
    } else {
      alert("Ingresar Personaje");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSumit(e)}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
