import React from "react";
import { Header } from "./UI components/Header";
import { Footer } from "./UI components/Footer";
import { useLocation } from "react-router-dom";

const Viewpkm = () => {
  let location = useLocation();
  console.log(location.pathname.match());
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
