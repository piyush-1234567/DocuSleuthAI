
import { FileSearch, Mail, ArrowUp } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <FileSearch size={27} />
            <span>DocuSleuth <b>AI</b></span>
          </div>

          <p>
            AI-powered document intelligence to investigate,
            verify and uncover suspicious document patterns.
          </p>

          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:contact@docusleuth.ai">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Platform</h3>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <a href="#about">Documentation</a>
          <a href="#about">Privacy Policy</a>
          <a href="#about">Terms of Service</a>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>Have questions or feedback?</p>
          <a href="mailto:contact@docusleuth.ai">
            contact@docusleuth.ai
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DocuSleuth AI. All rights reserved.</p>
        <a href="#home" className="back-top">
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
