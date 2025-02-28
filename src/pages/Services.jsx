import "../css/services.css";
import { Link, useLocation } from "react-router-dom";

function Service() {
    const { pathname } = useLocation();

    return (
        <ul className="services">
            <li>
                <Link className={pathname === "/New-Student-Guide/International-Services" ? "active" : ""} to="/New-Student-Guide/International-Services">
                    International Services
                </Link>
            </li>
            <li>
                <Link className={pathname === "/New-Student-Guide/Academic-Success" ? "active" : ""} to="/New-Student-Guide/Academic-Success">
                    Academic Success
                </Link>
            </li>
            <li>
                <Link className={pathname === "/New-Student-Guide/Student-Employment" ? "active" : ""} to="/New-Student-Guide/Student-Employment">
                    Student Employment
                </Link>
            </li>
            <li>
                <Link className={pathname === "/New-Student-Guide/Counseling-Services" ? "active" : ""} to="/New-Student-Guide/Counseling-Services">
                    Counseling Services
                </Link>
            </li>
            <li>
                <Link className={pathname === "/New-Student-Guide/Diversity-on-Campus" ? "active" : ""} to="/New-Student-Guide/Diversity-on-Campus">
                    Diversity on Campus
                </Link>
            </li>
        </ul>
    );
}

export default Service;
