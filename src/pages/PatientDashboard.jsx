import { useState } from "react";
import Sidebar from "../components/patient/Sidebar";
// import Navbar from "../components/patient/Navbar";
import "./PatientDash.css";

function PatientDashboard() {
  const [requests, setRequests] = useState([
  { id: 1, doctor: "Dr. Ahmed", status: "pending" },
  { id: 2, doctor: "Dr. Sara", status: "pending" }
]);
const handleAccept = (id) => {
  setRequests(
    requests.map((req) =>
      req.id === id ? { ...req, status: "accepted" } : req
    )
  );
};

const handleReject = (id) => {
  setRequests(
    requests.map((req) =>
      req.id === id ? { ...req, status: "rejected" } : req
    )
  );
};
  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main">

<div className="dashboard-grid">

<div className="card profile-card">

<img src="https://i.pravatar.cc/120" className="avatar"/>

<h3>Nour Ramadan</h3>

<p>Patient ID: CC1021</p>

</div>
<div className="card info-card">

<h3>Personal Info</h3>

<p>Birthday: 12 Aug 2002</p>

<p>City: Cairo</p>

<p>Phone: 0100000000</p>

<p>Blood Type: A+</p>

</div>
<div className="card medical-card">

<h3>Medical Records</h3>

<div className="records-list">

<div className="record-card">
  <h4>Blood Test</h4>
  <p>Doctor: Dr. Ahmed</p>
  <p>Date: 12 Mar 2026</p>
</div>

<div className="record-card">
  <h4>X-Ray Scan</h4>
  <p>Doctor: Dr. Sara</p>
  <p>Date: 10 Mar 2026</p>
</div>

<div className="record-card">
  <h4>Heart Check</h4>
  <p>Doctor: Dr. Omar</p>
  <p>Date: 7 Mar 2026</p>
</div>

</div>

</div>
<div className="card stats-card">

<h3>Health Stats</h3>

<p>Heart Rate: 72 bpm</p>

<p>Blood Pressure: 120/80</p>

<p>Weight: 68 kg</p>

</div>

<div className="card access-card">

<h2>Access Requests</h2>

<div className="requests-container">
  {requests.map((req) => (
    <div className="request-card" key={req.id}>
      <p>{req.doctor} wants access to your records</p>

      {req.status === "pending" && (
        <div className="buttons">
          <button onClick={() => handleAccept(req.id)}>Accept</button>
          <button onClick={() => handleReject(req.id)}>Reject</button>
        </div>
      )}

      {req.status === "accepted" && <span className="accepted">Accepted</span>}
      {req.status === "rejected" && <span className="rejected">Rejected</span>}
    </div>
  ))}
</div>
</div>
<div className="card activity-card">

<h3>Recent Activity</h3>

<p>Dr. Ahmed added a record</p>

<p>You accepted access request</p>

</div>
</div>

      </div>

    </div>
  );
}

export default PatientDashboard;