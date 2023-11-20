import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PokeCard = () => {
    const { nombre } = useParams();
    const [pokes, setPokes] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        getPokemons();
    }, [setPokes]);
    const getPokemons = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
            const json = await response.json();

            setPokes(json);
        } catch (error) {
            setError(`Ocurrió un error. Por favor inténtalo de nuevo.`);
            console.error(error);
        }
    };

    if (!pokes) return <></>;

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
                        <img className="poke-img" src={sprites.other.dream_world.front_default} alt={name}></img>

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
