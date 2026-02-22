import Navbar from "../components/Navbar";
import "./Landing.css";
import doctorImg from "../assets/doctor.jpg"; // حطي صورة هنا

function Landing() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-text">
          <p className="small-text">CARING FOR LIFE</p>
          <h1>
            Leading the Way <br />
            in Medical Excellence
          </h1>
          <button className="services-btn">Our Services</button>
        </div>

        <div className="hero-image">
          <img src={doctorImg} alt="doctor" />
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