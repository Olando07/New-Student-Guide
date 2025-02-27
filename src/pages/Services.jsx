import "../css/services.css";
import { Link } from "react-router-dom";

function Service() {
    return (
        <ul className="services">
            <li>
                <Link to="/New-Student-Guide/International-Services">International Services</Link>
            </li>
            <li>
                <Link to="/New-Student-Guide/Academic-Success">Academic Success</Link>
            </li>
            <li>
                <Link to="/New-Student-Guide/Student-Employment">Student Employment</Link>
            </li>
            <li>
                <Link to="/New-Student-Guide/Counseling-Services">Counseling Services</Link>
            </li>
            <li>
                <Link to="/New-Student-Guide/Diversity-on-Campus">Diversity on Campus</Link>
            </li>
        </ul>
    );
}

export default Service;
