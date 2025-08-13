import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Github, Calendar, Award, Code, GraduationCap } from 'lucide-react';
import arduino from "./assets/images/projects/Arduino.jpg"
import chatScreenGPT from "./assets/images/projects/ChatScreenGPT.jpg"
import lidar from "./assets/images/projects/LidarMapping.jpg"
import PoliSupp from "./assets/images/projects/PoliSupp.jpg"
import RecordGPT from "./assets/images/projects/RecordGPT.jpg"
import SummaryGPT from "./assets/images/projects/SummaryGPT.jpg"
import logo from "./assets/images/LOGO.svg"

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const technologies = [
    'React.js', 'Express.js', 'TypeScript', 'CSS', 'HTML5', 'Java', 'Python',
    'Flutter', 'C++', 'TensorFlow', 'Keras', 'MySQL', 'Firebase', 'GCP', 'Git'
  ];

  const projects = [
    {
      title: "NotesGPT",
      period: "January 2023 – May 2023",
      location: "CBU | Riverside, CA",
      description: "Led a six-person team to build an AI-powered mobile app that reimagines note-taking workflows",
      highlights: [
        "Developed real-time lecture transcription and OCR scanning for digitizing physical content",
        "Integrated a context-aware AI chatbot to allow users to query saved notes",
        "Built using Flutter for cross-platform support and Firebase for real-time backend infrastructure",
        "Bridged technical implementation with product goals, translating requirements into scalable solutions"
      ],
      tech: ["Flutter", "Firebase", "AI/ML", "OCR", "Real-time Processing"],
      image_urls: [RecordGPT, SummaryGPT, chatScreenGPT]
    },
    {
      title: "Mouse Droid",
      period: "September 2023 – April 2024",
      location: "CBU | Riverside, CA",
      description: "Contributed to the development of an autonomous robot, applying skills across software, hardware, and algorithm design",
      highlights: [
        "Configured ROS2 and Gazebo for simulation, programmed Arduino microcontrollers for real-time control",
        "Built SLAM (Simultaneous Localization and Mapping) using onboard LIDAR and A* for autonomous navigation",
        "Participated in sensor calibration, mechanical design discussions, and field testing to optimize performance"
      ],
      tech: ["ROS2", "Arduino", "LIDAR", "SLAM", "A* Algorithm", "Gazebo"],
      image_urls: [lidar, arduino]
    },
    {
      title: "Politician Supporters",
      period: "May 2023 - July 2023",
      location: "Tokyo, Japan",
      description: "Contributed to the development of an autonomous robot, applying skills across software, hardware, and algorithm design",
      highlights: [
        "Configured ROS2 and Gazebo for simulation, programmed Arduino microcontrollers for real-time control",
        "Built SLAM (Simultaneous Localization and Mapping) using onboard LIDAR and A* for autonomous navigation",
        "Participated in sensor calibration, mechanical design discussions, and field testing to optimize performance"
      ],
      tech: ["ROS2", "Arduino", "LIDAR", "SLAM", "A* Algorithm", "Gazebo"],
      image_urls: [PoliSupp]
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-inner">
            <div>
              <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="nav-links">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Nathan Sanchez
            </h1>
            <div className="hero-subtitle">
              Software Engineer & Full-Stack Developer
            </div>
            <p className="hero-description">
              Passionate about developing innovative solutions and expanding expertise in modern technologies.
              Experienced in full-stack web development, robotics, and machine learning.
            </p>
          </div>

          <div className="hero-buttons">
            <a href="mailto:nrsanchez2450@gmail.com" className="btn btn-primary">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="https://linkedin.com/in/nathan-sanchez22/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <button onClick={() => scrollToSection('about')} className="scroll-indicator">
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <div className="grid grid-cols-2">
            <div>
              <div className="about-text">
                <p>
                  I'm a motivated software engineer with a B.S. in Software Engineering from California Baptist University.
                  My passion lies in developing innovative solutions and continuously expanding my expertise in modern technologies.
                </p>
                <p>
                  Recently completed Stanford's Machine Learning course on Coursera, adding supervised learning,
                  advanced algorithms, and reinforcement learning to my toolkit. I thrive in collaborative environments
                  and enjoy tackling complex challenges that make a meaningful impact.
                </p>
              </div>
            </div>

            <div>
              <h3 className="skills-title">Technologies & Skills</h3>
              <div className="skills-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="skill-tag">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experience</h2>

          <div className="experience-list">
            {/* Software Engineering Intern */}
            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">Software Engineering Intern</h3>
                  <div className="experience-company">OneTerrace | Tokyo, Japan</div>
                </div>
                <div className="experience-date">
                  <Calendar size={16} />
                  <span>May 2023 – July 2023</span>
                </div>
              </div>

              <ul className="experience-list-items">
                <li>
                  <div className="bullet-point"></div>
                  <span>Took ownership of a full-stack web application to manage client supporters, contributing across frontend and backend</span>
                </li>
                <li>
                  <div className="bullet-point"></div>
                  <span>Designed an intuitive React.js interface and implemented REST APIs with Express.js</span>
                </li>
                <li>
                  <div className="bullet-point"></div>
                  <span>Integrated MySQL database using Prisma ORM to streamline schema management</span>
                </li>
                <li>
                  <div className="bullet-point"></div>
                  <span>Deployed the application to an Ubuntu server using pm2, troubleshooting deployment independently</span>
                </li>
              </ul>
            </div>

            {/* Academy Tutor */}
            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">Academy Tutor</h3>
                  <div className="experience-company">Ruby Drive Elementary | Placentia, CA</div>
                </div>
                <div className="experience-date">
                  <Calendar size={16} />
                  <span>October 2024 – Present</span>
                </div>
              </div>

              <ul className="experience-list-items">
                <li>
                  <div className="bullet-point"></div>
                  <span>Managed a class of 26 fourth-grade students, offering individualized academic support</span>
                </li>
                <li>
                  <div className="bullet-point"></div>
                  <span>Collaborated with educators and administrators to reinforce classroom learning goals</span>
                </li>
                <li>
                  <div className="bullet-point"></div>
                  <span>Developed strong communication and leadership skills through daily engagement with students and staff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${projects.length % 2 !== 0 && index === projects.length - 1 ? 'full-width' : ''}`}>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-location">{project.location}</div>
                  <div className="project-period">{project.period}</div>
                </div>

                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <div className="small-bullet"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="tech-tags">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Education</h2>

          <div className="grid grid-cols-2">
            <div className="education-card">
              <div className="education-header">
                <GraduationCap className="contact-icon" size={32} />
                <div>
                  <h3 className="education-title">B.S. in Software Engineering</h3>
                  <div className="education-school">California Baptist University</div>
                </div>
              </div>
              <div className="education-details">
                <div>2020 – 2024</div>
                <div>GPA: 3.3</div>
              </div>
              <div className="award-section">
                <Award size={20} />
                <span className="award-text">Eagle Scout (February 2020)</span>
              </div>
            </div>

            <div className="education-card">
              <div className="education-header">
                <Code className="contact-icon" size={32} />
                <div>
                  <h3 className="education-title">Machine Learning Specialization</h3>
                  <div className="education-school">Coursera/Stanford</div>
                </div>
              </div>
              <div className="education-details">
                <div>Completed August 2025</div>
              </div>
              <ul className="course-list">
                <li>• Supervised Machine Learning: Regression and Classification</li>
                <li>• Advanced Learning Algorithms</li>
                <li>• Unsupervised Learning, Recommenders, Reinforcement Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container-small">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            I'm always interested in new opportunities and collaborations.
            Let's discuss how we can work together!
          </p>

          <div className="contact-grid">
            <a href="mailto:nrsanchez2450@gmail.com" className="contact-card">
              <Mail className="contact-icon" size={32} />
              <div className="contact-label">Email</div>
              <div className="contact-value">nrsanchez2450@gmail.com</div>
            </a>

            <a href="tel:+17142734010" className="contact-card">
              <Phone className="contact-icon" size={32} />
              <div className="contact-label">Phone</div>
              <div className="contact-value">(714) 273-4010</div>
            </a>

            <a href="https://linkedin.com/in/nathan-sanchez22/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <Linkedin className="contact-icon" size={32} />
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">Connect with me</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Nathan Sanchez. Built with React and passion.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;