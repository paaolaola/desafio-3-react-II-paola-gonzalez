import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";

const PokeSelect = () => {
    const { pokemones, setPokemones } = useContext(PokeContext);
    const navigate = useNavigate();
    const [selectPoke, setSelectPoke] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        getNames();
    }, [setPokemones]);

    const getNames = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`);
            const data = await response.json();

            setPokemones(data.results);
        } catch (error) {
            setError(`Ocurrió un error. Por favor inténtalo de nuevo.`);
            console.error(error);
        }
    };

    const handleClick = () => {
        if (!selectPoke) {
            alert("Recuerda seleccionar un pokemon antes!");
            return;
        }
        navigate(`/pokemones/${selectPoke}`);
    };

    if (pokemones.lenght === 0) return null;

    return (
        <div>
            {error && <div style={{ color: "red" }}>{error}</div>}

            <div className="poke-selector">
                <h1>SELECCIONA UN POKEMON</h1>
                <select id="pokemon-select" className="poke-form" onChange={(e) => setSelectPoke(e.target.value)}>
                    <option value="">POKEMONES</option>
                    {pokemones.map((pokemon) => (
                        <option value={pokemon.name} key={pokemon.url}>
                            {pokemon.name}
                        </option>
                    ))}
                </select>
                <button className="btn-poke" onClick={handleClick}>
                    VER
                </button>
                <img className="poke-pika" src="./icons/Pokemon-3.png" alt="Pikachu" />
            </div>
        </div>
    );
};
export default PokeSelect;
