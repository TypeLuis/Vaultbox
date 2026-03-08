import "../styles/Dashboard.scss";
import { DevicesPage } from "./Devicepage";
import NavDashboard from "../components/NavDashboard";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Background grid */}
      <div className="dashboard__grid-bg" />

      {/* Sidebar */}
      <NavDashboard />

      {/* Main */}
      <DevicesPage />
    </div>
  );
}