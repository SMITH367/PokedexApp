const PaintTypes = (containerRef, type1, type2, dataTypes, lengthTypes) => {
    
    switch (dataTypes[0].type.name) {
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
            containerRef.current.style.backgroundColor = "rgb(92, 92, 92)";
            type1.current.style.backgroundColor = "rgb(92, 92, 92)";
            break;
        default:
            console.log("error");
    }
    if (lengthTypes > 1) {
        switch (dataTypes[1].type.name) {
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

export {
    PaintTypes
}