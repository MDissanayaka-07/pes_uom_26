import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./Pages/About";
import Committees from "./Pages/Commitees";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

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