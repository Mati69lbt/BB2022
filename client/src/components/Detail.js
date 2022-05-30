import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails } from "../action";
import "./css/xahora.css";
import Loading from "./Loading";

const Detail = (props) => {
  const dispatch = useDispatch();
  const myCharacter = useSelector((state) => state.detail);
  console.log(myCharacter);
  const aux = [];
  const first = () => {
    myCharacter[0].quotes.map((el) => aux.push(el));
  };
  first();
  console.log(aux);
  const { id } = props.match.params;

  const aleQ = (datos) => {
    if (!Array.isArray(datos)) {
      throw TypeError("debe ser arreglo");
    }
    if (!datos.length) {
      return null;
    }
    let indicador = Math.floor(Math.random() * datos.length);
    console.log(datos[indicador]);
    return datos[indicador];
  };
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);

  const quote = aleQ(aux);
  console.log(quote);
  return (
    <div>
      {myCharacter.length > 0 ? (
        <div className="all">
          <div className="col1">
            <h1>Hello! I am {myCharacter[0].name}!!!</h1>
            <img
              src={myCharacter[0].img}
              alt="y eia?"
              width="300vh"
              height="400vh"
            />
            <h3>
              They call me {myCharacter[0].nickname}, I was born on{" "}
              {myCharacter[0].birthday !== "Unknown"
                ? myCharacter[0].birthday
                : "...You know I don't know..."}{" "}
              and I think I'm {myCharacter[0].status}
            </h3>
          </div>
          <div className="col2">
            <h3>I'm actually: {myCharacter[0].portrayed}</h3>
            <h3>
              I perform as:{" "}
              {!myCharacter[0].createdInDb
                ? myCharacter[0].trabajo + "  "
                : myCharacter[0].ocupas.map((el) => `${el.name}-`)}
            </h3>

            {myCharacter[0].responsible ? (
              <h3>
                I hope you rot in hell {myCharacter[0].responsible}, you killed
                me...
              </h3>
            ) : (
              <h3>Knock on wood, I'm still alive</h3>
            )}

            {myCharacter[0].last_words ? (
              <h3>{myCharacter[0].last_words}</h3>
            ) : (
              <h3>I hope someone remembers my last words</h3>
            )}

            <ul>
              {myCharacter[0].deaths_caused.length > 0 ? (
                <h3>
                  Go see if they breathe... I turned them off:
                  {myCharacter[0].deaths_caused.map((el) => (
                    <li>
                      <h4>{el + ",  "}</h4>
                    </li>
                  ))}
                </h3>
              ) : (
                <h3>I don't have any dead in the closet</h3>
              )}
            </ul>
            <ul>
              {myCharacter[0].quotes.length > 0 ? (
                <h3>
                  Listen to these little things of mine:
                  <br />
                  {quote}
                  {/* {myCharacter[0].quotes.map((el) => (
                    <li>
                      <h4>{el + ",  "}</h4>
                    </li>
                  ))} */}
                </h3>
              ) : (
                <h3>I did not say anything</h3>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Detail;
