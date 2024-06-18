import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Se crea el componente PokeCard que recibe el nombre del pokemon como parámetro
const PokeCard = () => {
    // Se obtiene el nombre del pokemon de los parámetros de la URL
    const { nombre } = useParams();
    // Se crean los estados pokes y error
    const [pokes, setPokes] = useState();
    const [error, setError] = useState(null);
    // Se crea el useEffect que se ejecuta al montar el componente y obtiene los datos del pokemon
    useEffect(() => {
        getPokemons();
    }, [setPokes]);
    const getPokemons = async () => {
        // Se obtienen los datos del pokemon de la API
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
            const json = await response.json();

            setPokes(json);
            setError(""); // Limpiar cualquier mensaje de error previo
            // Si no se encuentra el pokemon se muestra un mensaje de error
        } catch (error) {
            setError(`Ocurrió un error. Por favor inténtalo de nuevo.`);
        }
    };

    // Si no se han obtenido los datos del pokemon se muestra un mensaje de error
    if (!pokes) return <>Cargando...</>;

    const { sprites, name, height, weight, stats } = pokes;
    const title = { name };

    return (
        <>
            <div>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <div className="btn-link">
                    <Link to="/">
                        <button className="btn-message">Volver a home</button>
                    </Link>
                    <Link to="/pokemones">
                        <button className="btn-card">Volver a Pokemones</button>
                    </Link>
                </div>

                <div className="poke-container-card">
                    <h1 className="poke-title">{title.name[0].toUpperCase() + title.name.slice(1).toLowerCase()}</h1>
                    <div className="poke-card">
                        <div className="poke-img">
                            <div className="poke-svg-container">
                                <img className="poke-svg" src={sprites.other.dream_world.front_default} alt={name}></img>
                            </div>
                        </div>

                        <div className="poke-info">
                            <p>HP: {stats[0].base_stat}</p>
                            <div className="poke-details">
                                <p>Altura: {height}</p>
                                {"  "}
                                <p>Peso: {weight}</p>
                            </div>
                            <div className="poke-details">
                                <p>Ataque: {stats[1].base_stat}</p>
                                {"  "}
                                <p>Defensa: {stats[2].base_stat}</p>
                            </div>
                            <div className="poke-details">
                                <p>Ataque Especial: {stats[3].base_stat}</p> <p>Defensa Especial: {stats[4].base_stat}</p>
                            </div>

                            <p>Velocidad: {stats[5].base_stat}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PokeCard;
