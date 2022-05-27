import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails } from "../action";

const Detail = (props) => {
  const dispatch = useDispatch();
  const myCharacter = useSelector((state) => state.detail);
  console.log(myCharacter);
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);

  return (
    <div>
      {myCharacter.length > 0 ? (
        <div>
          <h1>Soy: {myCharacter[0].name}</h1>
          <img
            src={myCharacter[0].img}
            alt="y eia?"
            width="300vh"
            height="400vh"
          />
          <h3>Me dicen: {myCharacter[0].nickname}</h3>
          <h3>Creo q estoy : {myCharacter[0].status}</h3>
          <h3>
            Nacido un :{" "}
            {myCharacter[0].birthday !== "Unknown"
              ? myCharacter[0].birthday
              : "Sabés que no lo sé..."}
          </h3>
          <h3>En realidad soy : {myCharacter[0].portrayed}</h3>
          <h3>
            Trabajo en:{" "}
            {!myCharacter[0].createdInDb
              ? myCharacter[0].trabajo + "  "
              : myCharacter[0].ocupas.map((el) => `${el.name}-`)}
          </h3>
          <h3>
            Lo mató:{" "}
            {myCharacter[0].responsible
              ? myCharacter[0].responsible
              : "sigo vivo"}
          </h3>
          <h3>
            Ultimas Palabras:{" "}
            {myCharacter[0].last_words
              ? myCharacter[0].last_words
              : "te dije q sigo vivo"}
          </h3>
          <ul>
            <h3>Los llevo a mejor vida a :</h3>
            {myCharacter[0].deaths_caused.length > 0 ? (
              myCharacter[0].deaths_caused.map((el) => (
                <li>
                  <h4>{el + ",  "}</h4>
                </li>
              ))
            ) : (
              <h4>no tengo ningun muerto en el placard</h4>
            )}
          </ul>
          <ul>
            <h3>Sus mejores frases:</h3>
            {myCharacter[0].quotes.length > 0 ? (
              myCharacter[0].quotes.map((el) => (
                <li>
                  <h4>{el + ",  "}</h4>
                </li>
              ))
            ) : (
              <h4>yo no dije nada</h4>
            )}
          </ul>
        </div>
      ) : (
        <h1>Hace un loading!!!! Matias!!!</h1>
      )}
      <Link to="/home">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default Detail;
