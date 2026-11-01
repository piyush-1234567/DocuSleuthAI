
import {
  FileText,
  Image,
  BrainCircuit,
  Layers3,
  Upload,
  ScanText,
  Search,
  FileCheck,
  ArrowRight
} from "lucide-react";

import "./Features.css";

const features = [
  {
    icon: FileText,
    title: "OCR & Data Extraction",
    description:
      "Accurately extract text, tables and key information from multiple document types.",
    color: "blue"
  },
  {
    icon: Image,
    title: "Visual Forensics",
    description:
      "Detect image manipulation, editing traces and visual inconsistencies.",
    color: "purple"
  },
  {
    icon: BrainCircuit,
    title: "Contextual Intelligence",
    description:
      "Understand document context, entities and relationships using LLMs.",
    color: "teal"
  },
  {
    icon: Layers3,
    title: "Cross-Document Verification",
    description:
      "Identify inconsistencies across multiple documents (name, dates, salary, address, etc.).",
    color: "orange"
  }
];

const steps = [
  {
    icon: Upload,
    title: "1. Upload Documents",
    description:
      "Add one or more documents (PDF, PNG, JPG) for analysis."
  },
  {
    icon: ScanText,
    title: "2. Extract & Understand",
    description:
      "Extract text and key information using OCR and AI."
  },
  {
    icon: Search,
    title: "3. Investigate & Verify",
    description:
      "Run visual forensics and cross-document checks to detect anomalies."
  },
  {
    icon: FileCheck,
    title: "4. Get Evidence Report",
    description:
      "Receive a detailed, explainable report with highlighted evidence and fraud indicators."
  }
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">

        {/* Core Features */}
        <div className="features-heading">
          <h2>
            Core <span>Features</span>
          </h2>
          <p>
            A complete AI toolkit to investigate, verify and explain documents.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                className={`feature-card ${feature.color}`}
                key={feature.title}
              >
                <div className="feature-icon">
                  <Icon size={43} strokeWidth={2.2} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="how-heading" id="how-it-works">
          <h2>
            How It <span>Works</span>
          </h2>
          <p>
            From document upload to an explainable investigation report in four simple steps.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="step-wrapper" key={step.title}>
                <div className="step-card">
                  <Icon size={38} strokeWidth={2.2} />

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                {index !== 3 && (
                  <ArrowRight className="step-arrow" size={23} />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;
