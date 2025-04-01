import "../css/counseling_services.css";
import counselingBanner from "../images/counseling_banner.jpg";

function CounselingServices() {
    return (
        <>
            <div className="page-header">
                <h3>Counceling Services</h3>
            </div>
            <div className="service">
                <img src={counselingBanner} alt="counseling banner" type="jpeg" />
                <h3>Counselling </h3>
                <p>
                    <i>“Key elements of the lived experience of mental wellness during the pandemic included shifting support systems, disconnection, continual adaptation, worry, sense of missing out, and environmental stress.”</i>(Laczko, D et al., 2022)
                </p>
                <p>RRC Polytech provides free, confidential counselling services to all students, here to assist with personal struggles and develop skills to better manage and enjoy their college experience. </p>
                <p>The following information about counselling services is from RRC Polytech(n.d.): </p>
                <p className="counseling">
                    <b>Campus Well-Being</b>
                </p>
                <p>RRC Polytech understands that personal and community well-being contributes to student success and employee engagement and is why Campus Well-Being provides programs and services to help invigorate students and staff. </p>
                <p>Through: </p>
                <ul>
                    <li>Sports</li>
                    <li>Fitness</li>
                    <li>Recreation</li>
                    <li>Mental Wellness</li>
                </ul>
                <p>
                    For more information visit:{" "}
                    <a href="https://www.rrc.ca/well-being/" target="_blank">
                        RRC Polytech: Campus Well-Being
                    </a>
                </p>
                <p className="counseling">
                    <b>Drop-In Services </b>
                </p>
                <p>Should you wish for a single focused conversation, RRC Polytech provides a drop-in service for those that wish to talk with someone. </p>
                <p>Service: </p>
                <ul>
                    <li>Tuesday and Thursday afternoons, from 1-4 pm </li>
                    <li>first come, first serve basis, and priority will be given to students experiencing a mental health crisis </li>
                    <li>For further information about drop-in services, please contact counselling@rrc.ca, or visit D102 at our Notre Dame campus or P210 at our Exchange District campus </li>
                </ul>
                <p>
                    For more information visit:{" "}
                    <a href="https://www.rrc.ca/counselling/" target="_blank">
                        RRC Polytech: Counselling
                    </a>
                </p>
                <p>
                    You may also book an appointment online through{" "}
                    <a href="https://hub.rrc.ca/Forms/Start/CounsellingRequest" target="_blank">
                        Counselling Registration Form :: Forms{" "}
                    </a>
                </p>
                <p className="counseling">
                    <b>MindBeacon Digital Therapy</b>{" "}
                </p>
                <p>MindBeacon is a way to get therapy online using either your phone, laptop, tablet or computer, and you will keep in contact with your therapist through online messages so as to not require prior bookings. </p>
                <p>To get started, connect with any of the following: </p>
                <ul>
                    <li>
                        <a href="https://www.rrc.ca/counselling/" target="_blank">
                            Student Counselling Services{" "}
                        </a>
                    </li>
                    <li>Campus Mental Health Specialist: frashid@rrc.ca</li>
                    <li>
                        <a href="https://www.rrc.ca/international/student-support/" target="_blank">
                            International Education{" "}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.rrc.ca/academic-success/" target="_blank">
                            Academic Success Centre{" "}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.rrc.ca/accessibility/" target="_blank">
                            Student Accessibility Services{" "}
                        </a>
                    </li>
                </ul>
                <p>CONFIDENTIALITY: all staff on campus take very serious care to protect the privacy of your personal information, and you can decide for yourself what information you wish to reveal should you seeking counselling.</p>
                <div className="page-footer">
                    <h2>Done by Jan Misa</h2>
                </div>
                <div className="color1"></div>
                <div className="color3"></div>
                <div className="color4"></div>
            </div>
        </>
    );
}

export default CounselingServices;
