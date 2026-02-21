
import "./Dashboard.css"
const role = localStorage.getItem("role");
function Dashboard() {
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

      {/* Content */}
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
      <div className="card">Add Record</div>
    </>
  )}

  {role === "admin" && (
    <>
      <div className="card">User Management</div>
      <div className="card">System Analytics</div>
      <div className="card">Audit Logs</div>
    </>
  )}
</div>

    </div>
  );
}

export default Dashboard;
