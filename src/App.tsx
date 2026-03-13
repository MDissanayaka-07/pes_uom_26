
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Committees from "./pages/Commitees.tsx";
import AwardsPanel from "./components/AwardsPanel.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import VolunteerPage from "./pages/VolunteerPage.tsx";


function App() {
  return (
    <>
      <Navbar />
      <AwardsPanel />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/committees" element={<Committees />} />
        
        <Route path="/volunteer" element={<VolunteerPage />} />
      {/*  <Route path="/achievements" element={<Achievements />} />
        <Route path="/achievement/:id" element={<AchievementDetails />} />*/}

      </Routes>

      <Footer />
    </>
  );
}

export default App;

