import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Bibliography from "./pages/Bibligraphy";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <main>
                <Routes>
                    <Route path="/New-Student-Guide/" element={<Home></Home>}></Route>
                    <Route path="/New-Student-Guide/Services" element={<Services></Services>}></Route>
                    <Route path="/New-Student-Guide/Bibliography" element={<Bibliography></Bibliography>}></Route>
                </Routes>
            </main>
        </>
    );
}

export default App;
