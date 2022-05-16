import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../actions";
import "../App.css";

export default function Detail(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(getDetail(id));
    return () =>
      dispatch({
        type: "GET_DETAILS",
        payload: [],
      });
  }, [id, dispatch]);

  const myCharacter = useSelector((state) => state.detail);

  return (
    <div>
      {myCharacter.length > 0 ? (
        <div>
          <h1>Soy {myCharacter[0].name}</h1>
          <img
            className="foto"
            src={
              myCharacter[0].image ? (
                myCharacter[0].image
              ) : (
                <p>Imagen no encontrada</p>
              )
            }
          />
          <h2>Status: {myCharacter[0].status}</h2>
          <p>
            {" "}
            Cumple:<b> {myCharacter[0].birthday} </b>
          </p>
          <h4>
            Ocupaciones:
            {!myCharacter[0].createdInDb
              ? myCharacter[0].ocupation + " "
              : myCharacter[0].ocupation.map((el) => el.name + " ")}
          </h4>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/home">
        <button>Volver</button>
      </Link>
    </div>
  );
}

