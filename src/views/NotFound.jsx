import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="text-message">
            <h4>La ruta a la que intentas acceder no existe</h4>
            <Link to="/">
                <button className="btn-message">Volver a home</button>
            </Link>
        </div>
    );
};

export default NotFound;
