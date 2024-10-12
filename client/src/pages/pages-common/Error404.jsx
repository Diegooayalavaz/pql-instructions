import { Link } from "react-router-dom";
import Person404 from "../../assets/images/404.png";
import "../../assets/styles/page404.css"; // Importa tu CSS aquí

const Error404 = () => {
  return (
    <div className="error-404-page text-center mt-5 text-white">
      <img
        src={Person404}
        width="500"
        className="mb-5 "
        alt="Showing existing error 404"
      ></img>
      <h1>Error 404</h1>
      <p>Página no encontrada.</p>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <ul>
        <li>
          <Link to="../">Ir a la página principal</Link>
        </li>
      </ul>
    </div>
  );
};

export default Error404;
