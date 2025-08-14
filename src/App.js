import React from "react";
import "./App.css";

function App() {
  const profile = {
    name: "Nitesh Jha",
    title: "AI & Data Science Enthusiast",
    location: "New Delhi, India",
    personalEmail: "niteshjha0629@gmail.com",
    universityEmail: "Nitesh.jha22@st.niituniversity.in",
    PhoneNumber: "9643099752",
    github: "https://github.com/nitewsh",
    linkedin: "https://www.linkedin.com/in/nitesh-jha-847661258/",
    resumePath: "/Resume.pdf", // Put Resume.pdf in public folder
    about:
      "I’m an AI & Data Science-focused computer science student building practical ML solutions (medical imaging, NLP, anomaly detection) and production-friendly web demos. I combine model engineering, data pipelines and web deployment to ship reproducible projects.",
  };

  const projects = [
    {
      title: "Pneumonia Detection (Chest X-Ray)",
      bullets: [
        "Built a convolutional neural network using TensorFlow/Keras with data augmentation and dropout to reduce overfitting.",
        "Preprocessing pipeline: contrast normalization, resizing, and automated dataset split; used stratified k-fold to validate.",
        "Evaluation: confusion matrix, precision/recall per-class; exported model and wrote a small inference script for single-image predictions.",
      ],
      tech: "TensorFlow · Keras · OpenCV",
    },
    {
      title: "Brain Tumor Classification (MRI)",
      bullets: [
        "Developed a multi-class CNN to distinguish four tumor types using ImageDataGenerator for on-the-fly augmentation.",
        "Experimented with transfer learning (EfficientNet backbones) and compared results vs. from-scratch CNNs.",
        "Produced per-class recall/precision, and saved the best checkpoints + inference script for demoing predictions.",
      ],
      tech: "TensorFlow · Keras · Transfer Learning",
    },
    {
      title: "Fake News Classifier",
      bullets: [
        "Text pipeline using tokenization, cleaning, and TF-IDF vectorization to transform raw articles to features.",
        "Trained and compared Logistic Regression and Random Forest; used ROC/AUC and precision-recall curves to choose final model.",
        "Added a simple demo script that accepts custom text input and outputs a probability score + explanation of top tokens.",
      ],
      tech: "scikit-learn · TF-IDF · NLP",
    },
    {
      title: "Amazon Fine Food Reviews — Sentiment Analysis",
      bullets: [
        "Feature-engineered text (n-grams, char features, ratio features) and trained TF-IDF + Logistic Regression achieving ~93.4% accuracy.",
        "Used cross-validation and grid search to tune hyperparameters; built a small web demo for custom text prediction.",
        "Analyzed failure cases and implemented a basic ensemble and thresholding to improve recall on minority classes.",
      ],
      tech: "scikit-learn · TF-IDF · Feature Engineering",
    },
    {
      title: "Email Spam Classification",
      bullets: [
        "Extracted header, URL and content features (URL counts, suspicious tokens, sender heuristics, body-length features).",
        "Trained Logistic Regression and Random Forest, optimized thresholds to reduce false negatives (higher recall) while controlling false positives.",
        "Packaged a local test script to score single emails and output explanation tokens for auditing decisions.",
      ],
      tech: "Feature Engineering · scikit-learn",
    },
    {
      title: "ADFA-LD / ADFA-WD-SAA — System-call Anomaly Detection",
      bullets: [
        "Worked on host-based intrusion detection using DLL/system-call traces from ADFA datasets (Full, Limited, Raw).",
        "Implemented Isolation Forest and autoencoder-based approaches, handled nested folder traversal and recursive extraction.",
        "Addressed class imbalance with synthetic oversampling experiments, measured performance with precision, recall, F1 and reconstruction error (MSE/R² analyses).",
      ],
      tech: "Isolation Forest · Autoencoder · Data Engineering",
    },
    {
      title: "Exam-Solver Chatbot (Prototype)",
      bullets: [
        "Built a prototype chatbot that parses exam-style questions and returns stepwise answers using rule-based parsing + retrieval heuristics.",
        "Designed a lightweight pipeline to tokenize, extract question type, and fetch answer templates or computed responses.",
        "Implemented a demo backend (Python) and provided integration notes for hooking an LLM or retrieval-augmented component later.",
      ],
      tech: "Python · NLP · Prototype Backend",
    },
  ];

  const practicals = [
    {
      title: "MERN Stack CRUD App",
      bullets: [
        "Implemented end-to-end CRUD with MongoDB, Express, React and Node; user auth and role-based routes.",
        "Modelled one-to-many and many-to-many relationships and demonstrated via sample UI pages and API endpoints.",
      ],
    },
    {
      title: "Docker & Nginx (Containerization)",
      bullets: [
        "Dockerized a static site served by Nginx and created production-ready Dockerfile with small image size and caching.",
        "Tested container locally and documented steps to push images to a registry for deployment.",
      ],
    },
    {
      title: "Multi-container Docker (MongoDB & Mongo Express)",
      bullets: [
        "Wrote docker-compose to orchestrate app service, MongoDB and Mongo Express with persist volumes.",
        "Verified service health checks, persistent storage and local environment reproducibility.",
      ],
    },
    {
      title: "Jenkins CI/CD Setup (Practical)",
      bullets: [
        "Configured Jenkins pipelines for build/test/deploy flows and integrated with Git & Docker registries for automated delivery.",
      ],
    },
  ];

  const skills = {
    Programming: ["Python", "JavaScript (ES6+)"],
    "AI & ML": [
      "TensorFlow / Keras",
      "scikit-learn",
      "pandas / NumPy",
      "model evaluation & hyperparameter tuning",
      "NLP basics (TF-IDF, tokenization)",
      "Computer Vision (OpenCV)",
    ],
    "Web & Backend": ["React", "Node.js", "Express.js", "Flask", "REST APIs"],
    Tools: ["Git", "Docker", "Jenkins", "VS Code", "Jupyter / Colab"],
    Cloud: ["Google Cloud Platform (Vertex AI, Data Pipelines)", "GCP basics"],
    Databases: ["MongoDB", "MySQL"],
    "Cyber Awareness": [
      "ADFA dataset anomaly detection (project experience)",
      "Familiarity with common web attacks (SQLi, brute-force, phishing patterns) — basic pentest knowledge",
    ],
  };

  const certifications = [
    "Vertex AI's Prompt Design – Google Cloud, Aug 2025",
    "Developing Google Cloud Batch Data Pipelines – Google Cloud, Jul 2025",
    "Using AI Principles in a Responsible Way – Google Cloud, May 2025",
    "Overview of Conscientious AI – Google Cloud, May 2025",
    "Overview of Google Cloud's Generative AI – May 2025",
    "Overview of Big Language Models – Google Cloud, May 2025",
    "Learn Front-End Web Development from Scratch – Udemy, Dec 2023",
    "Mastering Backend Web Development with Node.js, SQL, and PostgreSQL – Udemy, Jun 2024",
  ];

  return (
    <div className="wrap">
      {/* HERO */}
      <header className="hero">
        <div className="hero-left">
          {/* simple SVG avatar to avoid missing-file errors */}
          <svg className="avatar" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Avatar">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#0b6efd" />
                <stop offset="1" stopColor="#0066d6" />
              </linearGradient>
            </defs>
            <rect rx="16" width="100" height="100" fill="url(#g)"></rect>
            <g transform="translate(50,50)">
              <circle cx="0" cy="-12" r="16" fill="#fff" />

            </g>
          </svg>
        </div>

        <div className="hero-right">
          <h1>{profile.name}</h1>
          <p className="role">{profile.title}</p>
          <p className="muted">{profile.location}</p>

          <div className="cta">
            <a className="btn" href={profile.resumePath} download>
              Download Resume
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.personalEmail}`}>
              Email Me
            </a>
            <a className="link" href={`mailto:${profile.universityEmail}`}>
              University: {profile.universityEmail}
            </a>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        {/* About */}
        <section className="card about">
          <h2>About</h2>
          <p>{profile.about}</p>
          <p>
            <strong>Goal:</strong> Build practical, production-ready AI solutions (medical imaging, NLP,
            anomaly detection) and publish reproducible demos integrated with web frontends.
          </p>
        </section>

        {/* Projects: AI / Data Science focus */}
        <section className="card">
          <h2>Major AI & Data Science Projects</h2>
          <div className="grid">
            {projects.map((p, idx) => (
              <article className="project" key={idx}>
                <h3>{p.title}</h3>
                <p className="tech">{p.tech}</p>
                <ul>
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Practicals / DevOps */}
        <section className="card">
          <h2>Practicals & DevOps (Applied)</h2>
          <div className="grid">
            {practicals.map((p, idx) => (
              <div className="project" key={idx}>
                <h3>{p.title}</h3>
                <ul>
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="card">
          <h2>Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([k, arr]) => (
              <div key={k} className="skill-block">
                <h4>{k}</h4>
                <ul>
                  {arr.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="card">
          <h2>Certifications</h2>
          <ul>
            {certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="card contact-card">
          <h2>Contact</h2>
          <p>
            <strong>Personal:</strong>{" "}
            <a href={`mailto:${profile.personalEmail}`}>{profile.personalEmail}</a>
          </p>
          <p>
            <strong>University:</strong>{" "}
            <a href={`mailto:${profile.universityEmail}`}>{profile.universityEmail}</a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.github}
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedin}
            </a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {profile.name} · Built with React</p>
      </footer>
    </div>
  );
}

export default App;