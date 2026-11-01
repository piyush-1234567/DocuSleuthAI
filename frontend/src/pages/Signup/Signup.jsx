
import { useState } from "react";
import { Link } from "react-router-dom";
import { FileSearch, ArrowRight } from "lucide-react";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="signup-page">
      <div className="signup-left">
        <Link to="/" className="signup-logo">
          <FileSearch size={38} />
          <span>DocuSleuth <b>AI</b></span>
        </Link>

        <div className="signup-intro">
          <h1>Turn Documents into <span>Actionable Insights.</span></h1>
          <p>
            AI-powered document intelligence to analyze, extract,
            and detect key information, inconsistencies, and potential risks.
          </p>
        </div>

        <div className="signup-illustration">
          <div className="document-visual">
            <FileSearch size={100} />
            <span className="ai-badge">AI</span>
          </div>
          <div className="visual-checks">
            <p>✓ &nbsp; Extract Data</p>
            <p>✓ &nbsp; Detect Issues</p>
            <p>✓ &nbsp; Generate Insights</p>
          </div>
        </div>

        <div className="signup-benefits">
          <span>⚡ Faster Analysis</span>
          <span>🛡 Higher Accuracy</span>
          <span>▱ Multiple Formats</span>
        </div>
      </div>

      <div className="signup-right">
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <h2>Create Your Account</h2>
          <p className="form-subtitle">Get started with DocuSleuth AI in seconds.</p>

          <div className="signup-fields">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                minLength={8}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="password-field">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                required
              />
              <button type="button" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="create-account-btn">
            Create Account <ArrowRight size={20} />
          </button>

          <div className="signup-divider">
            <span>Or continue with</span>
          </div>

          <button type="button" className="google-btn">
            <b>G</b> Continue with Google
          </button>

          <p className="login-prompt">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
