import {
    GetApi
} from '../services/GetApi';

const useChangeRegion = async (value, setPokemons, url) => {

    setPokemons([])

    if (value === "kanto") {
        url = url + "pokemon/?offset=0&limit=151"
    } else if (value === "jhoto") {
        url = url + "pokemon/?offset=151&limit=100"
    } else if (value === "hoenn") {
        url = url + "pokemon/?offset=251&limit=135"
    } else if (value === "sinnoh") {
        url = url + "pokemon/?offset=386&limit=108"
    } else if (value === "unova") {
        url = url + "pokemon/?offset=494&limit=155"
    } else if (value === "kalos") {
        url = url + "pokemon/?offset=649&limit=72"
    } else if (value === "alola") {
        url = url + "pokemon/?offset=721&limit=88"
    } else if (value === "galar") {
        url = url + "pokemon/?offset=809&limit=89"
    } else if (value === "especial") {
        url = "https://pokeapi.co/api/v2/pokemon/?offset=898&limit=130"
    }


    let dataPokemons = await GetApi(url);

    let PokemonsRegion = [];

    for (let i = 0; i < Object.keys(dataPokemons[0].results).length; i++) {
        let pokemon = await GetApi(dataPokemons[0].results[i].url);
        PokemonsRegion.push(pokemon[0]);
    }
    setPokemons(PokemonsRegion);


}


export {
    useChangeRegion
}