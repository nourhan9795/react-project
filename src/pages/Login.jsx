import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [remember, setRemember] = useState(false);
  
  const handleLogin = () => {
    if (!role || !name) {
      alert("Please fill all fields");
      return;
    }

  if (remember) {
    localStorage.setItem("role", role);
    localStorage.setItem("name", name);
  }
    if (role === "patient") {
    navigate("/patient");
  }
  };

  return (
    <div className="login-container">
      
      {/* Left Image */}
      <div className="login-image"></div>

      {/* Right Form */}
      <div className="login-form">
        <div className="login-card">
          <h1>CairoCare</h1>
          <p>Secure Medical Records System</p>

          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />
          <div className="remember">
             <label>
              <input
                type="checkbox"
                  onChange={(e) => setRemember(e.target.checked)}
              />
                   Remember me
              </label>
           </div>

          <select onChange={(e) => setRole(e.target.value)}>
            <option value="">Select role</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>

          <button onClick={handleLogin}>Login</button>
        </div>
      </div>

    </div>
  );
}

export default Login;