import React, { useEffect, useState, useRef } from "react";
import { GetApi } from "../services/GetApi";
import { Header } from "./UIcomponents/Header";
import { Footer } from "./UIcomponents/Footer";
import { GetPokemonId } from "../services/GetPokemonId";
import { useLocation } from "react-router-dom";
import { PaintTypes } from "./UIcomponents/UIservices/PaintTypes";
import "./styles/viewPkm.css";
import "./styles/drawStyles.css";

const Viewpkm = () => {
  let location = useLocation();
  let idPokemon = GetPokemonId(location.pathname);

  const [pokemon, setPokemon] = useState(null);

  const type1 = useRef();
  const type2 = useRef();
  const containerRef = useRef();

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonsFirstView = async () => {
      let dataPokemon = await GetApi(url + idPokemon);
      if (dataPokemon !== undefined) {
        setPokemon(dataPokemon[0]);
      } else {
        alert("Ooops, parece que estas buscando un pokemon que no existe");
      }
    };
    pokemonsFirstView();

    // eslint-disable-next-line
  }, [idPokemon]);

  useEffect(() => {
    if (pokemon !== null) {
      PaintTypes(
        containerRef,
        type1,
        type2,
        pokemon.types,
        pokemon.types.length
      );
    }
    // eslint-disable-next-line
  }, [pokemon]);

  console.log(pokemon);
  return (
    <>
      <Header />

      <section className="mainViewPkm">
        {pokemon != null ? (
          <>
            <article className="pokemonView center" ref={containerRef}>
              <h1>
                #{pokemon.id} {pokemon.name.toUpperCase()}
              </h1>
              <img
                src={pokemon.sprites.front_default}
                alt=""
                className="view-pokemon-img"
              />
            </article>
            <aside className="main-data-pkm">
              <div>
                <h3>Types</h3>
                <ul>
                  <li ref={type1} className="type-pkm">
                    {pokemon.types[0].type.name}{" "}
                  </li>
                  {pokemon.types[1] !== undefined && (
                    <li ref={type2} className="type-pkm">
                      {pokemon.types[1].type.name}
                    </li>
                  )}
                </ul>
              </div>
              <div className="stats">
                <h3>Stats</h3>
                <p>
                  <span className="green">HP:</span>{" "}
                  {pokemon.stats[0].base_stat}
                </p>
                <p>
                  <span className="red">Atack:</span>{" "}
                  {pokemon.stats[1].base_stat}{" "}
                </p>
                <p>
                  <span className="purple">Sp-atk:</span>{" "}
                  {pokemon.stats[4].base_stat}{" "}
                </p>
                <p>
                  <span className="blue">Defense:</span>{" "}
                  {pokemon.stats[2].base_stat}{" "}
                </p>
                <p>
                  <span className="rose">Sp-def:</span>{" "}
                  {pokemon.stats[3].base_stat}{" "}
                </p>
                <p>
                  <span className="silver">Speed:</span>{" "}
                  {pokemon.stats[5].base_stat}{" "}
                </p>
              </div>
            </aside>
          </>
        ) : (
          <h2 className="center">Cargando...</h2>
        )}
      </section>

      <Footer />
    </>
  );
};

export { Viewpkm };
