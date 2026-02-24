import logo from "../assets/image.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="IEEE PES Logo" className="logo-image" />
      </div>

      <div className="nav-links">
        <a>Home</a>
        <a>Volunteer of the Year</a>
        <a>About</a>
        <a>Committees</a>
        <a>Projects</a>
        <a>Contact Us</a>
      </div>
    </nav>
  );
}