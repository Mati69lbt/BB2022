import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCharacterByStatus,
  FilterCreated,
  getCharacters,
  orderByName,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";


export default function Home() {
  const dispatch = useDispatch();
  // es esta constante traeme todo lo q esta en el estado de characters
  const allCharacters = useSelector((state) => state.characters);

  // estados locales:
  // un estado con la pagina actual y un estado que setee la pagina actual con su UseState en 1 porque arranca por la primera pagina
  const [currentPage, setCurrentPage] = useState(1);
  // un estado con los personajes por pagina y un estado que setee los personajes por pagina con un useState con la cantidad de personajes por pagina que quieras, en este caso nos piden 6.
  const [charactersPerPage, setCharactersPerPage] = useState(6);
  // creamos el indice del ultimo personaje
  const indexOflastCharacter = currentPage * charactersPerPage; // 6
  // creamos el indice del primer personaje
  const indexOfFirstCharacter = indexOflastCharacter - charactersPerPage; // 0
  // creamos una constante con los personajes en la pagina actual
  const currentCharacters = allCharacters.slice(
    indexOfFirstCharacter,
    indexOflastCharacter
  );
//
const [order, setOrder] = useState('')
  // declaramos la constante de paginado
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  function handClick(e) {
    e.preventDefault();
    dispatch(getCharacters()); // resetea
  }
  function handleFIlterStatus(e) {
    dispatch(filterCharacterByStatus(e.target.value));
  }
  function handleFilterCreated(e) {
    dispatch(FilterCreated(e.target.value));
  }
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }
  return (
    <div>
      <Link to="/character"><h3>Crear Personaje</h3></Link>
      <h1>Nosotros, Breaking Bad</h1>
      <button
        onClick={(event) => {
          handClick(event);
        }}
      >
        volver a cargar todos los personajes
      </button>
      <div>
        <select onChange={(e) => handleSort(e)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select onChange={(e) => handleFIlterStatus(e)}>
          <option value="all">Todos</option>
          <option value="Alive">Vivo</option>
          <option value="Deceased">Muerto</option>
          <option value="Unknown">Desconocido</option>
          <option value="Presumed dead">Probablemente Muerto</option>
        </select>
        <select onChange={(e) => handleFilterCreated(e)}>
          <option value="all">Todos</option>
          <option value="created">Creados</option>
          <option value="api">Existentes</option>
        </select>
        <Paginado
          characterPerPage={charactersPerPage}
          allCharacters={allCharacters.length}
          paginado={paginado}
        />
        <SearchBar/>
        {
          // aca trajimos todo lo de CARD
          currentCharacters &&
            currentCharacters.map((c) => {
              return (
                <fragment>
                  <Link to={"/home/" + c.id}>
                    <Card
                      name={c.name}
                      image={c.image}
                      nickname={c.nickname}
                      key={c.id}
                    />
                  </Link>
                </fragment>
              );
            })
        }
      </div>
    </div>
  );
}

// las options son:
// [ ] Botones/Opciones para filtrar por status y por personaje existente o agregado por nosotros
// [ ] Boton/Opcion para ordenar tanto ascendentemente como descendentemente los personajes por orden alfabético
