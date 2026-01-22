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
            <h3>4+</h3>
            <p>EXP</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-text">

          <h3>
            Creative Designer &<br /><span>Visual Storyteller</span>
          </h3>
              <p className="about-para">
                I am a passionate graphic designer with over 
                <span> 4 years of experience </span>
                in creating visually impactful and meaningful designs. My skill set covers branding, 
                logo design, UI/UX, event creatives, and digital media, where I focus not just on design 
                but on delivering a clear visual message. I believe good design is a balance of 
                creativity, clarity, and purpose.
              </p>

              <p className="about-para">
                Creative visualization is my strongest skill — I don’t just design, I 
                <span> visualize stories and turn ideas into visuals</span>. Every project starts 
                with understanding the concept deeply and then transforming it into a unique and 
                engaging creative. This approach helps me produce designs that stand out, connect 
                with audiences, and leave a lasting impression.
              </p>

              <p className="about-para">
                In addition to digital design, I also 
                <span> know how to draw</span>, which strengthens my creative foundation. My drawing 
                skills help me sketch ideas, develop original concepts, and bring a more artistic 
                and authentic touch to my work. With experience, creativity, and strong visualization, 
                I constantly aim to evolve and deliver high-quality design solutions.
              </p>



         <div className="about-cards">

  <div className="about-card">
    <div className="about-main">
      <h4>Award Winner</h4>
      <p>15+ Design Awards</p>
    </div>
    <div className="about-footer">Excellence</div>
  </div>

  <div className="about-card">
    <div className="about-main">
      <h4>Client Focused</h4>
      <p>60+ Happy Clients</p>
    </div>
    <div className="about-footer">Trust</div>
  </div>

  <div className="about-card">
    <div className="about-main">
      <h4>Innovation</h4>
      <p>Creative Solutions</p>
    </div>
    <div className="about-footer">Ideas</div>
  </div>

  <div className="about-card">
    <div className="about-main">
      <h4>On Time</h4>
      <p>Always Deliver</p>
    </div>
    <div className="about-footer">Commitment</div>
  </div>

</div>

        </div>

      </div>

      {/* STATS */}
      <div className="about-stats">

        <div className="stat-box">
          <h3><CountUp end={200} />+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <h3><CountUp end={60} />+</h3>
          <p>Happy Clients</p>
        </div>

        <div className="stat-box">
          <h3><CountUp end={4} /></h3>
          <p>Years Experience</p>
        </div>

        <div className="stat-box">
          <h3><CountUp end={15} />+</h3>
          <p>Awards Won</p>
        </div>

      </div>

    </div>
  );
}
