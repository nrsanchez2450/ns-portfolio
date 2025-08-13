import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Github, Calendar, Award, Code, GraduationCap } from 'lucide-react';
import arduino from "./assets/images/projects/Arduino.jpg"
import chatScreenGPT from "./assets/images/projects/ChatScreenGPT.jpg"
import lidar from "./assets/images/projects/LidarMapping.jpg"
import PoliSupp from "./assets/images/projects/PoliSupp.jpg"
import RecordGPT from "./assets/images/projects/RecordGPT.jpg"
import SummaryGPT from "./assets/images/projects/SummaryGPT.jpg"


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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">NS</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors ${activeSection === section
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Nathan Sanchez
            </h1>
            <div className="text-xl md:text-2xl text-purple-300 mb-8">
              Software Engineer & Full-Stack Developer
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
              Passionate about developing innovative solutions and expanding expertise in modern technologies.
              Experienced in full-stack web development, robotics, and machine learning.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:nrsanchez2450@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="https://linkedin.com/in/nathan-sanchez22/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-purple-400 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-lg text-gray-300 space-y-6">
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
              <h3 className="text-2xl font-bold text-white mb-6">Technologies & Skills</h3>
              <div className="grid grid-cols-3 gap-3">
                {technologies.map((tech, index) => (
                  <div key={index}
                    className="bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-lg text-center text-sm text-gray-300 border border-slate-700/50 hover:border-purple-400/50 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>

          <div className="space-y-8">
            {/* Software Engineering Intern */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Software Engineering Intern</h3>
                  <div className="text-purple-400 font-semibold">OneTerrace | Tokyo, Japan</div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span>May 2023 – July 2023</span>
                </div>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Took ownership of a full-stack web application to manage client supporters, contributing across frontend and backend</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed an intuitive React.js interface and implemented REST APIs with Express.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated MySQL database using Prisma ORM to streamline schema management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Deployed the application to an Ubuntu server using pm2, troubleshooting deployment independently</span>
                </li>
              </ul>
            </div>

            {/* Academy Tutor */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Academy Tutor</h3>
                  <div className="text-purple-400 font-semibold">Ruby Drive Elementary | Placentia, CA</div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span>October 2024 – Present</span>
                </div>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Managed a class of 26 fourth-grade students, offering individualized academic support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborated with educators and administrators to reinforce classroom learning goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed strong communication and leadership skills through daily engagement with students and staff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 group ${projects.length % 2 !== 0 && index === projects.length - 1 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <div className="text-gray-400 text-sm mb-2">{project.location}</div>
                  <div className="text-purple-400 text-sm">{project.period}</div>
                </div>

                <p className="text-gray-300 mb-6">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-600/30">
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
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-purple-400" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-white">B.S. in Software Engineering</h3>
                  <div className="text-purple-400">California Baptist University</div>
                </div>
              </div>
              <div className="text-gray-300">
                <div className="mb-2">2020 – 2024</div>
                <div>GPA: 3.3</div>
              </div>
              <div className="flex mt-5 items-center gap-2 text-purple-400">
                <Award size={20} />
                <span className="font-semibold">Eagle Scout (February 2020)</span>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-white">Machine Learning Specialization</h3>
                  <div className="text-purple-400">Coursera/Stanford</div>
                </div>
              </div>
              <div className="text-gray-300 mb-4">
                <div className="mb-2">Completed August 2025</div>
              </div>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Supervised Machine Learning: Regression and Classification</li>
                <li>• Advanced Learning Algorithms</li>
                <li>• Unsupervised Learning, Recommenders, Reinforcement Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and collaborations.
            Let's discuss how we can work together!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:nrsanchez2450@gmail.com"
              className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-400/50 transition-all group">
              <Mail className="text-purple-400 group-hover:scale-110 transition-transform" size={32} />
              <div className="text-white font-semibold">Email</div>
              <div className="text-gray-400 text-sm">nrsanchez2450@gmail.com</div>
            </a>

            <a href="tel:+17142734010"
              className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-400/50 transition-all group">
              <Phone className="text-purple-400 group-hover:scale-110 transition-transform" size={32} />
              <div className="text-white font-semibold">Phone</div>
              <div className="text-gray-400 text-sm">(714) 273-4010</div>
            </a>

            <a href="https://linkedin.com/in/nathan-sanchez22/" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-400/50 transition-all group">
              <Linkedin className="text-purple-400 group-hover:scale-110 transition-transform" size={32} />
              <div className="text-white font-semibold">LinkedIn</div>
              <div className="text-gray-400 text-sm">Connect with me</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Nathan Sanchez. Built with React and passion.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
