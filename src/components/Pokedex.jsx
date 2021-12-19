import React, { useState, useEffect } from "react";
import { GetApi } from "../services/GetApi";
import { Header } from "./UI components/Header";
import { Footer } from "./UI components/Footer";
import "./styles/pokedex.css";
const Pokedex = () => {
  let url = "https://pokeapi.co/api/v2/";

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const pokemonsFirstView = async () => {
      let dataKanto = await GetApi(url + "pokemon/?offset=0&limit=151");

      let kantoPokemons = [];

      for (let i = 0; i < Object.keys(dataKanto[0].results).length; i++) {
        let pokemonKantoData = await GetApi(dataKanto[0].results[i].url);
        kantoPokemons.push(pokemonKantoData[0]);
      }
      setPokemons(kantoPokemons);
    };
    pokemonsFirstView();
    // eslint-disable-next-line
  }, []);

  const cambio = async (value) => {
    setPokemons([]);
    if (value === "kanto") {
      let dataKanto = await GetApi(url + "pokemon/?offset=0&limit=151");

      let kantoPokemons = [];

      for (let i = 0; i < Object.keys(dataKanto[0].results).length; i++) {
        let pokemonKantoData = await GetApi(dataKanto[0].results[i].url);
        kantoPokemons.push(pokemonKantoData[0]);
      }
      setPokemons(kantoPokemons);
    } else if (value === "jhoto") {
      let dataJhoto = await GetApi(url + "pokemon/?offset=151&limit=100");
      let jhotoPokemons = [];

      for (let i = 0; i < Object.keys(dataJhoto[0].results).length; i++) {
        let pokemonJhotoData = await GetApi(dataJhoto[0].results[i].url);
        jhotoPokemons.push(pokemonJhotoData[0]);
      }
      setPokemons(jhotoPokemons);
    }
  };

  return (
    <>
      <Header />

      <section className="main-pokedex">
        <select
          name="selectGeneration"
          id="selectGeneration"
          onChange={(e) => cambio(e.target.value)}
        >
          <option value="kanto">Kanto</option>

          <option value="jhoto">Jhoto</option>
        </select>
        {pokemons.length > 0 ? (
          <div className="pokemons-container">
            <ul>
              {pokemons.map((pokemon, id) => (
                <li key={id}>
                  <div className="pokemon-container">
                    <img src={pokemon.sprites.front_default} alt="" />{" "}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <h2 className="center">Cargando...</h2>
        )}
      </section>

      <Footer />
    </>
  );
};
export { Pokedex };
