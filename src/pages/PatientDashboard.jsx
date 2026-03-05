import Sidebar from "../components/patient/Sidebar";
import Navbar from "../components/patient/Navbar";
import "./PatientDash.css";

function PatientDashboard() {
  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="dashboard-grid">

          <div className="card profile-card">Profile</div>
          <div className="card info-card">Personal Info</div>
          <div className="card medical-card">Medical Records</div>

          <div className="card stats-card">Health Stats</div>
          <div className="card empty-card"></div>
          <div className="card access-card">Access Requests</div>

          <div className="card activity-card">Recent Activity</div>

        </div>

      </div>

    </div>
  );
}

export default PatientDashboard;