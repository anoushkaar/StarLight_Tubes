import { Route, Routes } from "react-router";
import StainlessSteelTube from "./components/sub pages/ StainlessSteelTube";
import StainlessSteelPipe from "./components/sub pages/StainlessSteelPipe";
import StainlessSteelRoundBar from "./components/sub pages/StainlessSteelRoundBar";
import StainlessSteelSheet from "./components/sub pages/StainlessSteelSheet";
import About from "./pages/About";
import Coating from "./pages/Coating";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Material from "./pages/Material";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/materials" element={<Material />} />
        <Route path="/coating" element={<Coating />} />
        <Route path="/contact" element={<Contact />} />

        {/* Home SubRoutes */}
        <Route path="/stainless-steel-tube" element={<StainlessSteelTube />} />
        <Route path="/stainless-steel-pipe" element={<StainlessSteelPipe />} />
        <Route
          path="/stainless-steel-sheet"
          element={<StainlessSteelSheet />}
        />
        <Route
          path="/stainless-steel-round-bar"
          element={<StainlessSteelRoundBar />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
