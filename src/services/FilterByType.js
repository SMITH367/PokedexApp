import {
    GetApi
} from "./GetApi"

const FilterByTipe = async (type, setPokemons) => {

    let urlTypes = "https://pokeapi.co/api/v2/type/";
    let typesPokemon = await GetApi(urlTypes + type);

    let pokemonsType = [];

    for (let i = 0; i < Object.keys(typesPokemon[0].pokemon).length; i++) {
        if (i === 20) {
            setPokemons([]);
        }
        let fetchPokemon = await GetApi(typesPokemon[0].pokemon[i].pokemon.url);
        pokemonsType.push(fetchPokemon[0]);
    }

    setPokemons(pokemonsType);
};
export {
    FilterByTipe
}