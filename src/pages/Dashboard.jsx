import "./Dashboard.css";
import { useState, useEffect } from "react";

function Dashboard() {

  const role = localStorage.getItem("role");

  const [records, setRecords] = useState([]);
  const [recordText, setRecordText] = useState("");

  useEffect(() => {
    const savedRecords = localStorage.getItem("records");
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords));
    }
  }, []);

  const addRecord = () => {
    if (!recordText) return;

    const newRecords = [...records, recordText];
    setRecords(newRecords);

    localStorage.setItem("records", JSON.stringify(newRecords));

    setRecordText("");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{ width: "220px", background: "#1e293b", color: "white", padding: "20px" }}>
        <h1>Welcome {role}</h1>
        <h2>CairoCare</h2>
        <p>Dashboard</p>
        <p>Records</p>
        <p>Requests</p>
        <p>Audit Logs</p>
        <p>Settings</p>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px" }}>
        
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          {role === "patient" && (
            <>
              <div className="card">View Records</div>
              <div className="card">Upload Record</div>
              <div className="card">Manage Permissions</div>
            </>
          )}

          {role === "doctor" && (
            <>
              <div className="card">Patient List</div>
              <div className="card">Request Access</div>
              <div>
             <h2 style={{ marginTop: "40px" }}>Add Medical Record</h2>

           <input
      placeholder="Enter record..."
      value={recordText}
      onChange={(e) => setRecordText(e.target.value)}
      style={{ padding: "10px", marginRight: "10px" }}
          />

    <button onClick={addRecord}>Add Record</button>
    </div>
            </>
          )}

          {role === "admin" && (
            <>
              <div className="card">User Management</div>
              <div className="card">System Analytics</div>
              <div className="card">Audit Logs</div>
            </>
          )}

          {(role === "patient" || role === "doctor") && (
  <>
    <h2 style={{ marginTop: "30px" }}>Medical Records</h2>

    <div style={{ marginTop: "20px" }}>
      {records.map((rec, index) => (
        <div key={index} className="card">
          {rec}
        </div>
      ))}
    </div>
  </>
)}
        </div>



      </div>

    </div>
  );
}

export default Dashboard;