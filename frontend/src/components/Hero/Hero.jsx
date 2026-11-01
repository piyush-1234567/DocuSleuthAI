
import { ArrowRight, ShieldCheck, FileSearch, CheckCircle2 } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheck size={17} />
            AI-Powered Document Intelligence
          </div>

          <h1>
            Uncover the Truth Behind Every{" "}
            <span>Document.</span>
          </h1>

          <p className="hero-description">
            Detect suspicious patterns, uncover document inconsistencies,
            and investigate potential fraud with explainable AI-powered
            document intelligence.
          </p>

          <div className="hero-buttons">
            <button className="hero-primary-btn">
              Analyze Documents <ArrowRight size={19} />
            </button>

            <a href="#features" className="hero-secondary-btn">
              Explore Features
            </a>
          </div>

          <div className="hero-trust">
            <ShieldCheck size={17} />
            <span>Intelligent Analysis</span>
            <span className="trust-dot">•</span>
            <span>Explainable Evidence</span>
          </div>
        </div>

        {/* Right Dashboard Preview */}
        <div className="hero-visual">
          <div className="dashboard-card">

            <div className="dashboard-header">
              <div>
                <h3>Document Analysis</h3>
                <p>Investigation Overview</p>
              </div>
              <span className="analysis-tag">AI Analysis</span>
            </div>

            <div className="document-preview">
              <div className="document-icon">
                <FileSearch size={30} />
              </div>
              <div className="document-info">
                <h4>Sample_Document.pdf</h4>
                <p>PDF Document · Sample Preview</p>
              </div>
            </div>

            <div className="analysis-section">
              <h4>Analysis Checks</h4>

              {[
                "Text consistency",
                "Visual integrity",
                "Metadata inspection",
                "Content verification"
              ].map((item) => (
                <div className="analysis-row" key={item}>
                  <span>{item}</span>
                  <span className="check-status">
                    <CheckCircle2 size={16} />
                    Checked
                  </span>
                </div>
              ))}
            </div>

            <div className="dashboard-footer">
              <ShieldCheck size={18} />
              <span>AI-assisted document investigation</span>
            </div>

          </div>

          <div className="floating-label">
            <ShieldCheck size={19} />
            <div>
              <strong>Evidence-based</strong>
              <span>Explainable insights</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
