import { Outlet, Link } from "react-router-dom";
import './navbar.css'; // Importa il file CSS

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Noleggio Attrezzatura</h1>
        <ul>
          <li>
            <Link to="/profile">User Area</Link>
          </li>
          <li>
            <Link to="/">Equipments</Link>
          </li>
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>
          <li>
            <a href="https://d3660g9kardf5b.cloudfront.net/api/docs/" target="_blank">Docs</a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;
