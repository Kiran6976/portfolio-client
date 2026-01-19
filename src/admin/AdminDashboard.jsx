import { useState } from "react";
import AddPortfolio from "./AddPortfolio";
import ManagePortfolio from "./ManagePortfolio";
import Messages from "./Messages";
import "../assets/Admin.css";


export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>

        <ul className="admin-menu">
          <li onClick={() => setActivePage("dashboard")}>Dashboard</li>
          <li onClick={() => setActivePage("add")}>Add Portfolio</li>
          <li onClick={() => setActivePage("manage")}>Manage Portfolio</li>
          <li onClick={() => setActivePage("messages")}>Messages</li>
          <li className="logout">Logout</li>
        </ul>
      </aside>

      {/* Main */}
      <div className="admin-main">

        <div className="admin-header">
          <h3>Admin Dashboard</h3>
        </div>

        <div className="admin-content">

          {activePage === "dashboard" && (
            <>
              <h2>Dashboard Overview</h2>
              <p>Welcome to your admin panel.</p>
            </>
          )}

          {activePage === "add" && <AddPortfolio />}

          {activePage === "manage" && <ManagePortfolio />}

          {activePage === "messages" && <Messages />}


        </div>

      </div>

    </div>
  );
}
