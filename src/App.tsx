import { Route, Routes } from "react-router";
import About from "./pages/About";
import Coating from "./pages/Coating";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coating" element={<Coating />} />
      </Routes>
    </>
  );
}

export default App;
