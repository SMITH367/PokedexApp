const OrderAZ = (e, setPokemons, pokemons, order) => {

    e.preventDefault();

    let pkmTorder = pokemons;
    setPokemons([]);
    if (order === false) {
        let ordenados = pkmTorder.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });

        setTimeout(() => {
            setPokemons(ordenados);
        }, 10);
    }
};

export {
    OrderAZ
}