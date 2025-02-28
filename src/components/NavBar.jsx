import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [isTransitioning, setIsTransitioning] = useState(false); // Track transition state

    const { pathname } = useLocation();

    const toggleTheme = () => {
        setIsTransitioning(true); // Start transition
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (isTransitioning) {
            setTimeout(() => {
                setIsTransitioning(false);
            }, 500);
        }
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme, isTransitioning]);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h3>Student Service Guide</h3>
            </div>
            <ul className="navbar-links">
                <li className="nav-link" id="Home">
                    <Link className={pathname === "/New-Student-Guide/" ? "activeTab" : ""} to="/New-Student-Guide/">
                        Home
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
                    <div className="slider"></div>
                    {isTransitioning ? "switching" : theme === "light" ? "🌞 Light Mode" : "🌛 Dark Mode"}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
