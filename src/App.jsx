import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import "./App.css";

// 3D Female Character Component
function FemaleCharacter() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -1, 0]}>
        {/* Head */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial
            color="#ffdbac"
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>

        {/* Hair */}
        <mesh position={[0, 1.7, -0.1]}>
          <sphereGeometry
            args={[0.38, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]}
          />
          <meshStandardMaterial color="#2c1810" roughness={0.8} />
        </mesh>

        {/* Ponytail */}
        <mesh position={[0, 1.3, -0.35]} rotation={[0.3, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.04, 0.6, 16]} />
          <meshStandardMaterial color="#2c1810" roughness={0.8} />
        </mesh>

        {/* Body (shirt) */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 0.9, 32]} />
          <meshStandardMaterial color="#4a90e2" roughness={0.6} />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.4, 0.5, 0]} rotation={[0, 0, 0.3]}>
          <cylinderGeometry args={[0.08, 0.07, 0.7, 16]} />
          <meshStandardMaterial color="#ffdbac" roughness={0.5} />
        </mesh>
        <mesh position={[0.4, 0.5, 0]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.08, 0.07, 0.7, 16]} />
          <meshStandardMaterial color="#ffdbac" roughness={0.5} />
        </mesh>

        {/* Laptop */}
        <mesh position={[0, 0.2, 0.4]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.5, 0.35, 0.03]} />
          <meshStandardMaterial
            color="#1a1a2e"
            emissive="#4a90e2"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Floor platform */}
        <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
          <meshStandardMaterial color="#e8dcc8" roughness={0.8} />
        </mesh>

        {/* Holographic ring */}
        <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#4a90e2"
            emissive="#4a90e2"
            emissiveIntensity={1}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Projects Card 3D Scene
function ProjectsScene() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Project cards floating */}
        <mesh position={[-1.5, 0, 0]}>
          <boxGeometry args={[1, 1.4, 0.05]} />
          <meshStandardMaterial color="#3b5998" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1.4, 0.05]} />
          <meshStandardMaterial color="#f59e0b" />
        </mesh>
        <mesh position={[1.5, 0, 0]}>
          <boxGeometry args={[1, 1.4, 0.05]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
      </group>
    </Float>
  );
}

