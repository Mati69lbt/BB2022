import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getOccupation, postCharacters } from "../action";

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
    laburo: [],
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
      laburo: [...input.laburo, e.target.value],
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
      portrayed: "",
      laburo: [],
    });
    history.push("/home");
  }
  function handleDelete(el) {
    setInput({
      ...input,
      laburo: input.laburo.filter((occ) => occ !== el),
    });
  }

  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>NickName: </label>
          <input
            type="text"
            value={input.nickname}
            name="nickname"
            onChange={(e) => handleChange(e)}
          />
          {errors.nickname && <p>{errors.nickname}</p>}
        </div>
        <div>
          <label>Cumpleaños: </label>
          <input
            type="text"
            value={input.birthday}
            name="birthday"
            onChange={(e) => handleChange(e)}
          />
          {errors.birthday && <p>{errors.birthday}</p>}
        </div>
        <div>
          <label>Interpretado Por: </label>
          <input
            type="text"
            value={input.portrayed}
            name="portrayed"
            onChange={(e) => handleChange(e)}
          />
          {errors.portrayed && <p>{errors.portrayed}</p>}
        </div>
        <div>
          <label>Foto: </label>
          <input
            type="text"
            value={input.img}
            name="img"
            onChange={(e) => handleChange(e)}
          />
          {errors.img && <p>{errors.img}</p>}
        </div>
        <div>
          <label>Status: </label>
          <label>
            <input
              type="checkbox"
              value="Alive"
              name="Alive"
              onChange={(e) => handleCheck(e)}
            />
            Alive
          </label>
          <label>
            <input
              type="checkbox"
              value="Deceased"
              name="Deceased"
              onChange={(e) => handleCheck(e)}
            />
            Deceased
          </label>
          <label>
            <input
              type="checkbox"
              value="Unknown"
              name="Unknown"
              onChange={(e) => handleCheck(e)}
            />
            Unknown
          </label>
          <label>
            <input
              type="checkbox"
              value="Presumed Dead"
              name="Presumed Dead"
              onChange={(e) => handleCheck(e)}
            />
            Presumed Dead
          </label>
        </div>
        <select onChange={(e) => handleSelect(e)}>
          {allOccupations.map((occ) => (
            <option value={occ.name}>{occ.name}</option>
          ))}
        </select>
        <ul>
          <li>{input.laburo.map((el) => el + " ,")}</li>
        </ul>
        <button type="submit">Create Character</button>
      </form>
      {input.laburo.map((el) => (
        <div>
          <p>{el}</p>
          <button onClick={() => handleDelete(el)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default CharacterCreate;
