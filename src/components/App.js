import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import { Home } from "./Home";
import { Pokedex } from "./Pokedex";
import { Searchpkm } from "./Searchpkm";
import { Viewpkm } from "./Viewpkm";
import {Error404} from "./Error404"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home> </Home>} />
        <Route path="/pokedex" element={<Pokedex> </Pokedex>} />
        <Route path="/search" element={<Searchpkm> </Searchpkm>} />
        <Route path="/viewPkm/:id" element={<Viewpkm> </Viewpkm>} />
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
