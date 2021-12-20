import React, { useState, useEffect } from "react";
import { GetApi } from "../services/GetApi";
import { ChangeRegion } from "../services/ChangeRegion";
import { Header } from "./UI components/Header";
import { Footer } from "./UI components/Footer";
import { Link } from "react-router-dom";
import "./styles/pokedex.css";
import charingPika from "./sources/charchingpikachu.gif";

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

  return (
    <>
      <Header />
      <div className="main-pokedex">
        {pokemons.length > 0 ? (
          <div>
            <div>
              <label htmlFor="selecGeneration">Filtrar por region</label>
              <select
                name="selectGeneration"
                id="selectGeneration"
                onChange={(e) => ChangeRegion(e.target.value, setPokemons, url)}
              >
                <option value="">---</option>
                <option value="kanto">Kanto</option>
                <option value="jhoto">Johto</option>
                <option value="hoenn">Hoen</option>
                <option value="sinnoh">Sinnoh</option>
                <option value="unova">Teselia</option>
                <option value="kalos">Kalos</option>
                <option value="alola">Alola</option>
                <option value="galar">Galar</option>
              </select>
            </div>
            <div className="pokemons-cont center">
              {pokemons.map((pokemon, id) => (
                <div className="pokemon-dex center" key={id}>
                  <div>
                    <img
                      src={pokemon.sprites.front_default}
                      alt=""
                      className="img-pokemon-dex"
                    />
                    <p>{pokemon.name}</p>
                    <Link to={`/viewpkm/${pokemon.id}`} className="goToview">
                      Ver
                    </Link>
                  </div>
                </div>
              ))}
              <Footer />
            </div>
          </div>
        ) : (
          <div className="charging center">
            <img src={charingPika} className="charging-img" alt="" />
            <p className="charging-text">Cargando...</p>
          </div>
        )}
      </div>
    </>
  );
};
export { Pokedex };
