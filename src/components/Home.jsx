import React from "react";
import { Header } from "./UIcomponents/Header";
import { Footer } from "./UIcomponents/Footer";
import { Button } from "./UIcomponents/Button";
import { Link } from "react-router-dom";
import { ChangeRegion } from "../services/ChangeRegion";
import "./styles/home.css";
import pikachuHome from "./sources/pikachuHome.png";

const Home = () => {
  //loading all pokemons first time

  let url = "https://pokeapi.co/api/v2/";

  ChangeRegion("kanto", (pkm) => {}, url);
  ChangeRegion("jhoto", (pkm) => {}, url);
  ChangeRegion("hoenn", (pkm) => {}, url);
  ChangeRegion("sinnoh", (pkm) => {}, url);
  ChangeRegion("unova", (pkm) => {}, url);
  ChangeRegion("kalos", (pkm) => {}, url);
  ChangeRegion("alola", (pkm) => {}, url);
  ChangeRegion("galar", (pkm) => {}, url);
  ChangeRegion("special", (pkm) => {}, url);
  return (
    <>
      <Header />
      <section className="main-home">
        <article className="home-logo-cont center">
          <img src={pikachuHome} alt="pikachuHome" className="home-logo" />
        </article>
        <article>
          <h1 className="title-home">Bienvenido a pokeapi</h1>
          <p className="center call-to-act">
            ¡Encuentra la informacion de tus pokemon favoritos!
          </p>

          <div className="center">
            <Link to="/search">
              <Button
                classNames="buttonHome"
                contentText="Buscar Pokemon"
              ></Button>
            </Link>

            <Link to="/pokedex">
              <Button
                classNames="buttonHome"
                contentText="Ver Pokedex"
              ></Button>
            </Link>
          </div>
        </article>
      </section>

      <Footer />
    </>
  );
};

export { Home };
