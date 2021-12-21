import React, { useState, useEffect } from "react";
import { GetApi } from "../services/GetApi";
import { ChangeRegion } from "../services/ChangeRegion";
import { FilterByTipe } from "../services/FilterByType";
import { Header } from "./UIcomponents/Header";
import { Footer } from "./UIcomponents/Footer";
import { Button } from "./UIcomponents/Button";
import { Link } from "react-router-dom";
import "./styles/pokedex.css";
import { setBackground } from "./UIcomponents/UIservices/setBackground";
import charingPika from "./sources/charchingpikachu.gif";

const Pokedex = () => {
  let url = "https://pokeapi.co/api/v2/";

  const [pokemons, setPokemons] = useState([]);
  const [pokemonsToOrder, setPokemonsToOrder] = useState([]);

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

  const orderAZ = (e) => {
    e.preventDefault();
    console.log("hola");
  };

  return (
    <>
      <Header />
      <div className="main-pokedex">
        {pokemons.length > 0 ? (
          <div>
            <h1 className="center">POKEDEX</h1>
            <h2 className="center">Filtrar por</h2>
            <form className="form-pokedex center">
              <div>
                <label htmlFor="selecGeneration">Region </label>
                <select
                  name="selectGeneration"
                  id="selectGeneration"
                  onChange={(e) =>
                    ChangeRegion(e.target.value, setPokemons, url)
                  }
                  className="select-css"
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
              <div>
                <label htmlFor="selecGeneration">Tipo </label>
                <select
                  name="selectType"
                  id="selectType"
                  className="select-css"
                  onChange={(e) => FilterByTipe(e.target.value, setPokemons)}
                >
                  <option value="">---</option>
                  <option value="fire">Fuego</option>
                  <option value="water">Agua</option>
                  <option value="grass">Planta</option>
                  <option value="normal">Normal</option>
                  <option value="bug">Bicho</option>
                  <option value="poison">Veneno</option>
                  <option value="flying">Volador</option>
                  <option value="psychic">Psiquico</option>
                  <option value="fighting">Lucha</option>
                  <option value="ice">Hielo</option>
                  <option value="rock">Roca</option>
                  <option value="fairy">Hada</option>
                  <option value="ground">Tierra</option>
                  <option value="steel">Acero</option>
                  <option value="ghost">Fantansma</option>
                  <option value="dragon">Dragon</option>
                  <option value="electric">Electrico</option>
                  <option value="dark">Siniestro</option>
                </select>
              </div>
              <Button
                contentText="AZ"
                classNames="az-btn"
                event={(e) => orderAZ(e)}
              ></Button>
            </form>
            <div className="pokemons-cont center">
              {pokemons.map((pokemon, id) => (
                <div
                  className="pokemon-dex center"
                  key={id}
                  onLoad={(e) => setBackground(pokemon.types[0].type.name, e)}
                >
                  <div>
                    <h3>#{pokemon.id}</h3>
                    <img
                      src={pokemon.sprites.front_default}
                      alt=""
                      className="img-pokemon-dex"
                    />
                    <p>{pokemon.name}</p>
                  </div>
                  <div className="toview-cont">
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
