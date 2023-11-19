import { createContext, useState } from "react";
export const PokeContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemones, setPokemones] = useState([]);

    return <PokeContext.Provider value={{ pokemones, setPokemones }}>{children}</PokeContext.Provider>;
};

export default PokemonProvider;
