export const initialState = {
    pokemon : []
}

export const pokemonReducer = (state , action) => {
    switch(action.type) {
        case 'test' :  
        console.log(action.payload);
        return {...state , pokemon : action.payload}
        default : 
        return state
    }

}