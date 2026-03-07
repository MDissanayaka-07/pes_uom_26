import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./Pages/About";
import Committees from "./Pages/Commitees";

import Achievements from "./components/Achievements";
import AchievementDetails from "./Pages/AchievementDetails";

import { Routes, Route } from "react-router-dom";

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

