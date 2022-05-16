import React from "react";

export default function Paginado({
    // importo por props los estados y la constante
  characterPerPage,
  allCharacters,
  paginado,
}) {
  const pageNumbers = []; 
    // este for me va a dar el numero de paginas= todos los personajes divididos la cantidad de personajes que quiero por pagina
  for (let i = 0; i <= Math.ceil(allCharacters / characterPerPage); i++) {
    pageNumbers.push(i+1);
  }
  return (
      // se renderiza la cantidad de paginas con sus respectivos personajes
    <nav>
      <ul className="paginado " key="paginado">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className="number" key={number}>
              <a onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
