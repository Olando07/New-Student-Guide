import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    // const [isTransitioning, setIsTransitioning] = useState(false); // Track transition state

    const { pathname } = useLocation();

    const toggleTheme = () => {
        // setIsTransitioning(true); // Start transition
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        // if (isTransitioning) {
        //     setTimeout(() => {
        //         setIsTransitioning(false);
        //     }, 500);
        // }   , isTransitioning
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li className="nav-link-header" id="Home">
                    <Link className={pathname === "/New-Student-Guide/" ? "activeTab" : ""} to="/New-Student-Guide/">
                        Student Service Guide
                    </Link>
                </li>
                <li className="nav-link" id="Bibliography">
                    <Link className={pathname === "/New-Student-Guide/Bibliography" ? "activeTab" : ""} to="/New-Student-Guide/Bibliography">
                        Bibliography
                    </Link>
                </li>
            </ul>
            <div>
                <button className="theme" onClick={toggleTheme}>
                    <div className="icon day">🌞</div>
                    <div className="icon night">🌜</div>
                    <div className="slider"></div>
                </button>
            </div>
        </nav>
    );
}
// isTransitioning ? "" :
export default NavBar;
