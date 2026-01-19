import { useEffect, useState } from "react";
import "../assets/Service.css";

export default function Services() {
  return (
    <div className="services-page">

      {/* SERVICES */}
      <p className="section-tag center">OUR SERVICES</p>
      <h2 className="section-title center">
        What We <span>Do.</span>
      </h2>

      <p className="section-desc center">
        Delivering comprehensive design solutions that transform ideas into compelling visual narratives.
        Each service is crafted with precision and creative excellence.
      </p>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3>Brand Identity</h3>
          <p>We bring the right people together to challenge established thinking and drive transformation.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">📦</div>
          <h3>Product Design</h3>
          <p>We bring the right people together to challenge established thinking and drive transformation.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🖥</div>
          <h3>UI & UX Design</h3>
          <p>We bring the right people together to challenge established thinking and drive transformation.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🎬</div>
          <h3>Video Editing</h3>
          <p>We bring the right people together to challenge established thinking and drive transformation.</p>
        </div>

      </div>

      {/* SKILLS */}
      <div className="skills-section">

        <p className="section-tag center">EXPERTISE</p>
        <h2 className="section-title center">
          My <span>Skills</span>
        </h2>

        <div className="skills-grid">

          {[
            { name: "Photoshop", percent: 90 },
            { name: "Illustrator", percent: 80 },
            { name: "Premiere Pro", percent: 75 },
            { name: "After Effects", percent: 60 },
            { name: "Figma", percent: 70 },
          ].map((skill, i) => (
            <SkillCircle key={i} skill={skill} />
          ))}

        </div>

      </div>

    </div>
  );
}

/* ======================
   SKILL CIRCLE COMPONENT
====================== */
function SkillCircle({ skill }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start++;
      if (start <= skill.percent) {
        setCount(start);
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [skill.percent]);

  return (
    <div className="skill-circle">
      <div
        className="circle"
        style={{
          background: `conic-gradient(#00ff88 ${count * 3.6}deg, #222 0deg)`
        }}
      >
        <div className="circle-inner">{count}%</div>
      </div>
      <p>{skill.name}</p>
    </div>
  );
}
