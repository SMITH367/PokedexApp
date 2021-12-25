import React from "react";
import { Header } from "./UIcomponents/Header";

import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <>
      <Header />

      <h1 className="center">
        ¡Ooopppss parece que no encontramos a ruta que buscas!
      </h1>
      <h2 className="center">
        <Link to="/">¡Sacame de aqui!</Link>
      </h2>
    </>
  );
};

export { Error404 };
