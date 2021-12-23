import React, { useState, useEffect } from "react";
import { GetApi } from "../services/GetApi";
import { useChangeRegion } from "../hooks/useChangeRegion";
import { useFilterByTipe } from "../hooks/useFilterByType";
import { useOrderAZ } from "../hooks/useOrderAZ";
import { Header } from "./UIcomponents/Header";
import { Footer } from "./UIcomponents/Footer";
import { Button } from "./UIcomponents/Button";
import { Link } from "react-router-dom";
import "./styles/pokedex.css";
import { setBackground } from "./UIcomponents/UIservices/setBackground";
import charingPika from "./sources/charchingpikachu.gif";

const Pokedex = () => {
  let url = "https://pokeapi.co/api/v2/";

  const orderAZ = useOrderAZ;
  const ChangeRegion = useChangeRegion;
  const FilterByTipe = useFilterByTipe;

  const [pokemons, setPokemons] = useState([]);
  const [order, setOrder] = useState(false);

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
            <h1 className="center">POKEDEX</h1>
            <h2 className="center">Filtrar por</h2>
            <form className="form-pokedex center">
              <select
                name="selectGeneration"
                id="selectGeneration"
                onChange={(e) =>
                  ChangeRegion(e.target.value, setPokemons, url, setOrder)
                }
                className="select-css"
              >
                <option value="">Region</option>
                <option value="kanto">Kanto</option>
                <option value="jhoto">Johto</option>
                <option value="hoenn">Hoen</option>
                <option value="sinnoh">Sinnoh</option>
                <option value="unova">Teselia</option>
                <option value="kalos">Kalos</option>
                <option value="alola">Alola</option>
                <option value="galar">Galar</option>
              </select>

              <select
                name="selectType"
                id="selectType"
                className="select-css"
                onChange={(e) =>
                  FilterByTipe(e.target.value, setPokemons, setOrder)
                }
              >
                <option value="">Tipo</option>
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
              <Button
                contentText="Megas y formas especiales"
                classNames="az-btn center"
                event={(e) =>
                  ChangeRegion("especial", setPokemons, url, setOrder)
                }
              ></Button>
              <Button
                contentText="Ordenar AZ"
                classNames="az-btn"
                event={(e) => orderAZ(e, setPokemons, pokemons, order)}
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
