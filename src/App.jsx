import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import './App.css';

// --- Data ---
const projectData = [
  { title: 'Muar Tour Assistance', sub: 'React Web App', desc: 'Developed and deployed a modern tourism web application for Muar using React, Vite, and Netlify. Designed to assist tourists with navigation and local information.', link: 'https://muartourassistance.vercel.app/', image: '/muartour.png' },
  { title: 'TransactPro', sub: 'Python Data Structures', desc: 'Developed a Python-based banking application using Linked Lists and Stacks to manage transaction histories.', link: 'https://bankingtransaction.lovable.app', image: '/transactpro.jpeg' },
  { title: 'Logic Quest', sub: 'React Web Game', desc: 'Developed an interactive logic puzzle game using React and Vite. The game challenges users with algorithmic thinking and time-based puzzles.', link: 'https://sites.google.com/view/logicquest/home', image: '/logic.png' },
  { title: 'Sumo Zep Battle', sub: 'Robotics & Gamification', desc: 'Designed and built sumo robots for strategic competition, alongside developing a fast-paced digital math game focused on time-distance graphs and simultaneous equations.', link: 'https://sites.google.com/view/sumozepbattle/home', image: '/sumo.png' },
  { title: 'Money Management System', sub: 'Web Application', desc: 'Developed a web application for university students to track daily expenses, calculate monthly budgets, and determine if their financial balance is ideal.', link: 'https://sites.google.com/view/moneymanagementsystem/page?authuser=0', image: '/money.png' },
  { title: 'Road Safety Dashboard', sub: 'R & Power BI', desc: 'Analysed Pahang Road accident using R and Power BI to identify accident patterns and road safety trends.', link: 'https://github.com/Emillyaasya/Road-Safe-Pahang-/blob/main/README.md', image: '/page3.png' },
  { title: 'Telco Customer Churn Analysis', sub: 'SAS Viya', desc: 'Developed an interactive dashboard to analyze customer churn patterns, revenue loss, and key business metrics. ', link: 'https://github.com/Emillyaasya/Customer-Churn-EDA', image: '/churn2.png' },
];

const certificateData = [
  { title: 'SAS Certified Specialist', sub: 'SAS Viya', desc: 'Visual Business Analytics Using SAS Viya.', image: '/cert-sas.png' },
  { title: 'AWS Cendekiawan Malaysia', sub: 'AI Learning Path', desc: 'Completed the AI Learning Path program.', image: '/cert-aws.png' },
  { title: 'ASEAN Data Science Explorers', sub: 'SAP Analytics Cloud', desc: 'Training Session on SAP Analytics Cloud.', image: '/cert-asean.png' },
  { title: 'Data AI Experience', sub: 'National Competition', desc: 'Participant in national level data analytics competition.', image: '/cert-dax.png' },
  { title: 'Innoclash 2026', sub: 'International Hackathon', desc: 'Participant in the SDG Aligned 24 Hours International Hybrid Hackathon.', image: '/cert-innoclash.png' },
  { title: 'N-Datamatics 2026', sub: 'Exhibitor', desc: 'Showcased innovative statistical and mathematical solutions.', image: '/cert-datamatics.png' },
  { title: 'Data Insights Tour 2026', sub: 'Head of Certificates and Souvenirs Committee', desc: "Manages the design, preparation, and distribution of all event certificates and Industry's souvenirs.", image: '/diit.png' },
  { title: 'SK Medini International Co-Curriculum Carnival 2.0', sub: 'Facilitator', desc: "Facilitated engaging co-curricular sessions and group activities for SK Medini students.", image: '/faci.png' },
  { title: 'Inspirasi MADANI: Mencipta Generasi Peduli', sub: 'Members of Sports and Activities Committee', desc: 'Served in the Sports and Activities Unit for a 3-day community program with the Sungai Kajang local community.', image: '/im.png' },
  { title: 'Fish To Feed', sub: 'Participant', desc: 'Participated in a community program in Kulai', image: '/utm.png' },
];

