
import React, { useState } from "react";
import {
  FileSearch, Mail, LockKeyhole, Eye, EyeOff,
  ArrowRight, Zap, ShieldCheck, Layers
} from "lucide-react";
import "./login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="login-page">
      <section className="left-section">
        <div className="brand">
          <FileSearch size={45} />
          <h1>DocuSleuth <span>AI</span></h1>
        </div>

        <div className="hero-content">
          <h2>Turn Documents into<br /><span>Actionable Insights.</span></h2>
          <p>AI-powered document intelligence to analyze, extract, and detect key information, inconsistencies, and potential risks.</p>
        </div>

        <div className="illustration">
          <div className="document-card">
            <FileSearch size={150} />
            <div className="ai-badge">AI</div>
          </div>
        </div>

        <div className="features">
          <div><Zap /> Faster Analysis</div>
          <div><ShieldCheck /> Higher Accuracy</div>
          <div><Layers /> Multiple Formats</div>
        </div>
      </section>

      <section className="right-section">
        <div className="login-card">
          <div className="login-heading">
            <h2>Welcome Back</h2>
            <p>Log in to your DocuSleuth AI account.</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="input-box">
              <Mail />
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="input-box">
              <LockKeyhole />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="login-button">
              Log In <ArrowRight />
            </button>
          </form>

          <div className="divider">
            <span></span> Or continue with <span></span>
          </div>

          <button className="google-button" type="button">
            <b>G</b> Continue with Google
          </button>

          <div className="signup-text">
            Don't have an account?
            <a href="/signup">Sign Up</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
