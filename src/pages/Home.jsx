import "../assets/Home.css";

// import other section pages
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      {/* HOME SECTION */}
      <div className="home" id="home">

        <a
          href="https://wa.me/919436452223"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <span className="whatsapp-tooltip">Chat with me</span>
          <i className="fab fa-whatsapp"></i>
        </a>

        {/* Hero Section */}
        <div className="hero">
          <div className="hero-image">
            <img src="/Home.png" alt="Profile" />
          </div>

          <div className="hero-content">
            <p className="section-tag">ABOUT PERSONAL</p>

            <h1>
              Hello, I'm <br />
              <span>Parthiv Chakraborty</span>
            </h1>

            <p className="hero-desc">
                My name is <span>Parthiv Chakraborty</span>, and I am currently pursuing a 
                <span> Bachelor’s degree in Computer Science and Engineering (CSE)</span>. 
                Alongside my academic journey, I am a 
                <span> freelance graphic designer with over 4 years of hands-on experience</span> 
                in creative visual design.
              </p>

              <p className="hero-desc">
                I specialize in branding, logo design, UI/UX, event branding, and digital creatives, 
                with a strong focus on visual storytelling and unique concepts.
              </p>

              <p className="hero-desc">
                My background in CSE also gives me a basic understanding of coding and technology, 
                which helps me bridge creativity with technical thinking and deliver modern, 
                impactful design solutions.
              </p>

            <div className="signature-row">
              <span className="signature">Parthiv Chakraborty</span>
              <a
  href="/CV.png"
  target="_blank"
  rel="noopener noreferrer"
  className="cv-btn"
>
  View CV
</a>

            </div>

            <div className="social-icons">
              <a href="https://www.facebook.com/share/1CCPMfSMcd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/ParthivCha85024" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/parthiv__chakraborty?igsh=MW1kdXZpNWNvem5neg==&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer"><i className="fas fa-camera"></i></a>
              <a href="https://www.linkedin.com/in/parthiv-chakraborty-786402247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
        </div>
      </div>
<div className="trusted-section">
  

  <div className="trusted-slider">
    <div className="trusted-track">
      <img src="/logos/logo1.png" />
      <img src="/logos/logo2.jpg" />
      <img src="/logos/logo3.png" />
      <img src="/logos/logo4.png" />
      <img src="/logos/logo5.jpg" />
      <img src="/logos/logo6.jpg" />
      <img src="/logos/logo7.png" />
      <img src="/logos/logo8.png" />
      <img src="/logos/logo9.png" />
      <img src="/logos/logo10.png" />
      <img src="/logos/logo11.png" />
      <img src="/logos/logo12.png" />
      <img src="/logos/logo13.jpg" />

      {/* duplicate for smooth loop */}
      <img src="/logos/logo1.png" />
      <img src="/logos/logo2.jpg" />
      <img src="/logos/logo3.png" />
      <img src="/logos/logo4.png" />
      <img src="/logos/logo5.jpg" />
      <img src="/logos/logo6.jpg" />
      <img src="/logos/logo7.png" />
      <img src="/logos/logo8.png" />
      <img src="/logos/logo9.png" />
      <img src="/logos/logo10.png" />
      <img src="/logos/logo11.png" />
      <img src="/logos/logo12.png" />
      <img src="/logos/logo13.jpg" />
    </div>
  </div>
</div>

      {/* ABOUT SECTION */}
      <section id="about">
        <About />
      </section>

      {/* SERVICES SECTION */}
      <section id="services">
        <Services />
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
