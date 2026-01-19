import CountUp from "./CountUp";
import "../assets/About.css";

export default function About() {
  return (
    <div className="about-page">

      <p className="section-tag center">GET TO KNOW ME</p>
      <h2 className="section-title center">
        About <span>Me</span>
      </h2>

      <div className="about-content">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src="/About.png" alt="About" />
          <div className="experience-badge">
            <h3>12+</h3>
            <p>YEARS</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-text">

          <h3>
            Creative Designer &<br /><span>Visual Storyteller</span>
          </h3>

          <p>
            I'm Parthiv Chakraborty, a passionate graphic designer with over 12 years
            of experience crafting compelling visual narratives.
          </p>

          <p>
            I specialize in transforming complex ideas into stunning visual solutions
            that resonate with audiences. From brand identity to digital experiences,
            I bring a unique blend of creativity, strategic thinking, and technical expertise.
          </p>

          <p>
            My approach is rooted in understanding the core essence of each brand and
            translating it into designs that not only look beautiful but also drive results.
            I believe great design is invisible — it simply works.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <h4>Award Winner</h4>
              <p>25+ Design Awards</p>
            </div>

            <div className="about-card">
              <h4>Client Focused</h4>
              <p>85+ Happy Clients</p>
            </div>

            <div className="about-card">
              <h4>Innovation</h4>
              <p>Creative Solutions</p>
            </div>

            <div className="about-card">
              <h4>On Time</h4>
              <p>Always Deliver</p>
            </div>

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="about-stats">

        <div className="stat-box">
          <h3><CountUp end={150} />+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <h3><CountUp end={85} />+</h3>
          <p>Happy Clients</p>
        </div>

        <div className="stat-box">
          <h3><CountUp end={12} /></h3>
          <p>Years Experience</p>
        </div>

        <div className="stat-box">
          <h3><CountUp end={25} />+</h3>
          <p>Awards Won</p>
        </div>

      </div>

    </div>
  );
}
