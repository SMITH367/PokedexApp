import React from "react";
import { Header } from "./UIcomponents/Header";
import { Footer } from "./UIcomponents/Footer";
import { GetPokemonId } from "../services/GetPokemonId";
import { useLocation } from "react-router-dom";

const Viewpkm = () => {
  let location = useLocation();
  console.log(location.pathname);

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
