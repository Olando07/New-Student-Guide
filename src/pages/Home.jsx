import Footer from "../components/Footer";
import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="page-header">
                <h3>Introduction</h3>
            </div>
            <div className="intro">
                <p>Hey there, welcome to Group C's website. As promised, we have delivered an A-level Project on the topic of "New Student Guide" and the deliverable is this webpage. RRC Polytech Student Guide provides a clear and easy to navigate format for new students showcasing the various programs and services available to all students and staff so as to make your transition into RRC Polytech as smooth as possible.</p>
                <p className="heading-list">We have included all the necessary information that a new student needs to know about the college, including:</p>
                <ul className="heading-list">
                    <li>
                        <Link className="/New-Student-Guide/Academic-Success" to="/New-Student-Guide/Academic-Success">
                            Academic Success
                        </Link>
                    </li>
                    <li>
                        <Link className="/New-Student-Guide/Counseling-Services" to="/New-Student-Guide/Counseling-Services">
                            Counseling Services
                        </Link>
                    </li>
                    <li>
                        <Link className="/New-Student-Guide/Diversity-on-Campus" to="/New-Student-Guide/Diversity-on-Campus">
                            Diversity on Campus
                        </Link>
                    </li>
                    <li>
                        <Link className="/New-Student-Guide/International-Services" to="/New-Student-Guide/International-Services">
                            International Services
                        </Link>
                    </li>
                    <li>
                        <Link className="/New-Student-Guide/Student-Employment" to="/New-Student-Guide/Student-Employment">
                            Student Employment
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="contact">
                <h3>Contact Info</h3>
                <p>
                    For more information you can contact the college using the information provided{" "}
                    <a href="https://www.rrc.ca/contact/" target="_blank">
                        here
                    </a>
                    .
                </p>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Home;
