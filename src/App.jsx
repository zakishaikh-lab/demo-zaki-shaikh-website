
import { useEffect, useState } from 'react';
import './App.css';

const skills = [
  { name: 'C#', symbol: 'C#', category: 'BACKEND DEVELOPMENT' },
  { name: '.NET', symbol: '.N', category: 'APPLICATION FRAMEWORK' },
  { name: 'React', symbol: '⚛', category: 'FRONTEND DEVELOPMENT' },
  { name: 'JavaScript', symbol: 'JS', category: 'PROGRAMMING LANGUAGE' },
  { name: 'HTML & CSS', symbol: 'H/C', category: 'WEB DESIGN' },
  { name: 'Azure', symbol: 'AZ', category: 'CLOUD COMPUTING' },
  { name: 'SQL Server', symbol: 'DB', category: 'DATABASE MANAGEMENT' },
  { name: 'Git & GitHub', symbol: 'GIT', category: 'VERSION CONTROL' },
  { name: 'CI/CD', symbol: 'CI', category: 'DEVOPS & AUTOMATION' }
];

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);

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

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      document.body.classList.add('is-scrolling');
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 300);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
      document.body.classList.remove('is-scrolling');
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <style>{`
        /* =====================================
           FINAL 3D SKILLS DESIGN
        ===================================== */

        #skills.skills-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse at 70% 45%,
              rgba(116, 75, 190, 0.16),
              transparent 48%
            ),
            #08080c !important;
        }

        #skills .section-heading {
          margin-bottom: 55px;
        }

        #skills .section-heading h2 {
          color: #ffffff !important;
          font-size: clamp(42px, 6vw, 76px);
          letter-spacing: -3px;
        }

        #skills .section-heading h2 span {
          color: #a98aff !important;
        }

        #skills .section-heading p {
          color: #9993a5 !important;
        }

        #skills .skill-grid {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          gap: 24px !important;
          perspective: 1400px;
          align-items: stretch;
        }

        #skills .skill-card {
          position: relative !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          align-items: stretch !important;
          min-width: 0;
          min-height: 315px !important;
          padding: 24px !important;
          overflow: hidden !important;
          border: 1px solid rgba(180, 155, 225, 0.2) !important;
          border-radius: 16px !important;
          background: linear-gradient(
            145deg,
            #211a30,
            #111016 75%
          ) !important;
          color: #ffffff !important;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.07),
            0 18px 40px rgba(0,0,0,0.3) !important;
          transform-style: preserve-3d;
          transition:
            transform 0.45s cubic-bezier(.2,.8,.2,1),
            background 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.4s ease,
            color 0.4s ease !important;
          cursor: pointer;
          will-change: transform;
        }

        #skills .skill-card::before {
          content: "";
          position: absolute;
          width: 210px;
          height: 210px;
          left: 50%;
          top: 35px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(135, 91, 220, 0.19);
          filter: blur(65px);
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        #skills .skill-card-top {
          position: relative;
          z-index: 3;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
        }

        #skills .skill-number {
          color: #a69bb9 !important;
          font-family: 'DM Mono', monospace;
          font-size: 10px !important;
          letter-spacing: 1.4px;
          transition: color 0.35s ease;
        }

        #skills .skill-arrow {
          color: #c1a6ff !important;
          font-size: 22px !important;
          transition: color 0.35s ease, transform 0.35s ease;
        }

        /* Floating 3D centerpiece */

        #skills .skill-art {
          height: 150px;
          position: relative;
          display: flex !important;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        #skills .skill-object {
          width: 84px;
          height: 84px;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 23px;
          background: linear-gradient(
            145deg,
            #b99aff,
            #6338a9
          ) !important;
          color: #ffffff !important;
          font-family: 'DM Mono', monospace;
          font-size: 23px;
          font-weight: 700;
          box-shadow:
            0 0 25px rgba(160,120,255,0.55),
            0 0 65px rgba(120,75,220,0.3),
            inset 0 2px 3px rgba(255,255,255,0.4);
          transform: translateZ(35px);
          animation: finalSkillFloat 4s ease-in-out infinite;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }

        #skills .skill-ring {
          position: absolute;
          width: 145px;
          height: 55px;
          border: 1px solid rgba(183,153,255,0.8);
          border-radius: 50%;
          transform: rotate(-30deg);
          animation: finalRingOne 8s linear infinite;
          transition: border-color 0.4s ease;
        }

        #skills .ring-two {
          width: 160px;
          height: 65px;
          border-color: rgba(211,90,145,0.65);
          animation: finalRingTwo 11s linear infinite;
        }

        #skills .ring-three {
          width: 112px;
          height: 112px;
          border-color: rgba(173,146,255,0.28);
          animation: finalRingOne 15s linear infinite reverse;
        }

        #skills .skill-light {
          position: absolute;
          bottom: 0;
          width: 110px;
          height: 18px;
          border-radius: 50%;
          background: rgba(153,110,255,0.6);
          filter: blur(22px);
          transition: background 0.4s ease;
        }

        #skills .skill-card-bottom {
          position: relative;
          z-index: 3;
          transform: translateZ(25px);
        }

        #skills .skill-card-bottom h3 {
          color: #ffffff !important;
          font-size: 24px !important;
          font-weight: 800 !important;
          letter-spacing: -0.8px;
          margin: 0 !important;
          transition: color 0.35s ease;
        }

        #skills .skill-card-bottom > span {
          display: block;
          margin-top: 10px;
          color: #92889f !important;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 1px;
          transition: color 0.35s ease;
        }

        /* WHITE 3D POP-OUT ON HOVER */

        @media (hover: hover) and (pointer: fine) {
          #skills .skill-card:hover {
            z-index: 5;
            background: linear-gradient(
              145deg,
              #ffffff,
              #eeeeF4
            ) !important;
            border-color: #ffffff !important;
            color: #17151d !important;
            transform:
              translateY(-17px)
              scale(1.055)
              rotateX(5deg)
              rotateY(-4deg) !important;
            box-shadow:
              0 30px 65px rgba(0,0,0,0.4),
              0 0 35px rgba(255,255,255,0.22) !important;
          }

          #skills .skill-card:hover::before {
            opacity: 0;
          }

          #skills .skill-card:hover .skill-number,
          #skills .skill-card:hover .skill-arrow,
          #skills .skill-card:hover .skill-card-bottom h3,
          #skills .skill-card:hover .skill-card-bottom > span {
            color: #24212b !important;
          }

          #skills .skill-card:hover .skill-arrow {
            transform: translate(4px, -4px);
          }

          #skills .skill-card:hover .skill-ring {
            border-color: rgba(70, 55, 100, 0.48);
          }

          #skills .skill-card:hover .skill-object {
            background: linear-gradient(
              145deg,
              #33303d,
              #17151d
            ) !important;
            box-shadow:
              0 12px 28px rgba(0,0,0,0.2),
              inset 0 2px 3px rgba(255,255,255,0.2);
          }

          #skills .skill-card:hover .skill-light {
            background: rgba(70,60,90,0.35);
          }
        }

        @keyframes finalSkillFloat {
          0%, 100% {
            transform: translateY(0) translateZ(35px);
          }
          50% {
            transform: translateY(-9px) translateZ(35px);
          }
        }

        @keyframes finalRingOne {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }

        @keyframes finalRingTwo {
          from { rotate: 0deg; }
          to { rotate: -360deg; }
        }

        /* Responsive layout */

        @media (max-width: 900px) {
          #skills .skill-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 560px) {
          #skills .skill-grid {
            grid-template-columns: 1fr !important;
          }

          #skills .skill-card {
            min-height: 285px !important;
          }

          #skills .section-heading h2 {
            letter-spacing: -2px;
          }

          #skills .skill-card:active {
            background: #ffffff !important;
            color: #17151d !important;
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #skills .skill-object,
          #skills .skill-ring {
            animation: none !important;
          }

          #skills .skill-card {
            transition: none !important;
          }
        }
      `}</style>

      <nav className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          Z<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
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
        {/* HERO */}
        <section className="new-hero" id="home">
          <div className="new-hero-content">
            <span className="hero-label">
              <span className="red-dot"></span>
              SOFTWARE DEVELOPER
            </span>

            <h1>
              ZAKI
              <span>SHAIKH.</span>
            </h1>

            <p className="hero-role">
              FULL STACK DEVELOPER &nbsp; | &nbsp; CLOUD & AZURE
            </p>

            <p className="new-hero-description">
              I build modern web applications and digital experiences
              that solve real-world problems.
            </p>

            <div className="new-hero-buttons">
              <a href="#work" className="hero-primary-button">
                Explore My Work →
              </a>

              <a
                href="https://github.com/zakishaikh-lab"
                target="_blank"
                rel="noreferrer"
                className="hero-secondary-button"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="new-hero-image">
            <img src="/zaki-portrait.PNG" alt="Zaki Shaikh" />
          </div>
        </section>

        {/* ABOUT */}
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

        {/* SKILLS */}
        <section className="skills-section reveal" id="skills">
          <div className="section-label">
            <span>02</span> / MY TOOLKIT
          </div>

          <div className="section-heading">
            <h2>Things I work <span>with.</span></h2>
            <p>
              Technologies I've worked with or am actively exploring.
            </p>
          </div>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-card-top">
                  <span className="skill-number">
                    TECHNOLOGY / 0{index + 1}
                  </span>
                  <span className="skill-arrow">↗</span>
                </div>

                <div className="skill-art">
                  <div className="skill-ring ring-one"></div>
                  <div className="skill-ring ring-two"></div>
                  <div className="skill-ring ring-three"></div>

                  <div className="skill-object">
                    <span>{skill.symbol}</span>
                  </div>

                  <div className="skill-light"></div>
                </div>

                <div className="skill-card-bottom">
                  <h3>{skill.name}</h3>
                  <span>{skill.category}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="work-section reveal" id="work">
          <div className="section-label">
            <span>03</span> / SELECTED WORK
          </div>

          <div className="section-heading">
            <h2>Selected <span>projects.</span></h2>
            <p>
              Practical work, technical exploration and ideas brought to life.
            </p>
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

                  <div className="cloud-status">
                    ● LIVE DEPLOYMENT
                  </div>
                </div>

                <div className="visual-bottom">
                  CLOUD / WEB DEVELOPMENT
                </div>
              </div>

              <div className="premium-project-info">
                <div className="project-category">
                  01 — CLOUD DEVELOPMENT
                </div>

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
                  <a
                    href="https://brave-river-0f8ebb910.4.azurestaticapps.net"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live website ↗
                  </a>

                  <a
                    href="https://github.com/zakishaikh-lab/demo-zaki-shaikh-website"
                    target="_blank"
                    rel="noreferrer"
                  >
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

                <div className="visual-bottom">
                  FRONTEND / EXPLORATION
                </div>
              </div>

              <div className="premium-project-info">
                <div className="project-category">
                  02 — FRONTEND DEVELOPMENT
                </div>

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
                  <span className="project-coming-soon">
                    MORE PROJECTS COMING SOON
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section reveal" id="contact">
          <div className="section-label">
            <span>04</span> / NEXT CHAPTER
          </div>

          <p className="contact-overline">HAVE AN IDEA?</p>

          <h2>
            Let's make
            <span> something matter.</span>
          </h2>

         
<a
  className="contact-button"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=Zakishaikh2026@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  Get in touch <span>↗</span>
</a>

          <div className="contact-note">
            zakishaikh2026@gmail.com .
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          Z<span>.</span>
        </a>

        <p>DESIGNED WITH CURIOSITY. BUILT WITH PURPOSE.</p>

        <span>
          {clock.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          })} · CHICAGO
        </span>
      </footer>
    </div>
  );
}
