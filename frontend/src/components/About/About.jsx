
import { ShieldCheck, Brain, FileSearch, Eye } from "lucide-react";
import "./About.css";

const benefits = [
  { icon: Brain, title: "AI-Powered Analysis", text: "Analyze documents using intelligent AI models." },
  { icon: Eye, title: "Visual Forensics", text: "Identify suspicious edits and visual inconsistencies." },
  { icon: FileSearch, title: "Evidence-Based Reports", text: "Get clear findings with supporting evidence." },
  { icon: ShieldCheck, title: "Reliable Verification", text: "Verify information across multiple documents." },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <span className="about-tag">ABOUT DOCUSLEUTH AI</span>
        <h2>Building Trust Through <span>Document Intelligence</span></h2>
        <p>
          DocuSleuth AI helps organizations investigate suspicious
          documents by combining OCR, visual forensics and contextual
          AI to uncover inconsistencies and provide explainable evidence.
        </p>
      </div>

      <div className="about-grid">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="about-card" key={index}>
              <Icon size={26} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
