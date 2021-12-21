const setBackground = (type, containerRef) => {

    switch (type) {
        case "fire":
            containerRef.target.style.backgroundColor = "rgb(255, 94, 19)";

            break;
        case "bug":
            containerRef.target.style.backgroundColor = "rgb(201, 181, 0)";

            break;
        case "normal":
            containerRef.target.style.backgroundColor = "rgb(146, 146, 146)";

            break;
        case "grass":
            containerRef.target.style.backgroundColor = "rgb(116, 255, 97)";

            break;
        case "water":
            containerRef.target.style.backgroundColor = "rgb(62, 226, 255)";

            break;
        case "poison":
            containerRef.target.style.backgroundColor = "rgb(174, 0, 255)";

            break;
        case "flying":
            containerRef.target.style.backgroundColor = "rgb(159, 121, 177)";

            break;
        case "psychic":
            containerRef.target.style.backgroundColor = "rgb(226, 8, 255)";

            break;
        case "fighting":
            containerRef.target.style.backgroundColor = "rgb(199, 0, 0)";

            break;
        case "ice":
            containerRef.target.style.backgroundColor = "rgb(174, 239, 255)";

            break;
        case "rock":
            containerRef.target.style.backgroundColor = "rgb(158, 142, 0)";

            break;
        case "fairy":
            containerRef.target.style.backgroundColor = "rgb(255, 0, 200)";

            break;
        case "ground":
            containerRef.target.style.backgroundColor = "rgb(192, 189, 0)";

            break;

        case "steel":
            containerRef.target.style.backgroundColor = "rgb(190, 190, 190)";

            break;
        case "ghost":
            containerRef.target.style.backgroundColor = "rgb(98, 0, 190)";

            break;
        case "dragon":
            containerRef.target.style.backgroundColor = "rgb(0, 59, 253)";

            break;
        case "electric":
            containerRef.target.style.backgroundColor = "rgb(253, 249, 0)";

            break;
        case "dark":
            containerRef.target.style.backgroundColor = "rgb(92, 92, 92)";

            break;
        default:
            console.log("error");
    }
}

export {
    setBackground
}