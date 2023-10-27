import { useContext } from "react";
import {PokemonContext} from "./PokemonContext/PokemonContext";

export {default as PokemonContextProvider} from './PokemonContext/PokemonContext'

export const usePokemon = () => useContext(PokemonContext)