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
  Hi, I’m <span>Parthiv Chakraborty</span>, a creative graphic designer with 
  <span> 4+ years of experience</span> in transforming ideas into powerful visual stories. 
  I don’t just make graphics — I <span>visualize concepts and shape them into unique, engaging creatives</span> 
   that leave a lasting impression.
</p>

<p className="about-para">
  My expertise includes <span>brand identity, logo design, UI/UX, event branding, and digital creatives</span>. 
  Every project I work on is driven by originality, strategy, and attention to detail, ensuring that each design 
  not only looks good but also communicates the right message and strengthens the brand.
</p>

<p className="about-para">
  Alongside design, I’m a <span>CSE engineering student</span>, which gives me a technical edge in today’s digital world. 
  With knowledge of <span>coding and technology</span>, I create designs that are functional, user-focused, and future-ready. 
  If you’re looking for a designer who blends <span>creativity with smart thinking</span>, you’ll enjoy working with me.
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
