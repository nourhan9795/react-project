import Navbar from "../components/Navbar";
import "./Landing.css";
import doctorImg from "../assets/doctor.jpg"; // حطي صورة هنا
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <Navbar />
      <section className="hero">
  <div className="hero-text">
    <p className="small-text">COMPASSION • TRUST • CARE</p>

    <h1>
    We Are Providing Best Health Services
    </h1>

    <p className="hero-description">
      Because every patient deserves personalized attention and trusted care.
      From preventive checkups to emergency services, our dedicated medical
      team is here 24/7 to ensure your safety, comfort, and well-being.
    </p>

    <Link to="/login">
  <button className="services-btn">Explore Our Services</button>
</Link>
  </div>
</section>

      

      

      <section className="cards">
        <div className="card">Book Appointment</div>
        <div className="card">Consult Doctors</div>
        <div className="card">24/7 Emergency 
          
       
          
        </div>
      </section>
    </>
  );
}

export default Landing;
