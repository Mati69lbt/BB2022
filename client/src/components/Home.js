import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacters } from "../action";
import Card from "./Card";
import Navbar from "./Navbar";
import Paginado from "./paginado";
import "./css/home.css";
import Loading from "./Loading";

export default function Home() {
  const dispatch = useDispatch();

  const allcharacters = useSelector((state) => state.characters);
  console.log(allcharacters);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, , setCharactersPerPage] = useState(8);
  const indexOfLastCharacters = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacters - charactersPerPage;
  const currrentCharacters = allcharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacters
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCharacters());
  }

  return (
    <div className="contenedor">
      <Navbar
        handleClick={handleClick}
        setCurrentPage={setCurrentPage}
        setOrder={setOrder}
      />
      <Paginado
        charactersPerPage={charactersPerPage}
        allcharacters={allcharacters.length}
        paginado={paginado}
      />
      <div className="todas">
        {!allcharacters.length ? (
          <Loading />
        ) : (
          currrentCharacters?.map((el) => {
            return (
              <div className="tarjeta">
                <Link to={"/details/" + el.id}>
                  <Card
                    name={el.name}
                    img={el.img}
                    nickname={el.nickname}
                    key={el.id}
                  />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
