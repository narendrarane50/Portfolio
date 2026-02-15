'use client';

import { useEffect } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

export default function PortfolioPage() {
  useEffect(() => {
    const nav = document.querySelector('.site-nav');
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const reveals = Array.from(document.querySelectorAll('.reveal'));

    const toggleMenu = () => {
      if (!nav || !menuBtn) return;
      const isOpen = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    };

    const closeMenu = () => {
      if (!nav || !menuBtn) return;
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    };

    menuBtn?.addEventListener('click', toggleMenu);
    navLinks.forEach((link) => link.addEventListener('click', closeMenu));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.14 }
    );

    reveals.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 70, 260)}ms`;
      revealObserver.observe(el);
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isActive);
          });
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      menuBtn?.removeEventListener('click', toggleMenu);
      navLinks.forEach((link) => link.removeEventListener('click', closeMenu));
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="bg-orb orb-1" aria-hidden="true" />
      <div className="bg-orb orb-2" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top">
          Narendra Rane
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
          Menu
        </button>
        <nav className="site-nav" id="top">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero reveal">
          <p className="eyebrow">MS Applied Machine Learning Student</p>
          <h1>Building practical AI systems that perform in the real world.</h1>
          <p>
            I am Narendra Rane, a machine learning graduate student at the University of Maryland
            focused on retrieval-augmented generation, computer vision, and real-time AI deployment.
          </p>
          <div className="hero-meta">
            <span>College Park, MD 20740</span>
            <span>(240) 854-8828</span>
            <span>narendrarane50@gmail.com</span>
          </div>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href="/Narendra_Rane_Resume_2.pdf" download>
              Download Resume
            </a>
          </div>
        </section>

        <section id="about" className="section reveal">
          <h2>Education</h2>
          <div className="timeline">
            <article className="card">
              <h3>University of Maryland</h3>
              <p className="meta">College Park, MD | Expected May 2026</p>
              <p>MS, Applied Machine Learning | GPA: 3.79</p>
            </article>
            <article className="card">
              <h3>Smt. Kashibai Navale College of Engineering (Pune University)</h3>
              <p className="meta">Pune, India | Aug 2017 - May 2021</p>
              <p>B.E., Computer Engineering</p>
            </article>
          </div>
        </section>

        <section id="projects" className="section reveal">
          <h2>Projects</h2>
          <div className="grid">
            <article className="card project-card">
              <h3>Dual-Mode RAG System for Research Paper QA</h3>
              <p className="meta">Oct 2025 - Dec 2025</p>
              <ul>
                <li>
                  Built a dual-mode RAG pipeline (text-only vs structured multimodal) for PDF QA
                  using FastAPI, Qdrant, Sentence Transformers, and LLaMA-3.3-70B.
                </li>
                <li>
                  Improved answer quality over No-RAG baseline by +47.7% keyword overlap and +24.5%
                  faithfulness.
                </li>
                <li>
                  Added structured PDF parsing and semantic chunking, improving conceptual retrieval
                  by up to +8.3% while keeping citation-grounded outputs.
                </li>
              </ul>
            </article>

            <article className="card project-card">
              <h3>AU-Conditioned MAE + Pose-Normalized FER</h3>
              <p className="meta">Oct 2025 - Dec 2025</p>
              <ul>
                <li>
                  Designed a hybrid facial expression recognition framework combining AU-conditioned
                  MAE pretraining with pose normalization on RAF-DB.
                </li>
                <li>
                  Implemented AU-conditioned ViT-MAE with token conditioning and FiLM-based
                  modulation, reaching 83.67% accuracy and 75.49% Macro-F1.
                </li>
                <li>
                  Ran ablations showing effects of pose normalization and AU transfer limits due to
                  dataset scale and AU noise.
                </li>
              </ul>
            </article>

            <article className="card project-card">
              <h3>PreGest: Real-Time Gesture Recognition for VR</h3>
              <p className="meta">Oct 2025 - Dec 2025</p>
              <ul>
                <li>
                  Developed a CNN-Transformer gesture recognition system for Meta Quest 3 with 94.14%
                  accuracy and 79 ms latency.
                </li>
                <li>
                  Built a multi-modal model combining RGB features and hand segmentation masks,
                  outperforming 3D CNN baselines with 2.6x faster inference.
                </li>
                <li>
                  Delivered an end-to-end ML workflow from dataset creation (671 videos) to ONNX edge
                  deployment.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="experience" className="section reveal">
          <h2>Work Experience</h2>
          <article className="card">
            <h3>Microsoft Nav Technical Consultant</h3>
            <p className="meta">Winspire Solutions Pvt. Ltd, Pune, India | May 2021 - Sept 2022</p>
            <ul>
              <li>
                Improved system performance by 30%, driving 15% better operational efficiency and a
                10% increase in client profitability.
              </li>
              <li>
                Delivered 10+ full-cycle ERP implementations in Microsoft Dynamics NAV and Business
                Central with 100% on-time delivery.
              </li>
              <li>
                Resolved 50+ high-priority issues, reducing average resolution time by 40% and cutting
                long-term support costs by 20%.
              </li>
            </ul>
          </article>
        </section>

        <section id="skills" className="section reveal">
          <h2>Technical Skills</h2>
          <div className="skill-groups">
            <article className="card">
              <h3>Programming</h3>
              <p>Python, JavaScript, C++, SQL, R, MongoDB, SQLite</p>
            </article>
            <article className="card">
              <h3>Machine Learning & AI</h3>
              <p>
                Supervised and Unsupervised Learning, Deep Learning, Neural Networks, Hypothesis
                Testing, Scikit-learn, SciPy
              </p>
            </article>
            <article className="card">
              <h3>Data Science & Analytics</h3>
              <p>
                Data Collection, Data Cleaning, Data Mining, Data Visualization, Pandas, NumPy,
                Matplotlib, Seaborn
              </p>
            </article>
            <article className="card">
              <h3>Tools & Platforms</h3>
              <p>Jupyter Notebook, Google Colab, Docker, Git, Excel, Linux</p>
            </article>
            <article className="card">
              <h3>Techniques</h3>
              <p>
                Predictive Modeling, Statistical Modeling, NLP, Artificial Intelligence, Computer
                Vision
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <h2>Contact</h2>
          <div className="contact-card card">
            <p>Open to internships and full-time opportunities in machine learning and AI engineering.</p>
            <div className="contact-links">
              <a href="mailto:narendrarane50@gmail.com">narendrarane50@gmail.com</a>
              <a href="tel:+12408548828">(240) 854-8828</a>
              <a href="https://www.linkedin.com/in/narendrarane-techcon/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/narendrarane50" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="/Narendra_Rane_Resume_2.pdf" download>
                Download Resume
              </a>
            </div>
            <p className="cert">
              Certification: Microsoft Certification of Introduction to Programming using Python (Jan
              2021)
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
