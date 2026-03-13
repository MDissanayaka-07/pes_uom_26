import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Committees from "./pages/Commitees.tsx";
import AwardsPanel from "./components/AwardsPanel.tsx";

function App() {
  return (
    <>
      <Navbar />
      <AwardsPanel />

      <Routes>

        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/committees" element={<Committees />} />
        

      </Routes>

      <Footer />
    </>
  );
}

export default App;

