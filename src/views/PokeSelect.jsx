import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";

// Se crea el componente PokeSelect que muestra un select con los nombres de los pokemones
const PokeSelect = () => {
    // Se obtienen los estados pokemones y setPokemones del contexto
    const { pokemones, setPokemones } = useContext(PokeContext);
    // Se crean los estados selectPoke y error
    const navigate = useNavigate();
    const [selectPoke, setSelectPoke] = useState("");
    const [error, setError] = useState(null);
    // Se crea el useEffect que se ejecuta al montar el componente y obtiene los nombres de los pokemones
    useEffect(() => {
        getNames();
    }, [setPokemones]);

    // Se obtienen los nombres de los pokemones de la API
    const getNames = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`);
            const data = await response.json();
            // Se actualiza el estado pokemones con los nombres de los pokemones
            setPokemones(data.results);
            // Se limpia cualquier mensaje de error previo
            setError("");
            // Si ocurre un error se muestra un mensaje de error
        } catch (error) {
            setError(`Ocurrió un error. Por favor inténtalo de nuevo.`);
        }
    };
    // Se crea la función handleClick que se ejecuta al hacer click en el botón VER
    const handleClick = () => {
        if (!selectPoke) {
            alert("Recuerda seleccionar un pokemon antes!");
            return;
        }
        // Se redirige a la página del pokemon seleccionado
        navigate(`/pokemones/${selectPoke}`);
    };
    // Si no se han obtenido los nombres de los pokemones se muestra un mensaje de error
    if (pokemones.lenght === 0) return null;

    return (
        <div>
            {error && <div style={{ color: "red" }}>{error}</div>}

            <div className="poke-selector">
                <h1>SELECCIONA UN POKEMON</h1>
                <select id="pokemon-select" className="poke-form" onChange={(e) => setSelectPoke(e.target.value)}>
                    <option value="">Pokemones</option>
                    {pokemones.map((pokemon) => (
                        <option value={pokemon.name} key={pokemon.url}>
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </option>
                    ))}
                </select>
                <button className="btn-poke" onClick={handleClick}>
                    Ver pokemon
                </button>
                <img className="poke-pika" src="./icons/Pokemon-3.png" alt="Pikachu" />
            </div>
        </div>
    );
};
export default PokeSelect;
