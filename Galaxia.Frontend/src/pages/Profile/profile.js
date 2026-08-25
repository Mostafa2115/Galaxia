import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../context/AuthContext";
import {
  FaRocket,
  FaGlobe,
  FaMoon,
  FaStar,
  FaBookmark,
  FaCog,
  FaSignOutAlt,
  FaEdit,
  FaCheckCircle,
  FaUserAstronaut,
  FaCompass,
  FaShieldAlt,
  FaBell,
  FaLock,
  FaCamera,
  FaTrash
} from "react-icons/fa";
import { GiCometSpark, GiOrbit } from "react-icons/gi";
import "./profile.css";

function Profile() {
  const navigate = useNavigate();
  const { user, logout, updateProfile, changePassword } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [saveMessage, setSaveMessage] = useState("");
  const fileInputRef = useRef(null);

  // Security Form States
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [pwdSuccess, setPwdSuccess] = useState("");

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPwdError("");
    setPwdSuccess("");

    if (newPassword !== confirmNewPassword) {
      setPwdError("New passwords do not match.");
      return;
    }

    try {
      await changePassword(currentPassword, newPassword);
      setPwdSuccess("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setTimeout(() => setPwdSuccess(""), 4000);
    } catch (err) {
      setPwdError(err.message || "Failed to change password.");
    }
  };

  // Editable Profile Form State
  const [editForm, setEditForm] = useState(() => ({
    fullName: user ? user.fullName : "",
    username: user ? user.username : "",
    email: user ? user.email : "",
    location: user ? user.location : "",
    favoriteObject: user ? user.favoriteObject : "",
    bio: user ? user.bio : "",
    avatar: user ? user.avatar : null
  }));

  const handleAvatarFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const imageResult = reader.result;
        setEditForm((prev) => ({ ...prev, avatar: imageResult }));
        updateProfile({ avatar: imageResult });
        setSaveMessage("Profile photo updated successfully!");
        setTimeout(() => setSaveMessage(""), 4000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setEditForm((prev) => ({ ...prev, avatar: null }));
    updateProfile({ avatar: null });
    setSaveMessage("Profile photo removed.");
    setTimeout(() => setSaveMessage(""), 4000);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    updateProfile(editForm);
    setSaveMessage("Profile updated successfully!");
    setTimeout(() => setSaveMessage(""), 4000);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out of your explorer account?")) {
      logout();
      navigate("/signin");
    }
  };

  // If user is not logged in, render Space Access Denied / Sign In Prompt
  if (!user) {
    return (
      <>
        <Navbar />
        <main className="profile-page">
          <div className="profile-container">
            <div className="auth-card text-center" style={{ margin: "60px auto", maxWidth: "500px", textAlign: "center" }}>
              <div className="auth-icon-badge" style={{ margin: "0 auto 20px" }}>
                <FaLock />
              </div>
              <h2 style={{ color: "#fff", fontSize: "28px", marginBottom: "10px" }}>Explorer Access Required</h2>
              <p style={{ color: "#b5b5c8", marginBottom: "30px", lineHeight: "1.6" }}>
                You need to sign in to access your personal space explorer dashboard, saved objects, and mission progress.
              </p>
              <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
                <NavLink to="/signin" className="auth-submit-btn" style={{ textDecoration: "none", display: "inline-block", width: "auto", padding: "12px 30px" }}>
                  Sign In
                </NavLink>
                <NavLink to="/register" className="social-btn" style={{ textDecoration: "none", display: "inline-block", width: "auto", padding: "12px 30px" }}>
                  Create Account
                </NavLink>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const favorites = user.favorites || [];
  const stats = user.stats || { planets: 0, moons: 0, galaxies: 0, favoritesCount: favorites.length };
  const activities = user.activities || [];

  return (
    <>
      <Navbar />

      <main className="profile-page">
        <div className="profile-container">
          
          {/* Hidden File Input for Avatar Upload */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleAvatarFileSelect}
            accept="image/*"
            style={{ display: "none" }}
          />

          {/* ================= USER HEADER CARD ================= */}
          <section className="profile-header-card">
            <div className="profile-cover"></div>
            
            <div className="profile-header-content">
              <div className="avatar-wrapper">
                <div className="avatar-box">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.fullName} className="user-avatar-img" />
                  ) : (
                    <FaUserAstronaut />
                  )}
                  <button
                    type="button"
                    className="avatar-change-badge"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    title="Change Profile Photo"
                  >
                    <FaCamera />
                  </button>
                </div>
                <span className="online-indicator" title="Explorer Online"></span>
              </div>

              <div className="user-details font-glow">
                <div className="user-title-row">
                  <h2>{user.fullName}</h2>
                  <span className="badge-rank">{user.rank}</span>
                </div>
                <p className="username">{user.username} • Joined {user.joined}</p>
                <p className="user-bio">{user.bio}</p>
                
                <div className="user-tags">
                  <span className="tag"><FaCompass /> {user.location}</span>
                  <span className="tag"><FaStar /> {user.badge}</span>
                  <span className="tag"><GiCometSpark /> Fav: {user.favoriteObject}</span>
                </div>
              </div>

              <div className="header-actions">
                <button
                  className="btn-header-edit"
                  onClick={() => setActiveTab("edit")}
                >
                  <FaEdit /> Edit Profile
                </button>
                <button
                  className="btn-header-logout"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt /> Sign Out
                </button>
              </div>
            </div>
          </section>

          {/* ================= STATS COUNTER GRID ================= */}
          <section className="profile-stats-grid">
            <div className="profile-stat-card">
              <div className="stat-icon-wrapper stat-planets">
                <FaGlobe />
              </div>
              <div className="stat-info">
                <h3>{stats.planets}</h3>
                <span>Planets Explored</span>
              </div>
            </div>

            <div className="profile-stat-card">
              <div className="stat-icon-wrapper stat-moons">
                <FaMoon />
              </div>
              <div className="stat-info">
                <h3>{stats.moons}</h3>
                <span>Moons Cataloged</span>
              </div>
            </div>

            <div className="profile-stat-card">
              <div className="stat-icon-wrapper stat-galaxies">
                <GiOrbit />
              </div>
              <div className="stat-info">
                <h3>{stats.galaxies}</h3>
                <span>Galaxies Visited</span>
              </div>
            </div>

            <div className="profile-stat-card">
              <div className="stat-icon-wrapper stat-bookmarks">
                <FaBookmark />
              </div>
              <div className="stat-info">
                <h3>{favorites.length}</h3>
                <span>Saved Favorites</span>
              </div>
            </div>
          </section>

          {/* ================= TABS NAVIGATION ================= */}
          <div className="profile-tabs-nav">
            <button
              className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              <FaCompass /> Overview
            </button>
            <button
              className={`tab-btn ${activeTab === "favorites" ? "active" : ""}`}
              onClick={() => setActiveTab("favorites")}
            >
              <FaBookmark /> Favorites ({favorites.length})
            </button>
            <button
              className={`tab-btn ${activeTab === "edit" ? "active" : ""}`}
              onClick={() => setActiveTab("edit")}
            >
              <FaEdit /> Edit Profile & Photo
            </button>
            <button
              className={`tab-btn ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              <FaCog /> Settings & Security
            </button>
            {user.role === "Admin" && (
              <button
                className={`tab-btn ${activeTab === "admin" ? "active" : ""}`}
                onClick={() => setActiveTab("admin")}
              >
                <FaShieldAlt /> Admin Panel
              </button>
            )}
          </div>

          {/* ================= TAB CONTENT SECTIONS ================= */}
          <div className="profile-tab-content">
            
            {/* OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="tab-pane overview-pane">
                
                <div className="overview-grid">
                  
                  {/* Explorer Level Progress */}
                  <div className="pane-card progress-card">
                    <h3><FaRocket /> Cosmic Level Progress</h3>
                    <p className="card-subtext">{user.badge} - {user.exp || 0} / {user.maxExp || 1000} EXP</p>
                    
                    <div className="exp-bar-container">
                      <div
                        className="exp-bar-fill"
                        style={{ width: `${Math.min(100, ((user.exp || 0) / (user.maxExp || 1000)) * 100)}%` }}
                      ></div>
                    </div>
                    
                    <div className="exp-milestones">
                      <span>Level {user.level || 1}</span>
                      <span>Next Level: Deep Space Specialist</span>
                    </div>

                    <div className="achievement-badges">
                      <span className="badge-item" title="Explored Space">🪐 Solar Explorer</span>
                      <span className="badge-item" title="Saved Moons">🌕 Moon Sentinel</span>
                      <span className="badge-item" title="Discovered Deep Galaxies">🌀 Galaxy Pioneer</span>
                    </div>
                  </div>

                  {/* Mission Log */}
                  <div className="pane-card mission-log-card">
                    <h3><GiCometSpark /> Recent Exploration Log</h3>
                    
                    {activities.length > 0 ? (
                      <ul className="activity-list">
                        {activities.map((act, index) => (
                          <li key={act.id || index}>
                            <div className="activity-icon"><FaCheckCircle /></div>
                            <div className="activity-text">
                              <strong>{act.title}</strong>
                              <span>{act.time}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ color: "#b5b5c8", marginTop: "15px" }}>No recent activity logged yet.</p>
                    )}
                  </div>

                </div>

              </div>
            )}

            {/* FAVORITES TAB */}
            {activeTab === "favorites" && (
              <div className="tab-pane favorites-pane">
                <div className="pane-header">
                  <h3>Saved Astronomical Celestial Objects</h3>
                  <p>Quick access to your bookmarked planets, moons, and galaxies.</p>
                </div>

                {favorites.length > 0 ? (
                  <div className="favorites-grid">
                    {favorites.map((fav) => (
                      <div key={fav.id} className="fav-card">
                        <div className="fav-header">
                          <GiOrbit className="card-icon text-galaxy" />
                          <span className="fav-category">{fav.category || "Celestial"}</span>
                        </div>
                        <h4>{fav.title}</h4>
                        <p>{fav.desc}</p>
                        <NavLink to={fav.path || "/planets"} className="fav-explore-btn">
                          Explore Object
                        </NavLink>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="pane-card text-center" style={{ textAlign: "center", padding: "50px" }}>
                    <FaBookmark style={{ fontSize: "40px", color: "#8b5cf6", marginBottom: "15px" }} />
                    <h4 style={{ color: "#fff", margin: "0 0 10px" }}>No Favorites Saved Yet</h4>
                    <p style={{ color: "#b5b5c8", margin: "0 0 20px" }}>Browse planets and galaxies to bookmark your favorite celestial objects.</p>
                    <NavLink to="/planets" className="auth-submit-btn" style={{ textDecoration: "none", display: "inline-block", width: "auto", padding: "10px 25px" }}>
                      Explore Planets
                    </NavLink>
                  </div>
                )}
              </div>
            )}

            {/* EDIT PROFILE TAB */}
            {activeTab === "edit" && (
              <div className="tab-pane edit-pane">
                <div className="pane-header">
                  <h3>Update Explorer Profile & Photo</h3>
                  <p>Modify your avatar picture, cosmic identity and preferences displayed across Galaxia.</p>
                </div>

                {saveMessage && (
                  <div className="save-alert">
                    <FaCheckCircle /> {saveMessage}
                  </div>
                )}

                {/* Avatar Section in Edit Tab */}
                <div className="avatar-edit-section">
                  <div className="avatar-edit-preview">
                    {user.avatar ? (
                      <img src={user.avatar} alt="Avatar Preview" className="user-avatar-img" />
                    ) : (
                      <FaUserAstronaut className="default-avatar-icon" />
                    )}
                  </div>
                  <div className="avatar-edit-controls">
                    <h4>Profile Picture</h4>
                    <p>Upload a custom image from your device. Supported formats: JPG, PNG (Max 5MB).</p>
                    <div className="avatar-btn-group">
                      <button
                        type="button"
                        className="btn-upload-photo"
                        onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      >
                        <FaCamera /> Upload Photo
                      </button>
                      {user.avatar && (
                        <button
                          type="button"
                          className="btn-remove-photo"
                          onClick={handleRemoveAvatar}
                        >
                          <FaTrash /> Remove Photo
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <form onSubmit={handleProfileUpdate} className="edit-profile-form">
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        value={editForm.fullName}
                        onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        value={editForm.username}
                        onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Orbit Station / Location</label>
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Favorite Planet or Celestial Object</label>
                    <input
                      type="text"
                      value={editForm.favoriteObject}
                      onChange={(e) => setEditForm({ ...editForm, favoriteObject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Explorer Biography</label>
                    <textarea
                      rows="4"
                      value={editForm.bio}
                      onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-save-profile">
                      Save Explorer Profile
                    </button>
                  </div>

                </form>
              </div>
            )}

            {/* SETTINGS TAB */}
            {activeTab === "settings" && (
              <div className="tab-pane settings-pane">
                <div className="pane-header">
                  <h3>Account Settings & Security</h3>
                  <p>Manage security protocols and system notifications.</p>
                </div>

                <div className="settings-list">
                  
                  <div className="settings-item">
                    <div className="settings-info">
                      <div className="settings-icon"><FaShieldAlt /></div>
                      <div>
                        <h4>Two-Factor Authentication (2FA)</h4>
                        <p>Secure your cosmic login with orbital authenticator codes.</p>
                      </div>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>

                  <div className="settings-item">
                    <div className="settings-info">
                      <div className="settings-icon"><FaBell /></div>
                      <div>
                        <h4>Discovery Alerts & Missions Update</h4>
                        <p>Receive immediate alerts when new astronomical exoplanets are logged.</p>
                      </div>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>

                  <div className="settings-item" style={{ flexDirection: "column", alignItems: "stretch", borderBottom: "1px solid #1e1b4b", paddingBottom: "25px" }}>
                    <div className="settings-info" style={{ marginBottom: "15px" }}>
                      <div className="settings-icon"><FaLock /></div>
                      <div>
                        <h4>Security Credentials</h4>
                        <p>Change your explorer profile access password.</p>
                      </div>
                    </div>
                    {pwdError && <div className="auth-error-msg" style={{ margin: "10px 0" }}>{pwdError}</div>}
                    {pwdSuccess && <div className="save-alert" style={{ margin: "10px 0" }}>{pwdSuccess}</div>}
                    <form onSubmit={handlePasswordChange} className="edit-profile-form" style={{ padding: 0 }}>
                      <div className="form-group" style={{ marginBottom: "15px" }}>
                        <label>Current Password</label>
                        <input
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          required
                          placeholder="••••••••"
                          style={{ width: "100%", padding: "10px", borderRadius: "5px", background: "rgba(255,255,255,0.05)", border: "1px solid #2e1065", color: "#fff" }}
                        />
                      </div>
                      <div className="form-row" style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                        <div className="form-group" style={{ flex: 1 }}>
                          <label>New Password</label>
                          <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            minLength={6}
                            style={{ width: "100%", padding: "10px", borderRadius: "5px", background: "rgba(255,255,255,0.05)", border: "1px solid #2e1065", color: "#fff" }}
                          />
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                          <label>Confirm New Password</label>
                          <input
                            type="password"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            style={{ width: "100%", padding: "10px", borderRadius: "5px", background: "rgba(255,255,255,0.05)", border: "1px solid #2e1065", color: "#fff" }}
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn-save-profile" style={{ width: "auto", margin: 0, padding: "10px 25px" }}>
                        Update Password
                      </button>
                    </form>
                  </div>

                  <div className="settings-item danger-zone">
                    <div className="settings-info">
                      <div className="settings-icon text-danger"><FaSignOutAlt /></div>
                      <div>
                        <h4>Sign Out of Explorer Session</h4>
                        <p>Safely log out from this browser session.</p>
                      </div>
                    </div>
                    <button className="btn-danger-logout" onClick={handleLogout}>
                      Sign Out
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* ADMIN PANEL TAB */}
            {activeTab === "admin" && user.role === "Admin" && (
              <AdminPanel />
            )}

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

function AdminPanel() {
  const { API_BASE_URL, user: currentUser } = useAuth();
  const [usersList, setUsersList] = useState([]);
  const [adminError, setAdminError] = useState("");
  const [adminSuccess, setAdminSuccess] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/users`);
      if (response.ok) {
        const data = await response.json();
        setUsersList(data);
      }
    } catch (err) {
      console.error("Failed to fetch users list", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleToggleRole = async (userId, currentRole) => {
    setAdminError("");
    setAdminSuccess("");
    const newRole = currentRole === "Admin" ? "User" : "Admin";
    try {
      const response = await fetch(`${API_BASE_URL}/admin/users/${userId}/role`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      });
      const data = await response.json();
      if (response.ok) {
        setAdminSuccess(data.message);
        fetchUsers();
        setTimeout(() => setAdminSuccess(""), 4000);
      } else {
        setAdminError(data.message || "Failed to update user role.");
      }
    } catch (err) {
      setAdminError("Network error. Failed to update user role.");
    }
  };

  const handleDeleteUser = async (userId, userEmail) => {
    if (userEmail === currentUser.email) {
      alert("You cannot delete your own session account.");
      return;
    }
    if (!window.confirm("Are you sure you want to delete this cosmic explorer account? This action is irreversible.")) {
      return;
    }
    setAdminError("");
    setAdminSuccess("");
    try {
      const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok) {
        setAdminSuccess(data.message);
        fetchUsers();
        setTimeout(() => setAdminSuccess(""), 4000);
      } else {
        setAdminError(data.message || "Failed to delete user.");
      }
    } catch (err) {
      setAdminError("Network error. Failed to delete user.");
    }
  };

  return (
    <div className="tab-pane admin-pane" style={{ display: "block" }}>
      <div className="pane-header">
        <h3>Cosmic Admin Operations</h3>
        <p>Control center for platform membership, ranks, and system privileges.</p>
      </div>

      {adminError && <div className="auth-error-msg" style={{ margin: "15px 0" }}>{adminError}</div>}
      {adminSuccess && <div className="save-alert" style={{ margin: "15px 0" }}>{adminSuccess}</div>}

      <div className="pane-card progress-card" style={{ marginBottom: "25px" }}>
        <h3>Registered Explorers: {usersList.length}</h3>
      </div>

      <div className="activity-log-card" style={{ overflowX: "auto", background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "10px", border: "1px solid #2e1065" }}>
        <table className="admin-users-table" style={{ width: "100%", borderCollapse: "collapse", color: "#fff", marginTop: "10px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #2e1065", textAlign: "left", height: "45px" }}>
              <th style={{ padding: "10px" }}>Explorer Name</th>
              <th style={{ padding: "10px" }}>Email Address</th>
              <th style={{ padding: "10px" }}>Joined</th>
              <th style={{ padding: "10px" }}>Rank & Level</th>
              <th style={{ padding: "10px" }}>Role</th>
              <th style={{ padding: "10px", textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((usr) => (
              <tr key={usr.id} style={{ borderBottom: "1px solid #1e1b4b", height: "55px" }}>
                <td style={{ padding: "10px" }}>
                  <strong style={{ display: "block" }}>{usr.fullName}</strong>
                  <span style={{ fontSize: "12px", color: "#a5b4fc" }}>{usr.username}</span>
                </td>
                <td style={{ padding: "10px", color: "#b5b5c8" }}>{usr.email}</td>
                <td style={{ padding: "10px", color: "#b5b5c8" }}>{usr.joined}</td>
                <td style={{ padding: "10px" }}>
                  <span style={{ fontSize: "13px", display: "block" }}>{usr.rank}</span>
                  <span style={{ fontSize: "11px", color: "#a855f7" }}>Level {usr.level}</span>
                </td>
                <td style={{ padding: "10px" }}>
                  <span className={`badge-rank ${usr.role === "Admin" ? "admin-badge" : "user-badge"}`} style={{ padding: "4px 8px", borderRadius: "4px", fontSize: "11px", backgroundColor: usr.role === "Admin" ? "#7c3aed" : "#1e1b4b", border: usr.role === "Admin" ? "1px solid #a78bfa" : "1px solid #312e81" }}>
                    {usr.role}
                  </span>
                </td>
                <td style={{ padding: "10px", textAlign: "right" }}>
                  <button
                    onClick={() => handleToggleRole(usr.id, usr.role)}
                    className="btn-header-edit"
                    style={{ padding: "6px 12px", fontSize: "12px", marginRight: "10px", width: "auto", display: "inline-block" }}
                  >
                    Toggle Role
                  </button>
                  <button
                    onClick={() => handleDeleteUser(usr.id, usr.email)}
                    className="btn-danger-logout"
                    style={{ padding: "6px 12px", fontSize: "12px", width: "auto", display: "inline-block", background: "#ef4444" }}
                    disabled={usr.email === currentUser.email}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
