
import "../styles/pages.css";
import energyVideo from "../assets/energy.mp4";
import advisor from "../assets/Advisor.jpg";


export default function About() {
  return (
    <div className="about-page">

      {/* HERO VIDEO SECTION */}

      <section className="about-hero">

        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={energyVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay">

          <h1>About IEEE PES</h1>

          <p>
            IEEE Power & Energy Society Student Branch Chapter of
            University of Moratuwa focuses on innovation, leadership
            and technological advancement in power engineering.
          </p>

        </div>

      </section>


      {/* ABOUT IEEE */}

      <section className="about-section">

        <h2>About IEEE</h2>

        <p>
          IEEE is the world's largest technical professional organization
          dedicated to advancing technology for the benefit of humanity.
        </p>

      </section>


      {/* VISION & MISSION */}

      <section className="vision-mission">

        <div className="vision-card">
          <h2>Our Vision</h2>

          <p>
            Foster technological innovation and excellence
            for the benefit of humanity.
          </p>
        </div>


        <div className="mission-card">
          <h2>Our Mission</h2>

          <p className="mission-text">
            IEEE will be essential to the global technical community and
            to technical professionals everywhere, and be universally
            recognized for the contributions of technology and of
            technical professionals in improving global conditions.
          </p>
        </div>

      </section>

      {/* ADVISOR */}

      <section className="advisor-section">

        <h2 className="advisor-title">Advisor</h2>

        <div className="advisor-card">

          <div className="advisor-image-container">

            <img
              src={advisor}
              alt="Advisor"
              className="advisor-img"
            />

            <div className="advisor-overlay">

              <p>B.Sc (Moratuwa), M.Eng. (Canada), P.Eng. (ON, Canada)</p>

              <p>Senior Lecturer Gr. II</p>

              <p>Department of Electrical Engineering</p>

              <p>University of Moratuwa</p>

            </div>

          </div>

          <h3>Mrs. K.A.T. Lasagani</h3>

          <p className="advisor-role">IEEE PES Chapter Advisor</p>

        </div>

      </section>

    </div>
  );
}