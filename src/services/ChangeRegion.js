import {
    GetApi
} from './GetApi';

const ChangeRegion = async (value, setPokemons, url) => {

    setPokemons([])

    if (value === "kanto") {
        let dataKanto = await GetApi(url + "pokemon/?offset=0&limit=151");

        let kantoPokemons = [];

        for (let i = 0; i < Object.keys(dataKanto[0].results).length; i++) {
            let pokemonKantoData = await GetApi(dataKanto[0].results[i].url);
            kantoPokemons.push(pokemonKantoData[0]);
        }
        setPokemons(kantoPokemons);
    } else if (value === "jhoto") {
        let dataJhoto = await GetApi(url + "pokemon/?offset=151&limit=100");
        let jhotoPokemons = [];

        for (let i = 0; i < Object.keys(dataJhoto[0].results).length; i++) {
            let pokemonJhotoData = await GetApi(dataJhoto[0].results[i].url);
            jhotoPokemons.push(pokemonJhotoData[0]);
        }
        setPokemons(jhotoPokemons);
    } else if (value === "hoenn") {
        let dataHoenn = await GetApi(url + "pokemon/?offset=251&limit=135");

        let hoennPokemons = [];

        for (let i = 0; i < Object.keys(dataHoenn[0].results).length; i++) {
            let pokemonHoennData = await GetApi(dataHoenn[0].results[i].url);
            hoennPokemons.push(pokemonHoennData[0]);
        }
        setPokemons(hoennPokemons);
    } else if (value === "sinnoh") {
        let dataSinnoh = await GetApi(url + "pokemon/?offset=386&limit=108");

        let sinnohPokemons = [];

        for (let i = 0; i < Object.keys(dataSinnoh[0].results).length; i++) {
            let pokemonSinnohData = await GetApi(dataSinnoh[0].results[i].url);
            sinnohPokemons.push(pokemonSinnohData[0]);
        }
        setPokemons(sinnohPokemons);
    } else if (value === "unova") {
        let dataUnova = await GetApi(url + "pokemon/?offset=494&limit=155");

        let unovaPokemons = [];

        for (let i = 0; i < Object.keys(dataUnova[0].results).length; i++) {
            let pokemonUnovaData = await GetApi(dataUnova[0].results[i].url);
            unovaPokemons.push(pokemonUnovaData[0]);
        }
        setPokemons(unovaPokemons);
    } else if (value === "kalos") {
        let dataKalos = await GetApi(url + "pokemon/?offset=649&limit=72");

        let kalosPokemons = [];

        for (let i = 0; i < Object.keys(dataKalos[0].results).length; i++) {
            let pokemonKalosData = await GetApi(dataKalos[0].results[i].url);
            kalosPokemons.push(pokemonKalosData[0]);
        }
        setPokemons(kalosPokemons);
    } else if (value === "alola") {
        let dataAlola = await GetApi(url + "pokemon/?offset=721&limit=88");

        let alolaPokemons = [];

        for (let i = 0; i < Object.keys(dataAlola[0].results).length; i++) {
            let pokemonAlolaData = await GetApi(dataAlola[0].results[i].url);
            alolaPokemons.push(pokemonAlolaData[0]);
        }
        setPokemons(alolaPokemons);
    } else if (value === "galar") {
        let dataGalar = await GetApi(url + "pokemon/?offset=809&limit=410");
        console.log(dataGalar)
        let galarPokemons = [];

        for (let i = 0; i < Object.keys(dataGalar[0].results).length; i++) {
            let pokemonGalarData = await GetApi(dataGalar[0].results[i].url);
            galarPokemons.push(pokemonGalarData[0]);
        }
        setPokemons(galarPokemons);
    }
}


export {
    ChangeRegion
}