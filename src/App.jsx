import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import References from "./pages/References";
import InternationalServices from "./pages/International_Services";
import StudentEmployment from "./pages/Student_Employment";
import AcademicSuccess from "./pages/Academic_Success";
import Diversity from "./pages/Diversity";
import CounselingServices from "./pages/Counseling_Services";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Services></Services>
            <main>
                <div className="main-container">
                    <Routes basename="/New-Student-Guide">
                        <Route path="New-Student-Guide/" element={<Home />} />
                        <Route path="/International-Services" element={<InternationalServices />} />
                        <Route path="/Academic-Success" element={<AcademicSuccess />} />
                        <Route path="/Student-Employment" element={<StudentEmployment />} />
                        <Route path="/Counseling-Services" element={<CounselingServices />} />
                        <Route path="/Diversity-on-Campus" element={<Diversity />} />
                        <Route path="New-Student-Guide/References" element={<References />} />
                    </Routes>
                </div>
                <div className="color1"></div>
            </main>
        </>
    );
}

export default App;
