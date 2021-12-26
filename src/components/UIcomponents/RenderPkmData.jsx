import React, { useEffect, useRef } from "react";
import "../styles/renderPkmData.css";
import "../styles/drawStyles.css";
import { Link } from "react-router-dom";
import { PaintTypes } from "./UIservices/PaintTypes";

const RenderPkmData = ({ data }) => {
  const containerRef = useRef();

  const type1 = useRef();
  const type2 = useRef();

  useEffect(() => {
    if (Object.keys(data).length > 1) {
      PaintTypes(containerRef, type1, type2, data.types, data.types.length);
    }
    // eslint-disable-next-line
  }, [data]);

  return (
    <>
      <div className="pokemon-card center">
        {Object.keys(data).length > 0 && (
          <>
            <div className="container" ref={containerRef}>
              <h2>
                {data.name} #{data.id}
              </h2>
              <img
                src={`${data.sprites.front_default}`}
                alt=""
                className="img-pkm"
              />
            </div>
            <div className="show-data">
              <aside>
                <h3>Tipo</h3>
                <ul>
                  <li ref={type1} className="typeContent">
                    {data.types[0].type.name}
                  </li>
                  {data.types[1] !== undefined && (
                    <li ref={type2} className="typeContent">
                      {data.types[1].type.name}
                    </li>
                  )}
                </ul>
              </aside>
              <aside className="stats">
                <h3>Estadisticas</h3>
                <p>
                  <span className="green">HP:</span> {data.stats[0].base_stat}
                </p>
                <p>
                  <span className="red">Atack:</span> {data.stats[1].base_stat}{" "}
                </p>
                <p>
                  <span className="blue">Defense:</span>{" "}
                  {data.stats[2].base_stat}{" "}
                </p>
                <p>
                  <span className="silver">Speed:</span>{" "}
                  {data.stats[5].base_stat}{" "}
                </p>
              </aside>
            </div>
            <div className="view-pkm">
              <Link to={`/viewpkm/${data.id}`} className="view-pkm-link">
                Ver pokemon
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export { RenderPkmData };
