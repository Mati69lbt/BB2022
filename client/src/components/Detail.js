import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dismountDetail, getDetails } from "../action";
import "./css/detail.css";
import Loading2 from "./Loading2";

const Detail = (props) => {
  const dispatch = useDispatch();
  const myCharacter = useSelector((state) => state.detail);
  const { id } = props.match.params;
  const [quote, setQuote] = useState("");
  const [death, setDeath] = useState("");

  var aleatorio = Math.floor(Math.random() * 57);

  var a = [];
  if (myCharacter.length > 0) {
    myCharacter[0].quotes.map((el) => a.push(el));
  }

  const aleQ = (datos) => {
    if (!Array.isArray(datos)) {
      throw TypeError("debe ser arreglo");
    }
    if (!datos.length) {
      return null;
    }
    let indicador = Math.floor(Math.random() * datos.length);
    return datos[indicador];
  };

  function handleChange() {
    setQuote(aleQ(a));
  }

  var z = [];
  if (myCharacter.length > 0) {
    myCharacter[0].deaths_caused.map((el) => z.push(el));
  }
  const aleD = (datos) => {
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

  function handleChangeDeath() {
    setDeath(aleD(z));
  }

  useEffect(() => {
    dispatch(getDetails(id));
    return () => {
      dispatch(dismountDetail());
    };
  }, [id, dispatch]);

  return (
    <div className="cont">
      {myCharacter.length > 0 ? (
        <div className="all">
          <div className="col1">
            <div className="but">
              {parseInt(id) === 1 ? null : (
                <Link to={"/details/" + (parseInt(id) - 1)}>
                  <button className="myButton">Prev</button>
                </Link>
              )}
              <Link to="/home">
                <button className="myButton">Back</button>
              </Link>
              {parseInt(id) === 116 ? null : (
                <Link to={"/details/" + (parseInt(id) + 1)}>
                  <button className="myButton">Next</button>
                </Link>
              )}
              <Link to={"/details/" + aleatorio}>
                <button className="myButton">Ramdom</button>
              </Link>
            </div>
            <h1>Hello! I am {myCharacter[0].name}!!!</h1>
            <img
              src={myCharacter[0].img}
              alt="y eia?"
              width="250vh"
              height="350vh"
            />
            <h2>
              They call me {myCharacter[0].nickname},<br></br>i was born on{" "}
              {myCharacter[0].birthday !== "Unknown"
                ? myCharacter[0].birthday
                : "...You know I don't know..."}{" "}
              and i think i'm {myCharacter[0].status}
            </h2>
          </div>
          <div className="col2">
            <h2>I'm actually: {myCharacter[0].portrayed}</h2>
            <h2>
              I perform as:{" "}
              {!myCharacter[0].createdInDb
                ? myCharacter[0].occupations + "  "
                : myCharacter[0].occupations.map((el) => `${el.name}-`)}
            </h2>

            {myCharacter[0].responsible ? (
              <h2>
                I hope you rot in hell {myCharacter[0].responsible}, you killed
                me...
              </h2>
            ) : (
              <h2>Knock on wood, I'm still alive</h2>
            )}

            {myCharacter[0].last_words ? (
              <h2>{myCharacter[0].last_words}</h2>
            ) : (
              <h2>I hope someone remembers my last words</h2>
            )}

            {myCharacter[0].deaths_caused.length > 0 ? (
              <div>
                <h2>
                  Go see if they breathe... I turned them off:
                  {/* {myCharacter[0].deaths_caused.map((el) => (
                    <li>
                      <h4>{el + ",  "}</h4>
                    </li>
                  ))} */}
                </h2>
                <h2>{death}</h2>
                <button
                  onClick={() => handleChangeDeath()}
                  className="myButton"
                >
                  Another one?
                </button>
              </div>
            ) : (
              <h2>I don't have any dead in the closet</h2>
            )}

            {myCharacter[0].quotes.length > 0 ? (
              <div>
                <h2>
                  Listen to these little things of mine:
                  {/* {myCharacter[0].quotes.map((el) => (
                    <li>
                      <h4>{el + ",  "}</h4>
                    </li>
                  ))} */}
                </h2>
                <h2>"...{quote}..."</h2>
                <button onClick={() => handleChange()} className="myButton">
                  New Quote
                </button>
              </div>
            ) : (
              <h2>I did not say anything</h2>
            )}
          </div>
        </div>
      ) : (
        <Loading2 />
      )}
    </div>
  );
};

export default Detail;
