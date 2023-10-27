import React, { useState } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { initialState } from "../../reducers/PokemonReducer";
import { pokemonReducer } from "../../reducers/PokemonReducer";
import axios from "axios";

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [pokemonLoading, setPokemonLoading] = useState(false);
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // fetchPokemon mainpage
  const fetchPokemon = async () => {
    const poke = []
    try {
      const index = 15+2;
      setPokemonLoading(false);
      for (let i = 1; i < index ; i++) {
       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
       poke.push(res.data)
      }
      dispatch({type : "test" , payload: poke})
    } catch (error) {
      console.log(error);
    } finally {
        setPokemonLoading(true)
    }
  };

  return (
    <PokemonContext.Provider value={{fetchPokemon , state , pokemonLoading}}>{children}</PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
