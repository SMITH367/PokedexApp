import React, { useEffect, useState, useRef } from "react";
import { GetApi } from "../services/GetApi";
import { Header } from "./UIcomponents/Header";
import { Footer } from "./UIcomponents/Footer";
import { GetPokemonId } from "../services/GetPokemonId";
import { useLocation } from "react-router-dom";
import { PaintTypes } from "./UIcomponents/UIservices/PaintTypes";
import { Link } from "react-router-dom";
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

  return (
    <>
      <Header />

      <section className="mainViewPkm">
        {pokemon != null ? (
          <>
            <Link className="toDex" to="/pokedex">
              <p className="center">Regresar</p>
            </Link>

            <article className="pokemonView center" ref={containerRef}>
              <h1 className="pkm-presentation center">
                #{pokemon.id} {pokemon.name.toUpperCase()}
              </h1>
              <img
                src={pokemon.sprites.front_default}
                alt=""
                className="view-pokemon-img"
              />
            </article>
            <h2 className="center">Informacion Basica</h2>
            <aside className="main-data-pkm center">
              <div>
                <h3>Types</h3>
                <ul className="center">
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
              <div className="stats center">
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
                  <span className="blue">Def:</span>{" "}
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
              <div className="stats">
                <h3>Habilidades</h3>
                {pokemon.abilities.length > 1 ? (
                  <>
                    <p> {pokemon.abilities[0].ability.name}</p>
                    <p>{pokemon.abilities[1].ability.name}</p>
                    <p>Experiencia base: {pokemon.base_experience}</p>
                  </>
                ) : (
                  <>
                    <p> {pokemon.abilities[0].ability.name}</p>{" "}
                  </>
                )}
              </div>
              <div className="stats">
                <h3>Fisico</h3>
                <p>
                  <span>Altura:</span> {pokemon.height}{" "}
                </p>
                <p>
                  <span>Peso: </span>
                  {pokemon.weight}
                </p>
              </div>

              <div className="moves center">
                <h3 className="center">Movimientos</h3>

                <ul className="moves-cont">
                  {pokemon.moves.length <= 0 ? (
                    <li className="move">No tiene movimientos</li>
                  ) : (
                    <>
                      <li className="move center">
                        {pokemon.moves[0].move.name}{" "}
                      </li>
                      <li className="move center">
                        {pokemon.moves[1].move.name}{" "}
                      </li>
                      <li className="move center">
                        {pokemon.moves[2].move.name}{" "}
                      </li>
                      <li className="move center">
                        {pokemon.moves[3].move.name}{" "}
                      </li>
                    </>
                  )}
                </ul>
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
