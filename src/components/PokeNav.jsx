import { NavLink, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function PokeNav() {
    const PokeActiveClass = ({ isActive }) => (isActive ? "poke-active" : "poke-inactive");
    return (
        <>
            <Navbar className="poke-nav">
                <Link to="/">
                    <img className="poke-ball" src="../icons/pokeball.png" alt="Pokeball" />
                </Link>

                <Container>
                    <Nav>
                        <NavLink className={PokeActiveClass} to="/">
                            Home
                        </NavLink>

                        <NavLink className={PokeActiveClass} to="/pokemones">
                            Pokemones originales
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
