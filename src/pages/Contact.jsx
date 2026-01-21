import { useState } from "react";
import api from "../services/api";   // 👈 adjust path if needed
import "../assets/Contact.css";

export default function Contact() {

  const [form, setForm] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
      await api.post("/contact", form);
      alert("Message sent successfully!");
      setForm({name:"",email:"",subject:"",message:""});
    }catch(err){
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-page">

      <p className="section-tag center">GET IN TOUCH</p>
      <h2 className="section-title center">
        Let’s Work <span>Together</span>
      </h2>

      <p className="section-desc center">
        Have a project in mind? Let’s create something amazing together.
        Drop me a message and I’ll get back to you soon.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <div className="form-row">
          <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your Name" />
          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your Email" />
        </div>

        <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" />

        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" maxLength="500"></textarea>

        <button type="submit" className="send-btn">
          Send Message
        </button>

      </form>

      <h3 className="inspired-title">
        Get <span>Inspired!</span>
      </h3>

      <div className="trusted-footer">
  <p className="trusted-footer-title">Trusted By</p>

  <div className="trusted-footer-logos">
<img src="/logos/logo2.jpg" />
<img src="/logos/logo4.png" />
 <img src="/logos/logo5.jpg" />
 <img src="/logos/logo7.png" />
  <img src="/logos/logo8.png" />
  <img src="/logos/logo9.png" />
  <img src="/logos/logo11.png" />
  <img src="/logos/logo12.png" />
      <img src="/logos/logo1.png" />
      
      <img src="/logos/logo3.png" />
      
     
      <img src="/logos/logo6.jpg" />
      
      
     
      <img src="/logos/logo10.png" />
      
      
      <img src="/logos/logo13.jpg" />
  </div>
</div>


      <div className="social-icons">
        <a href="https://www.facebook.com/share/1CCPMfSMcd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://x.com/ParthivCha85024" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
        <a href="https://www.instagram.com/parthiv__chakraborty?igsh=MW1kdXZpNWNvem5neg==&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/parthiv-chakraborty-786402247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fas fa-globe"></i></a>
      </div>

    </div>

    
  );
}
