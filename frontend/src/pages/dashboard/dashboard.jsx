
import React, { useState } from "react";
import {
  Home, Upload, Clock, ChartColumn, User, Settings, LogOut,
  Bell, FileText, CheckCircle, AlertTriangle, BarChart3,
  CloudUpload, Brain, ShieldCheck, Layers, FileBarChart,
  MoreVertical, ArrowRight, Menu, X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Dashboard");
  const [files, setFiles] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  const documents = [
    { name: "Employment_Contract.pdf", type: "PDF", status: "No Risks", time: "2 hours ago", risk: false },
    { name: "NDA_Agreement.docx", type: "DOC", status: "2 Risks", time: "5 hours ago", risk: true },
    { name: "Loan_Agreement.pdf", type: "PDF", status: "1 Risk", time: "Yesterday", risk: true }
  ];

  const handleFiles = (selectedFiles) => {
    setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
  };

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Upload Documents", icon: Upload, path: "/upload" },
    { name: "Analysis History", icon: Clock, path: "/history" },
    { name: "Reports", icon: ChartColumn, path: "/reports" },
    { name: "Profile", icon: User, path: "/profile" },
    { name: "Settings", icon: Settings, path: "/settings" }
  ];

  const stats = [
    { value: "24", label: "Total Documents", icon: FileText, color: "blue" },
    { value: "18", label: "Analyzed", icon: CheckCircle, color: "green" },
    { value: "3", label: "Potential Risks", icon: AlertTriangle, color: "red" },
    { value: "21", label: "Reports Generated", icon: BarChart3, color: "purple" }
  ];

  const features = [
    { title: "AI Analysis", description: "Get summaries and key information from documents.", icon: Brain, path: "/analysis", color: "blue" },
    { title: "Risk Detection", description: "Identify inconsistencies and suspicious clauses.", icon: ShieldCheck, path: "/risk-detection", color: "green" },
    { title: "Extracted Data", description: "Automatically extract important fields and entities.", icon: Layers, path: "/extracted-data", color: "cyan" },
    { title: "Reports", description: "Generate and download detailed analysis reports.", icon: FileBarChart, path: "/reports", color: "purple" }
  ];

  return (
    <div className="dashboard">

      {/* MOBILE MENU BUTTON */}
      <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <X /> : <Menu />}
      </button>

      {/* SIDEBAR */}
      <aside className={`sidebar ${mobileMenu ? "sidebar-open" : ""}`}>
        <div className="dashboard-logo">
          <FileText size={35} />
          <h2>DocuSleuth <span>AI</span></h2>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${active === item.name ? "active" : ""}`}
              onClick={() => {
                setActive(item.name);
                if (item.name !== "Dashboard") navigate(item.path);
                setMobileMenu(false);
              }}
            >
              <item.icon size={23} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <button className="logout-btn" onClick={() => navigate("/login")}>
          <LogOut size={23} />
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="header-user">
            <button className="notification-btn" aria-label="Notifications">
              <Bell />
            </button>
            <div className="avatar">PK</div>
            <span>Piyush Kumar</span>
            <span className="dropdown-arrow">⌄</span>
          </div>
        </header>

        <div className="dashboard-content">

          {/* WELCOME BANNER */}
          <section className="welcome-banner">
            <div>
              <h2>Welcome back, Piyush! 👋</h2>
              <p>Analyze, extract and detect risks in your documents with AI.</p>
            </div>
            <div className="banner-icon">
              <FileText size={85} />
              <span>AI</span>
            </div>
          </section>

          {/* STATISTICS */}
          <section className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className={`stat-icon ${stat.color}`}>
                  <stat.icon size={32} />
                </div>
                <div>
                  <h2>{stat.value}</h2>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </section>

          {/* UPLOAD AND RECENT DOCUMENTS */}
          <section className="middle-grid">

            <div className="upload-card">
              <label
                className="upload-area"
                htmlFor="document-upload"
              >
                <CloudUpload size={55} />
                <h3>Upload Your Document</h3>
                <p>Drag & drop your file here or click to browse</p>
                <small>Supports PDF, DOCX, TXT (max 20 MB)</small>
                <span className="upload-button">
                  <Upload size={20} /> Upload Document
                </span>
              </label>

              <input
                id="document-upload"
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                multiple
                hidden
                onChange={(e) => handleFiles(e.target.files)}
              />

              {files.length > 0 && (
                <div className="selected-files">
                  {files.map((file, index) => (
                    <p key={`${file.name}-${index}`}>✓ {file.name}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="recent-card">
              <div className="card-heading">
                <h3>Recent Documents</h3>
                <button onClick={() => navigate("/history")}>
                  View All <ArrowRight size={17} />
                </button>
              </div>

              {documents.map((doc) => (
                <div className="document-row" key={doc.name}>
                  <div className={`file-type ${doc.type.toLowerCase()}`}>
                    {doc.type}
                  </div>
                  <div className="document-info">
                    <h4>{doc.name}</h4>
                    <p>
                      Analyzed ·
                      <span className={doc.risk ? "risk-text" : "safe-text"}>
                        {doc.status}
                      </span>
                    </p>
                  </div>
                  <span className="document-time">{doc.time}</span>
                  <button className="more-btn" aria-label="More options">
                    <MoreVertical size={20} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* FEATURE CARDS */}
          <section className="feature-grid">
            {features.map((feature) => (
              <button
                className="feature-card"
                key={feature.title}
                onClick={() => navigate(feature.path)}
              >
                <div className={`feature-icon ${feature.color}`}>
                  <feature.icon size={35} />
                </div>
                <ArrowRight className="feature-arrow" size={22} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </button>
            ))}
          </section>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;
