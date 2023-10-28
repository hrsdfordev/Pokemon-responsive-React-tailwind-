export const initialState = {
    pokemon: [] ,
    pokemonByOne : {}
}

export const pokemonReducer = (state, action) => {
    switch (action.type) {
        case 'LOOP POKEMON':
            console.log(action.payload);
            return { ...state, pokemon: action.payload }
        case 'GET POKEMON BY NAME':
            console.log(action.payload);
            return {pokemonByOne : action.payload}
        default:
            return state
    }

}