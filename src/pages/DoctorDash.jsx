import { useState } from "react";
import Sidebar from "../components/doctor/Sidebar";
import "./DoctorDash.css";

function DoctorDash() {
  const [patients] = useState([
    { id: 1, name: "Nour Ramadan", age: 22, condition: "Diabetes" },
    { id: 2, name: "Ali Hassan", age: 30, condition: "Heart Disease" },
    { id: 3, name: "Mona Ahmed", age: 27, condition: "Asthma" }
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main">

        <div className="dashboard-grid">

          {selectedPatient && (
            <div className="modal">
              <div className="modal-content">
                <h2>Patient Details</h2>
                <p><strong>Name:</strong> {selectedPatient.name}</p>
                <p><strong>Age:</strong> {selectedPatient.age}</p>
                <p><strong>Condition:</strong> {selectedPatient.condition}</p>
                <button onClick={() => setSelectedPatient(null)}>Close</button>
              </div>
            </div>
          )}

          {/* Doctor Profile */}
          <div className="card profile-card">
            <h3>Doctor Profile</h3>
            <div className="doctor-info">
              <img src="https://i.pravatar.cc/100" alt="doctor" />
              <div>
                <p><strong>Dr. Ahmed</strong></p>
                <p>Cardiology</p>
                <p>Cairo Care Hospital</p>
                <span className="status">Online</span>
              </div>
            </div>
          </div>

          {/* Activity Logs */}
          <div className="card logs-card">
            <h3>Activity Logs</h3>
            <p>Added record for Nour</p>
            <p>Requested access to Ali</p>
          </div>

          {/* Patient List */}
          <div className="card patients-card">
            <h3>Patient List</h3>
            {patients.map((patient) => (
              <div key={patient.id} className="patient-item">
                <div>
                  <p><strong>{patient.name}</strong></p>
                  <p>Age: {patient.age}</p>
                  <p>Condition: {patient.condition}</p>
                </div>
                <button onClick={() => setSelectedPatient(patient)}>View</button>
              </div>
            ))}
          </div>

          {/* Add Medical Record */}
          <div className="card record-card">
            <h3>Add Medical Record</h3>
            <label>Patient Name</label>
            <input placeholder="Enter patient name" />
            <label>Record Details</label>
            <textarea placeholder="Write medical details..."></textarea>
            <button>Add Record</button>
          </div>

          {/* Request Access */}
          <div className="card access-card">
            <h3>Request Access</h3>
            <input placeholder="Patient ID" />
            <button>Send Request</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default DoctorDash;