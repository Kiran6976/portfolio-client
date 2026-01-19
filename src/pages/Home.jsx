import "../assets/Home.css";
export default function Home() {
  return (
    <div className="home">

    <a
  href="https://wa.me/919366758631"
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
            A passionate graphic designer crafting visual experiences that
            blend creativity with strategic thinking. Specializing in brand
            identity, digital design, and motion graphics that leave lasting
            impressions.
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
