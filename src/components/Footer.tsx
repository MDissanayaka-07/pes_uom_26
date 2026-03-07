import "../styles/pages.css";

export default function Footer() {

  return (
    <footer className="footer">

      <h3>IEEE PES Student Branch Chapter</h3>

      <p>University of Moratuwa</p>

      <div className="footer-links">
        <span>Home</span>
        <span>About</span>
        <span>Committees</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>

      <hr />

      <p className="copyright">
        © 2026 IEEE – All rights reserved.
      </p>

    </footer>
  );
}