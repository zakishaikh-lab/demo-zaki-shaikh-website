
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const skills = [
  'C#', '.NET', 'React', 'JavaScript', 'HTML & CSS',
  'Azure', 'SQL Server', 'Git & GitHub', 'CI/CD'
];

const projects = [
  {
    number: '01',
    type: 'CLOUD / DEPLOYMENT',
    title: 'Cloud Portfolio',
    description: 'A personal portfolio built with React and deployed using Azure Static Web Apps.',
    tags: ['React', 'Azure', 'GitHub'],
    link: 'https://brave-river-0f8ebb910.4.azurestaticapps.net'
  },
  {
    number: '02',
    type: 'WEB DEVELOPMENT',
    title: 'Interactive Web Experience',
    description: 'A modern web experience exploring responsive layouts, interactive elements and frontend design.',
    tags: ['JavaScript', 'CSS', 'React'],
    link: ''
  }
];

function App() {
  const sceneRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = event => {
    if (!sceneRef.current) return;

    const rect = sceneRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    sceneRef.current.style.setProperty('--mouse-x', `${x * 25}px`);
    sceneRef.current.style.setProperty('--mouse-y', `${y * 25}px`);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise"></div>

      <nav className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          Z<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let's talk <span>↗</span>
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home" onMouseMove={handleMouseMove}>
          <div className="hero-grid"></div>

          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot"></span>
              BUILDING MY NEXT CHAPTER
            </div>

            <p className="eyebrow">HELLO, I'M ZAKI SHAIKH</p>

            <h1>
              I BUILD
              <span className="outline-text"> DIGITAL</span>
              <span className="gradient-text"> EXPERIENCES.</span>
            </h1>

            <p className="hero-description">
              IT graduate, cloud enthusiast and technology explorer.
              Turning ideas into digital experiences, one project at a time.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                Explore my work <span>↗</span>
              </a>
              <a href="#about" className="text-button">
                Discover my story ↓
              </a>
            </div>

            <div className="hero-meta">
              <span>BASED IN CHICAGO, USA</span>
              <span className="meta-line"></span>
              <span>IT · CLOUD · DEVELOPMENT</span>
            </div>
          </div>

          <div className="hero-art" ref={sceneRef}>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="planet">
              <div className="planet-shine"></div>
              <div className="planet-ring"></div>
            </div>

            <div className="floating-card card-top">
              <span className="card-icon">✦</span>
              <div>
                <small>CREATIVE MINDSET</small>
                <strong>Always exploring</strong>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span className="card-icon purple">⌘</span>
              <div>
                <small>TECHNOLOGY</small>
                <strong>Building & learning</strong>
              </div>
            </div>

            <div className="art-caption">DESIGN / DEVELOP / DEPLOY</div>
          </div>

          <div className="hero-index">01 — 04</div>
          <div className="scroll-indicator">SCROLL TO EXPLORE ↓</div>
        </section>

        <section className="intro-section reveal" id="about">
          <div className="section-label">
            <span>01</span> / A LITTLE ABOUT ME
          </div>

          <div className="intro-content">
            <h2>
              Curious by nature.
              <span> Driven by technology.</span>
            </h2>

            <div className="intro-bottom">
              <p>
                I have a background in Information Technology and an interest
                in software development, cloud computing and building useful
                digital products. I enjoy learning how things work and turning
                that knowledge into real projects.
              </p>

            
            </div>
          </div>
        </section>

        <section className="skills-section reveal" id="skills">
          <div className="section-label">
            <span>02</span> / MY TOOLKIT
          </div>

          <div className="section-heading">
            <h2>Things I work <span>with.</span></h2>
            <p>Technologies I've worked with or am actively exploring.</p>
          </div>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">0{index + 1}</span>
                <strong>{skill}</strong>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

<section className="work-section reveal" id="work">
  <div className="section-label">
    <span>03</span> / SELECTED WORK
  </div>

  <div className="section-heading">
    <h2>Selected <span>projects.</span></h2>
    <p>Practical work, technical exploration and ideas brought to life.</p>
  </div>

  <div className="premium-project-grid">

    <article className="premium-project">
      <div className="project-visual cloud-visual">
        <div className="visual-top">
          <span>PROJECT / 001</span>
          <span>2026</span>
        </div>
        <div className="cloud-window">
          <div className="window-dots">● ● ●</div>
          <div className="window-code">
            <span>const</span> portfolio = {'{'}
            <br />
            &nbsp;&nbsp;name: <em>'Zaki Shaikh'</em>,
            <br />
            &nbsp;&nbsp;stack: <em>'React + Azure'</em>,
            <br />
            &nbsp;&nbsp;status: <b>'Deployed'</b>
            <br />
            {'}'};
          </div>
          <div className="cloud-status">● LIVE DEPLOYMENT</div>
        </div>
        <div className="visual-bottom">CLOUD / WEB DEVELOPMENT</div>
      </div>

      <div className="premium-project-info">
        <div className="project-category">01 — CLOUD DEVELOPMENT</div>
        <h3>Personal Portfolio</h3>
        <p>
          A responsive personal website built with React and deployed
          through Microsoft Azure Static Web Apps.
        </p>
        <div className="premium-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>Azure</span>
          <span>GitHub</span>
        </div>
        <div className="project-actions">
          <a href="https://brave-river-0f8ebb910.4.azurestaticapps.net"
             target="_blank" rel="noreferrer">
            Live website ↗
          </a>
          <a href="https://github.com/zakishaikh-lab/demo-zaki-shaikh-website"
             target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </article>

    <article className="premium-project">
      <div className="project-visual code-visual">
        <div className="visual-top">
          <span>PROJECT / 002</span>
          <span>EXPERIMENTS</span>
        </div>
        <div className="code-symbol">&lt;/&gt;</div>
        <div className="code-orbit orbit-a"></div>
        <div className="code-orbit orbit-b"></div>
        <div className="visual-bottom">FRONTEND / EXPLORATION</div>
      </div>

      <div className="premium-project-info">
        <div className="project-category">02 — FRONTEND DEVELOPMENT</div>
        <h3>Frontend Experiments</h3>
        <p>
          A space for exploring responsive interfaces, interactive
          components, modern layouts and frontend techniques.
        </p>
        <div className="premium-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
        <div className="project-actions">
          <span className="project-coming-soon">MORE PROJECTS COMING SOON</span>
        </div>
      </div>
    </article>
  </div>
</section>

        <section className="contact-section reveal" id="contact">
          <div className="section-label">
            <span>04</span> / NEXT CHAPTER
          </div>

          <p className="contact-overline">HAVE AN IDEA?</p>
          <h2>
            Let's make
            <span> something matter.</span>
          </h2>

          <a className="contact-button" href="mailto:">
            Get in touch <span>↗</span>
          </a>

          <div className="contact-note">
            Add your email address to the contact button before publishing.
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">Z<span>.</span></a>
        <p>DESIGNED WITH CURIOSITY. BUILT WITH PURPOSE.</p>
        <span>{clock.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} · CHICAGO</span>
      </footer>
    </div>
  );
}

export { App };
