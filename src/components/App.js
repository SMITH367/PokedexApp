import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Prueba } from "./Prueba";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Prueba></Prueba>} />

        <Route path="/hola" element={<h2>Estas en el hola papa</h2>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
