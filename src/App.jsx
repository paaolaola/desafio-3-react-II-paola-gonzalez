import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonProvider from "./context/PokeContext";

import PokeNav from "./components/PokeNav";
import PokeHome from "./views/PokeHome";
import PokeSelect from "./views/PokeSelect";
import PokeCard from "./views/PokeCard";
import NotFound from "./views/NotFound";

function App() {
    return (
        <BrowserRouter>
            <PokeNav />
            <PokemonProvider>
                <Routes>
                    <Route path="/" element={<PokeHome />} />
                    <Route path="/pokemones" element={<PokeSelect />} />
                    <Route path="/pokemones/:nombre" element={<PokeCard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </PokemonProvider>
        </BrowserRouter>
    );
}
export default App;
