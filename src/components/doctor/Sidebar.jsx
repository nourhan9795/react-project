import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">CairoCare</h2>

      <ul className="menu">

        <li className="active">Dashboard</li>

        <li>Patients</li>

        <li>Add Record</li>

        <li>Request Access</li>

        <li>Activity Logs</li>

        <li>Settings</li>

      </ul>

    </div>
  );
}

export default Sidebar;