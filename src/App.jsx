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
                    <Routes>
                        <Route path="/New-Student-Guide/" element={<Home></Home>}></Route>
                        <Route path="/New-Student-Guide/International-Services" element={<InternationalServices></InternationalServices>}></Route>
                        <Route path="/New-Student-Guide/Academic-Success" element={<AcademicSuccess></AcademicSuccess>}></Route>
                        <Route path="/New-Student-Guide/Student-Employment" element={<StudentEmployment></StudentEmployment>}></Route>
                        <Route path="/New-Student-Guide/Counseling-Services" element={<CounselingServices></CounselingServices>}></Route>
                        <Route path="/New-Student-Guide/Diversity-on-Campus" element={<Diversity></Diversity>}></Route>
                        <Route path="/New-Student-Guide/References" element={<References></References>}></Route>
                    </Routes>
                </div>
                <div className="color1"></div>
            </main>
        </>
    );
}

export default App;
