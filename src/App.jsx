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
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/International-Services" element={<InternationalServices></InternationalServices>}></Route>
                        <Route path="/Academic-Success" element={<AcademicSuccess></AcademicSuccess>}></Route>
                        <Route path="/Student-Employment" element={<StudentEmployment></StudentEmployment>}></Route>
                        <Route path="/Counseling-Services" element={<CounselingServices></CounselingServices>}></Route>
                        <Route path="/Diversity-on-Campus" element={<Diversity></Diversity>}></Route>
                        <Route path="/References" element={<References></References>}></Route>
                    </Routes>
                </div>
                <div className="color1"></div>
            </main>
        </>
    );
}

export default App;
