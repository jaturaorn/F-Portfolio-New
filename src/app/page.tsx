export default function Home() {
  return (
    <>
      <div
        className=" min-h-screen font-[family-name:var(--font-geist-sans)]"
        // flex flex-col items-center justify-items-center gap-16
      >
        {/* <!-- Modern Space Elements --> */}
        <div className="nebula-bg"></div>

        {/* <!-- Particle System --> */}
        <div className="particle-system">
          <div className="space-particle"></div>
          <div className="space-particle"></div>
          <div className="space-particle"></div>
          <div className="space-particle"></div>
          <div className="space-particle"></div>
        </div>

        {/* <!-- Modern Stars --> */}
        <div className="space-element modern-star"></div>
        <div className="space-element modern-star"></div>
        <div className="space-element modern-star"></div>
        <div className="space-element modern-star"></div>

        {/* <!-- Modern Space Objects --> */}
        <div className="space-element modern-rocket"></div>
        <div className="space-element modern-planet"></div>
        <div className="space-element modern-ufo"></div>
        <div className="space-element modern-asteroid"></div>
        <div className="space-element modern-comet"></div>

        {/* <!-- Navigation --> */}
        <nav>
          <div className="container">
            <div className="logo">Portfolio</div>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Project</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- Hero Section --> */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Front-end Developer</h1>
            <p>
              Creating high-performance web applications with exceptional user
              experience
            </p>
            <a href="#about" className="cta-button">
              view project
            </a>
          </div>
        </section>

        {/* <!-- About Section --> */}
        <section id="about">
          <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="about-image">
                <span
                // style="font-size: 6rem; background: linear-gradient(45deg, #ffffff, #60a5fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
                >
                  👨‍🚀
                </span>
              </div>
              <div className="about-text">
                <p>
                  Experienced Web Developer passionate about creating beautiful,
                  functional, and high-performance digital experiences.
                  Leveraging years of development expertise and a commitment to
                  continuous learning, I deliver innovative web solutions that
                  drive results for clients and users alike.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Skills Section --> */}
        <section id="skills" className="skills">
          <div className="container">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>Frontend Development</h3>
                <p>HTML, CSS, JavaScript, TypeScript, React, Vue.js</p>
              </div>
              <div className="skill-card">
                <h3>Backend Development</h3>
                <p>Node.js, Python, Express, MangoDB, SQL</p>
              </div>
              <div className="skill-card">
                <h3>UI/UX Design</h3>
                <p>Figma, Adobe XD</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Projects Section --> */}
        <section id="projects">
          <div className="container">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image project-web"></div>
                <div className="project-content">
                  <h3>E-commerce Website</h3>
                  <p>
                    เว็บไซต์ขายของออนไลน์ที่สมบูรณ์
                    พร้อมระบบการชำระเงินและจัดการสินค้า
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image project-mobile"></div>
                <div className="project-content">
                  <h3>Mobile App</h3>
                  <p>
                    แอปพลิเคชันมือถือสำหรับการจัดการงานประจำวัน พร้อม
                    notification
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image project-dashboard"></div>
                <div className="project-content">
                  <h3>Business Dashboard</h3>
                  <p>ระบบแดชบอร์ดสำหรับติดตามข้อมูลทางธุรกิจแบบ real-time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Contact Section --> */}
        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact Me</h2>
            <p>สนใจร่วมงานหรือมีโปรเจคที่ต้องการความช่วยเหลือ?</p>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/jaturaporn"
                className="contact-link"
              >
                LinkedIn
              </a>
              <a href="https://github.com/jaturaorn" className="contact-link">
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <footer>
          <div className="container">
            <p>&copy; 2025 My Portfolio. สงวนลิขสิทธิ์.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
