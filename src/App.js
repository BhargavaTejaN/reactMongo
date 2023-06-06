import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Home from "./components/Home/index";
import Students from "./components/Students/index";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
}
