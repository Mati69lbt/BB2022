import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getOccupation, postCharacters } from "../action";
import "./css/formulario.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "se requiere Nombre";
  } else if (!input.nickname) {
    errors.nickname = "se requiere Nickname";
  } else if (!input.birthday) {
    errors.birthday = "se requiere Fecha de Cumpleaños";
  } else if (!input.portrayed) {
    errors.portrayed = "se requiere Saber quien Interpreta este Personaje";
  } else if (!input.img) {
    errors.img = "se requiere Imagen";
  }
  return errors;
}

const CharacterCreate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const allOccupations = useSelector((state) => state.occupations);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    nickname: "",
    birthday: "",
    img: "",
    portrayed: "",
    status: "",
    quotes: "",
    occupations: [],
  });

  useEffect(() => {
    dispatch(getOccupation());
  }, [dispatch]);

  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        status: e.target.value,
      });
    }
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    setInput({
      ...input,
      occupations: [...input.occupations, e.target.value],
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postCharacters(input));
    alert("Personaje Creado con Exito");
    setInput({
      name: "",
      nickname: "",
      birthday: "",
      img: "",
      status: "",
      quotes: "",
      portrayed: "",
      occupations: [],
    });
    history.push("/home");
  }
  function handleDelete(el) {
    setInput({
      ...input,
      occupations: input.occupations.filter((occ) => occ !== el),
    });
  }

  return (
    <body className="body">
      <Link to="/home">
        <button>Back</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="form_container">
          <div className="form_group">
            <input
              type="text"
              id="name"
              className="form_input"
              value={input.name}
              placeholder=" "
              name="name"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            <label className="form_label" for="name">
              Name{" "}
            </label>
            <span className="form_line"></span>
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className="form_group">
            <input
              type="text"
              id="nickname"
              className="form_input"
              value={input.nickname}
              placeholder=" "
              autoComplete="off"
              name="nickname"
              onChange={(e) => handleChange(e)}
            />
            <label className="form_label" for="nickname">
              NickName{" "}
            </label>
            <span className="form_line"></span>
            {errors.nickname && <p>{errors.nickname}</p>}
          </div>

          <div className="form_group">
            <input
              type="text"
              id="birthday"
              className="form_input"
              placeholder=" "
              value={input.birthday}
              name="birthday"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            <label className="form_label" for="birthday">
              Birthday{" "}
            </label>
            <span className="form_line"></span>
            {errors.birthday && <p>{errors.birthday}</p>}
          </div>

          <div className="form_group">
            <input
              type="text"
              id="inter"
              className="form_input"
              placeholder=" "
              value={input.portrayed}
              autoComplete="off"
              name="portrayed"
              onChange={(e) => handleChange(e)}
            />
            <label className="form_label" for="inter">
              Interpreted by{" "}
            </label>
            <span className="form_line"></span>
            {errors.portrayed && <p>{errors.portrayed}</p>}
          </div>

          <div className="form_group">
            <input
              type="text"
              id="quotes"
              className="form_input"
              placeholder=" "
              value={input.quotes}
              autoComplete="off"
              name="quotes"
              onChange={(e) => handleChange(e)}
            />
            <label className="form_label" for="inter">
              Quotes{" "}
            </label>
            <span className="form_line"></span>
          </div>

          <div className="form_group">
            <input
              type="text"
              id="img"
              className="form_input"
              placeholder=" "
              value={input.img}
              autoComplete="off"
              name="img"
              onChange={(e) => handleChange(e)}
            />
            <label className="form_label" for="img">
              Picture{" "}
            </label>
            <span className="form_line"></span>
            {errors.img && <p>{errors.img}</p>}
          </div>
        </div>
        <div className="status">
          <div>
            <label>
              <input
                id="sta"
                type="checkbox"
                value="Alive"
                name="Alive"
                onChange={(e) => handleCheck(e)}
              />
              Alive
            </label>
            <br />
            <label>
              <input
                id="sta"
                type="checkbox"
                value="Deceased"
                name="Deceased"
                onChange={(e) => handleCheck(e)}
              />
              Deceased
            </label>
            <br />
            <label>
              <input
                id="sta"
                type="checkbox"
                value="Unknown"
                name="Unknown"
                onChange={(e) => handleCheck(e)}
              />
              Unknown
            </label>
            <br />
            <label>
              <input
                id="sta"
                type="checkbox"
                value="Presumed Dead"
                name="Presumed Dead"
                onChange={(e) => handleCheck(e)}
              />
              Presumed Dead
            </label>

            <label for="sta">Status </label>
          </div>
        </div>

        <div className="form_group">
          <select onChange={(e) => handleSelect(e)}>
            {allOccupations.map((occ) => (
              <option value={occ.name}>{occ.name}</option>
            ))}
          </select>
          <span className="form_line"></span>
        </div>
        <ul>
          <li>{input.occupations.map((el) => el + " ,")}</li>
        </ul>

        <button type="submit" className="submit">
          Create Character
        </button>
      </form>

      {input.occupations.map((el) => (
        <div>
          <p>{el}</p>
          <button onClick={() => handleDelete(el)}>X</button>
        </div>
      ))}
    </body>
  );
};

export default CharacterCreate;
