import React, { useState } from "react";
import { RenderPkmData } from "./UIcomponents/RenderPkmData";
import { GetApi } from "../services/GetApi";
import { lengthValidation } from "../services/Validations";
import { Button } from "./UIcomponents/Button";
import { Header } from "./UIcomponents/Header";

import "./styles/searchPkm.css";

const Searchpkm = () => {
  const [pokemonToSearchName, setpokemonToSearchName] = useState("");
  const [pokemonToSearchId, setpokemonToSearchId] = useState("");
  const [dataPokemonByIdName, setdataPokemonByIdName] = useState([[]]);

  const SearchPkmById = async (e, pokemonToSearchId) => {
    e.preventDefault();

    if (lengthValidation(pokemonToSearchId)) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonToSearchId}`;
      const datapkm = await GetApi(url);

      try {
        if (datapkm[1] === null) setdataPokemonByIdName([datapkm[0]]);
        else setdataPokemonByIdName([]);
      } catch (err) {
        console.log(err);
        alert("Pokemon no encontrado");
      }
    } else alert("No puedes ingresar campos vacios");
  };
  const SearchPkmByName = async (e, pokemonToSearchName) => {
    e.preventDefault();
    if (lengthValidation(pokemonToSearchName)) {
      pokemonToSearchName = pokemonToSearchName.toLowerCase();
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonToSearchName}`;
      const datapkm = await GetApi(url);

      try {
        if (datapkm[1] === null) setdataPokemonByIdName([datapkm[0]]);
        else setdataPokemonByIdName([]);
      } catch (err) {
        console.log(err);
        alert("Pokemon no encontrado");
      }
    } else alert("No puedes ingresar campos vacios");
  };

  const searchRamdom = (e) => {
    let idRamdom = String(Math.floor(Math.random() * (899 - 1)) + 1);
    SearchPkmById(e, idRamdom);
  };
  return (
    <>
      <Header />
      <section className="section-main-search">
        <article>
          <h1 className="center titleSearch">Busca tu pokemon favorito</h1>
          <form className="form">
            <div>
              <input
                type="text"
                onChange={(e) => setpokemonToSearchName(e.target.value)}
                className="searchInput"
                placeholder="Buscar por nombre"
              />
              <Button
                event={(e) => SearchPkmByName(e, pokemonToSearchName)}
                classNames="buttonSearch"
                contentText=" 🔍 "
              ></Button>
            </div>
            <div>
              <input
                type="number"
                onChange={(e) => setpokemonToSearchId(e.target.value)}
                className="searchInput"
                placeholder="Buscar por id"
              />
              <Button
                event={(e) => SearchPkmById(e, pokemonToSearchId)}
                classNames="buttonSearch"
                contentText=" 🔍 "
              ></Button>
            </div>
            <div>
              <Button
                event={(e) => searchRamdom(e)}
                classNames="buttonSearch"
                contentText="¡Sorprendeme!"
              ></Button>
            </div>
          </form>
        </article>

        <article>
          <RenderPkmData data={dataPokemonByIdName[0]} />
        </article>
      </section>
    </>
  );
};

export { Searchpkm };
