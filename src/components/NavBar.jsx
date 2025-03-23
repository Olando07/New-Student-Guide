import "../css/navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li className="nav-link-header" id="Home">
                    <Link  to="/New-Student-Guide/">
                        Student Service Guide
                    </Link>
                </li>
                <li className="nav-link" id="References">
                    <Link to="/New-Student-Guide/References">
                        References
                    </Link>
                </li>
            </ul>
            <div>
                <button className="theme" onClick={toggleTheme}>
                    <div className="icon day">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f1c113">
                            <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
                        </svg>
                    </div>
                    <div className="icon night">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999">
                            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
                        </svg>
                    </div>
                    <div className="slider"></div>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
