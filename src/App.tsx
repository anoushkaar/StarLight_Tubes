import React from "react";
import { Route, Routes } from "react-router";
import ComingSoon from "./pages/ComingSoon";

const App: React.FC = () => (
  <Routes>
    <Route path="*" element={<ComingSoon />} />
  </Routes>
);

export default App;
