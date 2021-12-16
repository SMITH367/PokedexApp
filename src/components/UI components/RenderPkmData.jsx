import React, { useEffect, useRef } from "react";
import "../styles/renderPkmData.css";
import "../styles/drawStyles.css";

const RenderPkmData = ({ data }) => {
  const containerRef = useRef();

  const type1 = useRef();
  const type2 = useRef();

  useEffect(() => {
  
    if (Object.keys(data).length > 0) {
      switch (data.types[0].type.name) {
        case "fire":
          containerRef.current.style.backgroundColor = "rgb(255, 94, 19)";
          type1.current.style.backgroundColor = "rgb(255, 94, 19)";
          break;
        case "bug":
          containerRef.current.style.backgroundColor = "rgb(201, 181, 0)";
          type1.current.style.backgroundColor = "rgb(201, 181, 0)";
          break;
        case "normal":
          containerRef.current.style.backgroundColor = "rgb(146, 146, 146)";
          type1.current.style.backgroundColor = "rgb(146, 146, 146)";
          break;
        case "grass":
          containerRef.current.style.backgroundColor = "rgb(116, 255, 97)";
          type1.current.style.backgroundColor = "rgb(116, 255, 97)";
          break;
        case "water":
          containerRef.current.style.backgroundColor = "rgb(62, 226, 255)";
          type1.current.style.backgroundColor = "rgb(62, 226, 255)";
          break;
        case "poison":
          containerRef.current.style.backgroundColor = "rgb(174, 0, 255)";
          type1.current.style.backgroundColor = "rgb(174, 0, 255)";
          break;
        case "flying":
          containerRef.current.style.backgroundColor = "rgb(159, 121, 177)";
          type1.current.style.backgroundColor = "rgb(159, 121, 177)";
          break;
        case "psychic":
          containerRef.current.style.backgroundColor = "rgb(226, 8, 255)";
          type1.current.style.backgroundColor = "rgb(226, 8, 255)";
          break;
        case "fighting":
          containerRef.current.style.backgroundColor = "rgb(199, 0, 0)";
          type1.current.style.backgroundColor = "rgb(199, 0, 0)";
          break;
        case "ice":
          containerRef.current.style.backgroundColor = "rgb(174, 239, 255)";
          type1.current.style.backgroundColor = "rgb(174, 239, 255)";
          break;
        case "rock":
          containerRef.current.style.backgroundColor = "rgb(158, 142, 0)";
          type1.current.style.backgroundColor = "rgb(158, 142, 0)";
          break;
        case "fairy":
          containerRef.current.style.backgroundColor = "rgb(255, 0, 200)";
          type1.current.style.backgroundColor = "rgb(255, 0, 200)";
          break;
        case "ground":
          containerRef.current.style.backgroundColor = "rgb(192, 189, 0)";
          type1.current.style.backgroundColor = "rgb(192, 189, 0)";
          break;

        case "steel":
          containerRef.current.style.backgroundColor = "rgb(190, 190, 190)";
          type1.current.style.backgroundColor = "rgb(190, 190, 190)";
          break;
        case "ghost":
          containerRef.current.style.backgroundColor = "rgb(98, 0, 190)";
          type1.current.style.backgroundColor = "rgb(98, 0, 190)";
          break;
        case "dragon":
          containerRef.current.style.backgroundColor = "rgb(0, 59, 253)";
          type1.current.style.backgroundColor = "rgb(0, 59, 253)";
          break;
        case "electric":
          containerRef.current.style.backgroundColor = "rgb(253, 249, 0)";
          type1.current.style.backgroundColor = "rgb(233, 198, 0)";
          break;
        case "dark":
          containerRef.current.style.backgroundColor ="rgb(92, 92, 92)";
          type1.current.style.backgroundColor = "rgb(92, 92, 92)";
          break;
        default:
          console.log("error");
      }
      if (data.types.length > 1) {
        switch (data.types[1].type.name) {
          case "fire":
            type1.current.style.backgroundColor = "rgb(255, 94, 19)";
            break;
          case "bug":
            type2.current.style.backgroundColor = "rgb(201, 181, 0)";
            break;
          case "normal":
            type2.current.style.backgroundColor = "rgb(146, 146, 146)";
            break;
          case "grass":
            type2.current.style.backgroundColor = "rgb(116, 255, 97)";
            break;
          case "water":
            type2.current.style.backgroundColor = "rgb(62, 226, 255)";
            break;
          case "poison":
            type2.current.style.backgroundColor = "rgb(174, 0, 255)";
            break;
          case "flying":
            type2.current.style.backgroundColor = "rgb(159, 121, 177)";
            break;
          case "psychic":
            type2.current.style.backgroundColor = "rgb(206, 8, 255)";
            break;
          case "fighting":
            type2.current.style.backgroundColor = "rgb(199, 0, 0)";
            break;
          case "ice":
            type2.current.style.backgroundColor = "rgb(174, 239, 255)";
            break;
          case "rock":
            type2.current.style.backgroundColor = "rgb(158, 142, 0)";
            break;
          case "fairy":
            type2.current.style.backgroundColor = "rgb(255, 0, 200)";
            break;
          case "ground":
            type2.current.style.backgroundColor = "rgb(192, 189, 0)";
            break;
          case "steel":
            type2.current.style.backgroundColor = "rgb(190, 190, 190)";
            break;
          case "ghost":
            type2.current.style.backgroundColor = "rgb(98, 0, 190)";
            break;
          case "dragon":
            type2.current.style.backgroundColor = "rgb(0,59, 253)";
            break;
          case "electric":
            type2.current.style.backgroundColor = "rgb(233, 198, 0)";
            break;
          case "dark":
            type2.current.style.backgroundColor = "rgb(92, 92, 92)";
            break;
          default:
            console.log("error");
        }
      }
    }
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
                src={`https://img.pokemondb.net/sprites/home/normal/${data.name}.png`}
                alt=""
                className="img-pkm"
              />
            </div>
            <div className="show-data">
              <aside>
                <h3>Types</h3>
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
                <h3>Stats</h3>
                <p>
                  <span className="green">HP:</span> {data.stats[0].base_stat}
                </p>
                <p>
                  {" "}
                  <span className="red">Atack:</span> {data.stats[1].base_stat}{" "}
                </p>
                <p>
                  {" "}
                  <span className="blue">Defense:</span>{" "}
                  {data.stats[2].base_stat}{" "}
                </p>
                <p>
                  <span className="silver">Speed:</span>{" "}
                  {data.stats[5].base_stat}{" "}
                </p>
              </aside>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export { RenderPkmData };
