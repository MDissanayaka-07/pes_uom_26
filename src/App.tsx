import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Committees from "./pages/Commitees.tsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/achievement/:id" element={<AchievementDetails />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;

