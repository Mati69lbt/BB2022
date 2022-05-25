import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails } from "../action";

const Detail = (props) => {
  const dispatch = useDispatch();
  const myCharacter = useSelector((state) => state.detail);
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);

  return (
    <div>
      {myCharacter.length > 0 ? (
        <div>
          <h1>Soy: {myCharacter[0].name}</h1>
          <img src={myCharacter[0].img} alt="y eia?" />
          <h3>Me dicen: {myCharacter[0].nickname}</h3>
          <h3>Creo q estoy : {myCharacter[0].status}</h3>
          <h3>Nacido un : {myCharacter[0].birthday}</h3>
          <h3>En realidad soy : {myCharacter[0].portrayed}</h3>
          <h4>
            Trabajo en:{" "}
            {!myCharacter[0].createdInDb
              ? myCharacter[0].trabajo + " "
              : myCharacter[0].ocupas.map((el) => el.name + " ")}
          </h4>
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
