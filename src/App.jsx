import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDash from "./pages/DoctorDash";
function App() {
  return (
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDash />} />
      </Routes>
  );
}

export default App;
