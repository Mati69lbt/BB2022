import React from "react";
import "./css/xahora.css";

const Paginado = ({ charactersPerPage, allcharacters, paginado }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allcharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="numfila">
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <div>
                <li className="number" key={number}>
                  <button
                    className="css-button-rounded--blue"
                    onClick={() => paginado(number)}
                  >
                    {number}
                  </button>
                </li>
              </div>
            );
          })}
      </ul>
    </nav>
  );
};

export default Paginado;
