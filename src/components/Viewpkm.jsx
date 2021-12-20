import React from "react";
import { Header } from "./UI components/Header";
import { Footer } from "./UI components/Footer";
import { GetPokemonId } from "../services/GetPokemonId";
import { useLocation } from "react-router-dom";

const Viewpkm = () => {
  let location = useLocation();
  console.log(location.pathname);
  console.log(GetPokemonId(location.pathname));
  return (
    <>
      <Header />
      hola mundoooooooooooooooo
      <Footer />
      Viewpkm
    </>
  );
};

export { Viewpkm };
