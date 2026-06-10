import ProjectItems from "./Components/ProjectItems";
import projectData from "./project";

interface ProjectData {
  title: string;
  logo: string;
  link: string;
  category: string;
  description: string;
}

export default function Home() {
  const featuredProjects = projectData.filter((project) =>
    ["Web3", "Trading UI", "AI token", "Vesting"].includes(project.category)
  );

  return (
    <div className="site-shell min-h-screen">
      <div className="nebula-bg" aria-hidden="true"></div>
      <div className="particle-system" aria-hidden="true">
        <div className="space-particle"></div>
        <div className="space-particle"></div>
        <div className="space-particle"></div>
        <div className="space-particle"></div>
        <div className="space-particle"></div>
      </div>

      <nav>
        <div className="container">
          <a href="#home" className="logo" aria-label="Portfolio home">
            Jaturaporn
          </a>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="orbit-field" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hero-content">
          <p className="hero-kicker">Frontend developer for Web3-grade interfaces</p>
          <h1>Cinematic web experiences with frontend craft.</h1>
          <p className="hero-copy">
            I build high-performance React and Next.js interfaces for recruiters,
            Web3 teams, and local employers who need polished, reliable product
            work.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="cta-button">
              View projects
            </a>
            <a href="#contact" className="secondary-link">
              Contact me
            </a>
          </div>
          <div className="mission-stats" aria-label="Portfolio highlights">
            <div>
              <strong>{projectData.length}+</strong>
              <span>launched projects</span>
            </div>
            <div>
              <strong>{featuredProjects.length}</strong>
              <span>Web3 builds</span>
            </div>
            <div>
              <strong>React</strong>
              <span>Next.js / TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image" aria-hidden="true">
              <span>FD</span>
            </div>
            <div className="about-text">
              <span className="section-label">About</span>
              <h2>Frontend work built for momentum.</h2>
              <p>
                I am a frontend developer focused on sophisticated, user-centered
                websites and applications. My work combines modern React
                engineering, responsive UI, and a growing Web3 portfolio so teams
                can move from idea to usable interface with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Capabilities</span>
            <h2>Core systems I bring to a build.</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend Development</h3>
              <p>HTML, CSS, JavaScript, TypeScript, React, Next.js, Vue.js</p>
            </div>
            <div className="skill-card">
              <h3>Product Integration</h3>
              <p>Node.js, Python, Express, MongoDB, SQL, API-driven UI</p>
            </div>
            <div className="skill-card">
              <h3>Interface Design</h3>
              <p>Figma, Adobe XD, responsive systems, Web3 product polish</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Selected launches</span>
            <h2>Project work with range, proof, and Web3 depth.</h2>
          </div>
          <div className="projects-grid">
            {projectData.map((project: ProjectData, i: number) => (
              <ProjectItems
                key={`${project.title}-${i}`}
                projectDataObject={project}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <span className="section-label">Contact</span>
          <h2>Have a role, product, or Web3 interface that needs lift?</h2>
          <p>
            I am open to frontend roles, collaboration, and project-based work
            with teams that care about reliable interfaces and polished user
            experience.
          </p>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/jaturaporn"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jaturaorn"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2026 Jaturaporn Portfolio. Built for the next launch.</p>
        </div>
      </footer>
    </div>
  );
}
