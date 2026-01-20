import "../assets/Home.css";
export default function Home() {
  return (
    <div className="home">

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
  I’m Parthiv Chakraborty, a freelance graphic designer with 4+ years of solid experience in creative visual design. I don’t just make designs — I build vibes that convert. From clean minimal looks to bold, scroll-stopping visuals, I know how to turn ideas into eye-catching graphics.
</p>

<p className="hero-desc">
  Working with me? Expect smooth communication, fast creativity, zero boring stuff, and designs that actually hit different.
</p>

<p className="hero-desc">
  If you want visuals that speak loud, look premium, and stand out in the crowd — trust me, you’re gonna love working with me.
</p>

          <div className="signature-row">
            <span className="signature">Parthiv Chakraborty</span>
            <button className="cv-btn">View CV</button>
          </div>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fas fa-camera"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

      </div>
    </div>
  );
}
