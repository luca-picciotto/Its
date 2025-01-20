import { Outlet, Link } from "react-router-dom";
import './navbar.css'; // Importa il file CSS

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Noleggio Attrezzatura</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/equipments">Equipments</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;