// Animation Variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// --- Scroll Shadow Wrapper ---
function ShadowSection({ id, className, children, style }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 1]);

  return (
    <motion.section 
      id={id} 
      ref={ref}
      style={{ ...style, opacity, scale }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// --- Main App Component ---
function App() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="app-container">
      
      {/* MOVING GRAPHICAL TREND LINE BACKGROUND */}
      <div className="liquid-bg">
        <div className="bg-grid"></div>
        <div className="trend-line-container">
          <svg className="trend-svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path className="trend-path path-1" d="M-100,600 C100,500 200,300 400,400 C600,500 700,200 900,300 C1100,400 1200,100 1500,200" fill="none" stroke="rgba(200, 90, 75, 0.4)" strokeWidth="3" />
            <path className="trend-path path-2" d="M-100,700 C200,600 300,400 500,500 C700,600 800,300 1000,400 C1200,500 1300,200 1500,300" fill="none" stroke="rgba(100, 150, 255, 0.3)" strokeWidth="2" />
            <path className="trend-path path-3" d="M-100,400 C150,300 250,500 450,300 C650,100 750,400 950,200 C1150,0 1250,300 1500,100" fill="none" stroke="rgba(100, 200, 150, 0.2)" strokeWidth="4" />
            <circle cx="400" cy="400" r="4" fill="#C85A4B" className="data-point" />
            <circle cx="900" cy="300" r="4" fill="#C85A4B" className="data-point" />
            <circle cx="500" cy="500" r="4" fill="#6496FF" className="data-point" />
            <circle cx="1000" cy="400" r="4" fill="#6496FF" className="data-point" />
          </svg>
        </div>
      </div>

      {/* Floating Pill Navigation — hidden while certificate popup is open */}
      {!selectedCert && (
        <div className="navbar-wrapper">
          <nav className="navbar">
            <div className="nav-brand">NUR EMILLYA ASYA</div>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#certificates">Certificates</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="content">
        
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeUpVariant}>
            <div className="hero-text">
              <div className="hero-label">Available · WBL Placement (Feb 2027 - Jan 2028)</div>
              <h1 className="hero-title">
                <span style={{ display: 'block', whiteSpace: 'nowrap', color: 'var(--text-dark)' }}>NUR</span>
                <span style={{ display: 'block', whiteSpace: 'nowrap', color: 'var(--accent-rust)' }}>EMILLYA</span>
                <span style={{ display: 'block', whiteSpace: 'nowrap', color: 'var(--text-dark)' }}>ASYA</span>
              </h1>
              <p className="hero-desc">
                Computational Data Analytics undergraduate at UTHM. Specializing in turning complex data into clear business insights, scalable architectures, and high-impact solutions using Python, R, MongoDB, SAS Viya, and R Shiny.
              </p>
              <div className="hero-links">
                <a href="mailto:Nemillyaasya@gmail.com" className="link-style">Contact Me ↗</a>
                <a href="https://www.linkedin.com/in/nur-emillya-asya-806b60338/" target="_blank" rel="noreferrer" className="link-style">LinkedIn ↗</a>
                <a href="https://drive.google.com/file/d/125FnmQDTQ9MnbcLuBl-8vWG1lBq09p6S/view?usp=drive_link" target="_blank" rel="noreferrer" className="link-style">View Resume ↗</a>
              </div>
            </div>
            <div className="hero-image-container">
              <img src="/profile.jpg" alt="Nur Emillya Asya" className="profile-pic" />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <ShadowSection id="about" className="section">
          <div className="section-header">About Me</div>
          <h2 className="section-title">
            <span style={{ display: 'block' }}>Driving decisions through</span>
            <span style={{ display: 'block' }}>computational intelligence.</span>
          </h2>
          
          <div className="grid-2">
            <div>
              <p className="list-item-desc" style={{ marginBottom: '1.5rem' }}>
                I bridge the gap between rigorous mathematical modeling and high-stakes executive execution. As an undergraduate at Universiti Tun Hussein Onn Malaysia (UTHM), I combine technical expertise in data analytics with proven leadership in team management.
              </p>
              <p className="list-item-desc">
                Beyond technical work, I bring leadership in team management and event coordination, having competed in international hackathons and led community outreach programs. I am ready to deliver real value in a data-driven organization.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>Core Skills</h3>
              <div>
                {['Python', 'R', 'MongoDB', 'SAS Viya', 'R Shiny', 'Power BI', 'SQL', 'Machine Learning', 'Visual Studio Code', 'Vite', 'React'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </ShadowSection>

        {/* Education Section */}
        <ShadowSection id="education" className="section">
          <div className="section-header">Education Journey</div>
          <h2 className="section-title">Academic Foundation</h2>
          
          <div className="timeline">
            <motion.div className="timeline-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="list-item-title">Sekolah Menengah Sains Kota Tinggi</div>
                <div className="list-item-sub">Science Stream</div>
                <div className="list-item-desc">Feb 2018 - Dec 2022 | 5A in SPM</div>
              </div>
            </motion.div>
            
            <motion.div className="timeline-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="list-item-title">Universiti Tun Hussein Onn Malaysia (UTHM)</div>
                <div className="list-item-sub">Bachelor of Science (Computational Data Analytics) with Honours</div>
                <div className="list-item-desc">Aug 2024 - Present | Cumulative GPA: 3.53</div>
              </div>
            </motion.div>
          </div>
        </ShadowSection>

        {/* Projects Section */}
        <ShadowSection id="projects" className="section">
          <div className="section-header">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="card-grid">
            {projectData.map((project, index) => (
              <motion.div key={index} className="card" whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(200, 90, 75, 0.15)" }} transition={{ duration: 0.3 }}>
                <div className="card-image-placeholder" style={{ padding: 0, overflow: 'hidden', border: project.image ? 'none' : '1px dashed rgba(0, 0, 0, 0.1)', backgroundColor: project.image ? '#1A1A1A' : 'transparent' }}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span>Image Coming Soon</span>
                  )}
                </div>
                
                <div className="card-sub">{project.sub}</div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.desc}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="card-btn">
                  View Project ↗
                </a>
              </motion.div>
            ))}
          </div>
        </ShadowSection>

        {/* Certificates Section */}
        <ShadowSection id="certificates" className="section">
          <div className="section-header">Accreditation</div>
          <h2 className="section-title">Certifications & Achievements</h2>
          
          <div className="card-grid">
            {certificateData.map((cert, index) => (
              <motion.div 
                key={index} 
                className="card" 
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(200, 90, 75, 0.15)" }} 
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCert(cert)}
                style={{ cursor: 'pointer' }}
              >
                
                <div className="card-image-placeholder" style={{ padding: 0, overflow: 'hidden', border: cert.image ? 'none' : '1px dashed rgba(0, 0, 0, 0.1)', backgroundColor: cert.image ? '#FFFFFF' : 'transparent' }}>
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }} />
                  ) : (
                    <span>Certificate Image</span>
                  )}
                </div>
                
                <div className="card-sub">{cert.sub}</div>
                <h3 className="card-title">{cert.title}</h3>
                <p className="card-desc">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </ShadowSection>

        {/* Contact Section */}
        <ShadowSection id="contact" className="section" style={{ borderBottom: 'none' }}>
          <div className="section-header">Contact</div>
          <h2 className="section-title">Let's design the future of data.</h2>
          
          <p className="list-item-desc" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
            Currently seeking a placement for my Work-Based Learning (WBL) programme from February 2027 to January 2028. Open to analytics roles, computational research, and engineering collaborations.
          </p>
          
          <div className="contact-grid">
            <div className="contact-info-col">
              <a href="mailto:Nemillyaasya@gmail.com" className="contact-card">
                <div className="contact-icon">✉</div>
                <div className="contact-card-text">
                  <h4>Direct Email</h4>
                  <p>Nemillyaasya@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/60167340712" target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-icon">📱</div>
                <div className="contact-card-text">
                  <h4>WhatsApp Direct</h4>
                  <p>+60 16-7340712</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/nur-emillya-asya-806b60338/" target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-icon">💼</div>
                <div className="contact-card-text">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/emillya</p>
                </div>
              </a>
            </div>

            <div className="contact-form-container">
              <form
                action="https://formsubmit.co/nemillyaasya@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_subject" value="New Portfolio WBL / Inquiry Message" />
                <input type="hidden" name="_captcha" value="true" />

                <div className="form-group">
                  <label htmlFor="sender-name">My name is</label>
                  <input
                    id="sender-name"
                    type="text"
                    name="name"
                    placeholder="e.g. Jane Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sender-email">Reach me at</label>
                  <input
                    id="sender-email"
                    type="email"
                    name="email"
                    placeholder="email@organization.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sender-message">Your message</label>
                  <textarea
                    id="sender-message"
                    name="message"
                    rows="4"
                    placeholder="Share details about the WBL placement, research challenge, or collaboration..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message ↗</button>
              </form>
            </div>
          </div>
        </ShadowSection>

        {/* CERTIFICATE POPUP MODAL */}
        {selectedCert && (
          <div 
            className="cert-modal-overlay" 
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
              <img src={selectedCert.image} alt={selectedCert.title} />
            </motion.div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;