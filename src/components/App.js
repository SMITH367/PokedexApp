import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import { Home } from "./Home";
import { Pokedex } from "./Pokedex";
import { Searchpkm } from "./Searchpkm";
import { Viewpkm } from "./Viewpkm";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home> </Home>} />
        <Route path="/pokedex" element={<Pokedex> </Pokedex>} />
        <Route path="/search" element={<Searchpkm> </Searchpkm>} />
        <Route path="/viewPkm/:id" element={<Viewpkm> </Viewpkm>} />
      </Routes>{" "}
    </HashRouter>
  );
}

export default App;
