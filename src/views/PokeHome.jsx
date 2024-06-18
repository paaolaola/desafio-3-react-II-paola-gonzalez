import { Link } from "react-router-dom";

const PokeHome = () => {
    return (
        <section className="poke-home">
            <div className="poke-container">
                <h1>BIENVENIDO MAESTRO POKEMÓN !</h1>
                <div className="poke-box">
                    <Link to="/pokemones">
                        <img className="poke-pika" src="./icons/Pokemon-3.png" alt="Pikachu" />
                    </Link>
                </div>
                <div className="footer">
                    <p>Anda al selector de Pokemones Originales para ver sus características </p>
                </div>
            </div>
        </section>
    );
};

export default PokeHome;
