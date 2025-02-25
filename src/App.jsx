import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Bibliography from "./pages/Bibligraphy"

function App() {
    return (
        <>
            <NavBar></NavBar>
            <main>
                <div>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/Services" element={<Services></Services>}></Route>
                        <Route path="/Bibliography" element={<Bibliography></Bibliography>}></Route>
                    </Routes>
                </div>
            </main>
        </>
    );
}

export default App;
