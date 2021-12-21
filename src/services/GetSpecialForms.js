import {
    GetApi
} from './GetApi';

const GetSpecialForms = async (setPokemons) => {

    setPokemons([])
    let url = "https://pokeapi.co/api/v2/pokemon/?offset=898&limit=200"
    let pokemonsEspecialData = await GetApi(url)
    let pokemonsForms = []

    for (let i = 0; i < Object.keys(pokemonsEspecialData[0].results).length; i++) {
        let pokemonFormData = await GetApi(pokemonsEspecialData[0].results[i].url);
        pokemonsForms.push(pokemonFormData[0]);
    }
    setPokemons(pokemonsForms);

}
export {
    GetSpecialForms
}