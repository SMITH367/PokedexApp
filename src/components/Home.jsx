import React from "react";
import { Header } from "./UI components/Header";
import { Footer } from "./UI components/Footer";
import { Button } from "./UI components/Button";
import { Link } from "react-router-dom";
import './styles/home.css'
import pikachuHome from './sources/pikachuHome.png'


const Home = () => {
  return (
    <>
      
      <Header />
      <section className="main-home">
        <article className="home-logo-cont center">
          <img src={pikachuHome} alt="pikachuHome" className="home-logo" />
        </article>
        <article>
          <h1 className="title-home">Bienvenido a pokeapi</h1>
          <p className="center">Encuentra la informacion de tus pokemon favoritos</p>

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
