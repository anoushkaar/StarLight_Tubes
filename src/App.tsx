import { Route, Routes } from "react-router";
import StainlessSteelTube from "./components/Subpages/ StainlessSteelTube";
import About from "./pages/About";
import Coating from "./pages/Coating";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coating" element={<Coating />} />
        <Route path="/contact" element={<Contact />} />

        {/* Home SubRoutes */}
        <Route
          path="/home/stainless-steel-tube"
          element={<StainlessSteelTube />}
        />
      </Routes>
    </>
  );
}

export default App;
