import { Route, Routes } from "react-router";
import About from "./pages/About";
import Coating from "./pages/Coating";
import Home from "./pages/Home";
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coating" element={<Coating />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
