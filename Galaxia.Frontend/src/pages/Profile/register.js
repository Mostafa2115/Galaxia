import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../context/AuthContext";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserPlus, FaGoogle, FaGithub } from "react-icons/fa";
import "./register.css";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!agreeTerms) {
      setError("You must agree to the Terms of Exploration.");
      return;
    }

    setError("");
    try {
      await register(fullName, email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Failed to create account.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="auth-page">
        <div className="auth-container">
          <div className="auth-card">
            
            <div className="auth-header">
              <div className="auth-icon-badge">
                <FaUserPlus />
              </div>
              <h2>Join the Cosmos</h2>
              <p>Create your explorer profile and unlock deep space archives</p>
            </div>

            {error && <div className="auth-error-msg">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Alex Stellar"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    id="email"
                    type="email"
                    placeholder="explorer@galaxia.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <FaLock className="input-icon" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-wrapper">
                  <FaLock className="input-icon" />
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-options">
                <label className="remember-checkbox">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  <span>
                    I agree to the <a href="#terms" onClick={(e) => e.preventDefault()} className="forgot-link">Terms & Privacy Policy</a>
                  </span>
                </label>
              </div>

              <button type="submit" className="auth-submit-btn">
                Create Explorer Account
              </button>

              <div className="auth-divider">
                <span>OR REGISTER WITH</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-btn google-btn">
                  <FaGoogle /> Google
                </button>
                <button type="button" className="social-btn github-btn">
                  <FaGithub /> GitHub
                </button>
              </div>
            </form>

            <div className="auth-footer">
              <p>
                Already have an explorer account?{" "}
                <NavLink to="/signin">Sign In</NavLink>
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Register;
