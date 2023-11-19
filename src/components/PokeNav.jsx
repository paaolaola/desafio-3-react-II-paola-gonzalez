import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function PokeNav() {
    const PokeActiveClass = ({ isActive }) => (isActive ? "poke-active" : "poke-inactive");
    return (
        <header>
            <Navbar className="poke-nav">
                <NavLink to="/">
                    <img className="poke-ball" src="../icons/pokeball.png" alt="Pokeball" />
                </NavLink>

                <Container>
                    <Nav>
                        <NavLink className={PokeActiveClass} to="/">
                            Home
                        </NavLink>
                        {" - "}
                        <NavLink className={PokeActiveClass} to="/pokemones">
                            Pokemones
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
