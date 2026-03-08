
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Committees from "./pages/Commitees.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";


function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/committees" element={<Committees />} />
      {/*  <Route path="/achievements" element={<Achievements />} />
        <Route path="/achievement/:id" element={<AchievementDetails />} />*/}

      </Routes>

      <Footer />
    </>
  );
}

export default App;

