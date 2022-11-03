import React, { useState, useEffect } from "react";
import "./styles.css";
import { buttons } from "./data";
import { getPokemon, filterPokemon } from "../services/services";
export default function App() {
  const [filtredPokemon, setFiltredPokemon] = useState(null);
  useEffect(() => {
    setFiltredPokemon(getPokemon());
  }, []);

  function handlePokemon(e) {
    let typePokemon = e.target.value;
    typePokemon !== "all"
      ? setFiltredPokemon(filterPokemon(typePokemon))
      : setFiltredPokemon(getPokemon());
  }

  return (
    <>
      {buttons &&
        buttons.map((type, index) => (
          <>
            <button key={index} value={type.value} onClick={handlePokemon}>
              {type.name}
            </button>
          </>
        ))}

      {filtredPokemon &&
        filtredPokemon.map(type => (
          <ul key={type.id}>
            <li>{type.nome}</li>
          </ul>
        ))}
    </>
  );
}
