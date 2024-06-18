import { createContext, useState } from "react";

export const PokeContext = createContext();
// Se crea el componente PokemonProvider que recibe children como parámetro
const PokemonProvider = ({ children }) => {
    // Se crea el estado pokemones
    const [pokemones, setPokemones] = useState([]);
    // Se retorna el componente PokeContext.Provider con el valor de pokemones y setPokemones
    return <PokeContext.Provider value={{ pokemones, setPokemones }}>{children}</PokeContext.Provider>;
};

export default PokemonProvider;
