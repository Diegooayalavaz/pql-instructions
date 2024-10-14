import { Link } from "react-router-dom";
import Person404 from "../../assets/images/404.png";
import "../../assets/styles/page404.css";

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
      <p>Page not found</p>
      <p>Sorry, the page that you're looking for does not exist.</p>
      <ul>
        <li>
          <Link to="../">Go Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Error404;
