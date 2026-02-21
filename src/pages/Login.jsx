import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [role, setRole] = useState("");
   const navigate = useNavigate();
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ padding: "30px", background: "white", borderRadius: "10px", width: "300px" }}>
        <h2>Login</h2>

        <input placeholder="Email" style={{ width: "100%", marginTop: "10px" }} />
        <input placeholder="Password" type="password" style={{ width: "100%", marginTop: "10px" }} />

        <select
          style={{ width: "100%", marginTop: "10px" }}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select>
<button
  style={{ width: "100%", marginTop: "15px" }}
  onClick={() => {
    localStorage.setItem("role", role);
    navigate("/dashboard");
  }}>

  Login
</button>
      </div>
    </div>
  );
}

export default Login;
