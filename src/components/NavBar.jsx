import "../css/navbar.css";
import "../css/navbar.css";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h3>Student Service Guide</h3>
            </div>
            <ul className="navbar-links">
                <li
                    className="nav-link active"
                    id="Home"
                >
                    <Link to="/">Home</Link>
                </li>
                <li
                    className="nav-link"
                    id="Services"
                >
                    <Link to="/Services">Services</Link>
                </li>
                <li
                    className="nav-link"
                    id="Bibliography"
                >
                    <Link to="/Bibliography">Bibliography</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
