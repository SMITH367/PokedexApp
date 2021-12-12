import React, {useRef} from "react";
import "../styles/header.css";
import logo from "../sources/logo.png";
import { Link } from "react-router-dom";
const Header = () => {


  const pokedexref = useRef()
  const searchpkmref = useRef()

  const hoverEvent = (event) => {
    if(event === 'pokedex')
    pokedexref.current.style.backgroundColor = "rgb(187, 0, 0)"
    else searchpkmref.current.style.backgroundColor = "rgb(187, 0, 0)";
  };

  const leaveEvent = () => {
    pokedexref.current.style.backgroundColor = "rgb(255, 33, 33)";
    searchpkmref.current.style.backgroundColor = "rgb(255, 33, 33)";
  }


  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="header-logo" />
        </Link>
      </div>
      <nav>
        <ul className="header-nav-list">
          <li>
            <Link
              to="/pokedex"
              className="header-nav-el"
              ref={pokedexref}
              onMouseOver={(e)=>hoverEvent('pokedex')}
              onMouseLeave={leaveEvent}
            >
              Pokedex
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="header-nav-el"
              ref={searchpkmref}
              onMouseOver={(e)=>hoverEvent('search')}
              onMouseLeave={leaveEvent}
            >
              Buscar Pokemon
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
