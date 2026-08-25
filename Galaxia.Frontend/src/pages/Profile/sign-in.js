import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../context/AuthContext";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaRocket, FaGoogle, FaGithub } from "react-icons/fa";
import "./sign-in.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Invalid credentials.");
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
                <FaRocket />
              </div>
              <h2>Welcome Back, Explorer</h2>
              <p>Sign in to continue your journey across the cosmos</p>
            </div>

            {error && <div className="auth-error-msg">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
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
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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

              <div className="form-options">
                <label className="remember-checkbox">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your email."); }} className="forgot-link">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="auth-submit-btn">
                Sign In
              </button>

              <div className="auth-divider">
                <span>OR SIGN IN WITH</span>
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
                Don't have an explorer account?{" "}
                <NavLink to="/register">Create Account</NavLink>
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SignIn;
