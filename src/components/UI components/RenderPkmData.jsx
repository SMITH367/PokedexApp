import React from "react";
import "../styles/renderPkmData.css";

const RenderPkmData = ({ data }) => {
  return (
    <>
      <div className="pokemon-card">
        <h2>Pokemon</h2>
        {Object.keys(data).length > 0 && (
          <div className="container">
            <img src={data.sprites.front_default} alt="" className="img-pkm" />
            <p>{data.name}</p>
          </div>
        )}
      </div>
    </>
  );
};
export { RenderPkmData };