// About Scene
function AboutScene() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef}>
        {/* Central sphere */}
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#4a90e2" wireframe />
        </mesh>

        {/* Orbiting elements */}
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i / 5) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * 1.8,
                Math.sin(angle * 2) * 0.5,
                Math.sin(angle) * 1.8,
              ]}
            >
              <boxGeometry args={[0.2, 0.2, 0.2]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#f59e0b" : "#8b5cf6"}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

// Contact Scene
function ContactScene() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Character with boxes (delivery theme) */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.25, 0.3, 0.7, 32]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Boxes */}
      {[-0.8, 0, 0.8].map((x, i) => (
        <mesh key={i} position={[x, -0.8, 0.5]} rotation={[0, i * 0.2, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
      ))}
    </group>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      name: "Dynamic Photo Gallery",
      description:
        "Neumorphic design image gallery with auto slideshow, click-to-enlarge feature, and drag-and-drop photo upload functionality. Features smooth transitions and modern UI.",
      tech: ["HTML5", "CSS3", "JavaScript", "Neumorphic Design"],
      icon: "📸",
      liveLink: "https://sathvika139.github.io/Cognifyz_Internship/L3-T1/",
      githubLink:
        "https://github.com/sathvika139/Cognifyz_Internship/tree/main/L3-T1",
    },
    {
      name: "Cognifyz Web Pages Collection",
      description:
        "Collection of 6 interactive and attractive web pages developed during Cognifyz Technologies internship. Includes various UI/UX implementations and responsive designs.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      icon: "🌐",
      liveLink: "https://sathvika139.github.io/Cognifyz_Internship/",
      githubLink: "https://github.com/sathvika139/Cognifyz_Internship",
    },
    {
      name: "Saiket Systems Web Portfolio",
      description:
        "Professional web development projects including Blog, E-Commerce, Form Validation, Navigation Bar, Portfolio Page, and To-Do App. Demonstrates versatile frontend skills.",
      tech: ["React", "JavaScript", "CSS3", "HTML5"],
      icon: "💼",
      liveLink: "https://sathvika139.github.io/Saiket_Systems_Internship/",
      githubLink: "https://github.com/sathvika139/Saiket_Systems_Internship",
    },
    {
      name: "3D Interactive Portfolio",
      description:
        "Modern portfolio website with stunning 3D animations, interactive elements, and smooth user experience. Showcases skills and projects with creative visual design.",
      tech: ["React", "Three.js", "CSS3", "JavaScript"],
      icon: "🎨",
      liveLink: "https://sathvika139-portfolio.netlify.app/",
      githubLink: "https://github.com/sathvika139/Portfolio",
    },
    {
      name: "Music Player - Synthesia",
      description:
        "Full-stack MERN music streaming application with playlist management, real-time playback controls, and beautiful dark-themed UI inspired by Spotify. Currently in development.",
      tech: ["MongoDB", "Express", "React", "Node.js", "REST API"],
      icon: "🎵",
      liveLink: "#",
      githubLink: "#",
      status: "In Progress",
    },
  ];

  const experiences = [
    {
      title: "MERN Stack Development Intern",
      company: "WebStack Academy (Emertxe)",
      date: "Nov 2025 - Present",
      points: [
        "Building full stack applications using MongoDB, Express.js, React.js, and Node.js",
        "Developing RESTful APIs with secure authentication",
        "Implementing role-based access control",
      ],
    },
    {
      title: "Web Development Intern",
      company: "Cognifyz Technologies",
      date: "Dec 2025 - Jan 2026",
      points: [
        "Developed 4+ responsive web applications",
        "Improved UI responsiveness by ~30%",
        "Conducted cross-browser compatibility testing",
      ],
    },
    {
      title: "Web Development Intern",
      company: "SaiKet Systems",
      date: "Nov 2025 - Dec 2025",
      points: [
        "Designed responsive user interfaces using React.js",
        "Built reusable components with efficient state management",
      ],
    },
    {
      title: "Virtual Intern",
      company: "ServiceNow University",
      date: "Oct 2025 - Nov 2025",
      points: [
        "Completed training in Agentic AI and workflow automation",
        "Developed automated workflows using Flow Designer",
      ],
    },
  ];

  const skills = {
    Programming: ["Python", "Java", "JavaScript", "SQL", "HTML5", "CSS3"],
    Frontend: ["React.js", "Responsive Design", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "REST APIs"],
    Database: ["MongoDB", "MySQL"],
    "Data & AI": ["Pandas", "TensorFlow", "Machine Learning", "Power BI"],
    Tools: ["Git", "GitHub", "VS Code", "ServiceNow"],
  };

  const certifications = [
    "Data Analysis in Python Using Pandas",
    "ServiceNow Virtual Internship",
    "Power BI Workshop",
    "AI Tools Workshop",
    "Microsoft AI Skills Fest",
    "Google Cloud Agentic AI Day",
    "Salesforce AgentForce Workshop",
    "Ethical Hacking Workshop",
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Anurag University",
      location: "Hyderabad, Telangana, India",
      duration: "August 2023 – April 2027",
      icon: "🎓",
    },
    {
      degree: "Intermediate in Physical Sciences",
      institution: "Alphores Junior College",
      location: "Karimnagar, Telangana, India",
      duration: "July 2021 – March 2023",
      icon: "📚",
    },
    {
      degree: "Secondary School Certificate in Physical Sciences",
      institution: "Mary Mediatrix High School",
      location: "Manthani, Peddapalli, Telangana, India",
      duration: "June 2020 – April 2021",
      icon: "🏫",
    },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Sathvika</div>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeSection === "experience" ? "active" : ""}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={activeSection === "education" ? "active" : ""}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi, my name is Sathvika</h1>
              <p className="tagline">Full Stack Developer & AI Enthusiast</p>
              <p className="description">
                Computer Science student passionate about building scalable web
                applications and AI-driven solutions. Specializing in MERN
                stack, data analytics, and cloud technologies.
              </p>
              <div className="hero-buttons">
                <a
                  href="/SathvikaRaapelli.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Resume
                </a>

                <a href="#contact" className="btn btn-secondary">
                  Contact Me
                </a>
              </div>

              <div className="social-icons">
                <a
                  href="https://github.com/sathvika139"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/sathvikaraapelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hero-3d">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight
                  position={[-10, -10, -5]}
                  intensity={0.5}
                  color="#4a90e2"
                />
                <Suspense fallback={null}>
                  <FemaleCharacter />
                  <Environment preset="studio" />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-3d">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <AboutScene />
                  <Environment preset="studio" />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
            <div className="about-text">
              <p>
                I'm a B.Tech Computer Science Engineering student at Anurag
                University, specializing in Full Stack Development, Data
                Analytics, and Artificial Intelligence.
              </p>
              <p>
                With hands-on experience from multiple internships, I've built
                scalable web applications, AI-driven platforms, and enterprise
                workflows. I'm proficient in the MERN stack, Python, and modern
                development tools.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>4+</h3>
                  <p>Internships</p>
                </div>
                <div className="stat">
                  <h3>3+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat">
                  <h3>8+</h3>
                  <p>Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-card">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-header">
            <div className="projects-3d">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <ProjectsScene />
                  <Environment preset="studio" />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.name} className="project-card">
                <div className="project-icon">{project.icon}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.status === "In Progress"
                      ? "Coming Soon"
                      : "View Application"}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.status === "In Progress"
                      ? "In Progress"
                      : "View Code"}
                  </a>
                </div>
                {project.status && (
                  <div className="project-status">
                    <span className="status-badge">{project.status}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{exp.date}</span>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <ul>
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert} className="cert-card">
                <span className="cert-icon">🏆</span>
                <p>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="edu-icon">{edu.icon}</div>
                <div className="edu-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="edu-location">{edu.location}</p>
                  <p className="edu-duration">{edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Your message..." rows="5"></textarea>
              </div>
              <button className="btn btn-primary">Send Message</button>
            </div>
            <div className="contact-3d">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <ContactScene />
                  <Environment preset="studio" />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:sathvikaraapelli09@gmail.com">
                sathvikaraapelli09@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <span>+91 7569525001</span>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Sathvika Raapelli. Built with React & Three.js</p>
      </footer>
    </div>
  );
}

export default App;
