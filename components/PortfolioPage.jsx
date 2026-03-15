'use client';

import { useEffect } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
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
          <p className="eyebrow">Applied Machine Learning Graduate Student</p>
          <h1>Building retrieval-augmented, multimodal, and real-time AI systems.</h1>
          <p>
            Applied Machine Learning graduate student at the University of Maryland with hands-on
            experience building retrieval-augmented generation systems, multimodal computer vision
            models, and real-time ML pipelines. Skilled in PyTorch, Transformers, and scalable ML
            deployment.
          </p>
          <div className="hero-meta">
            <span>College Park, MD 20740</span>
            <span>(240) 854-8828</span>
            <span>narendrarane50@gmail.com</span>
            <span>Seeking full-time ML Engineer and Applied AI roles from May 2026</span>
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

        <section id="experience" className="section reveal">
          <h2>Work Experience</h2>
          <article className="card">
            <h3>Technical Consultant (Data Science &amp; Analytics)</h3>
            <p className="meta">Winspire Solutions Pvt. Ltd, Pune, India | May 2021 - Sept 2022</p>
            <ul>
              <li>
                Built scalable data pipelines using Python (Pandas, NumPy) and SQL to process 1M+
                enterprise records, improving reporting accuracy by 28% and reducing manual data
                processing by 40%.
              </li>
              <li>
                Conducted exploratory data analysis and predictive modeling (scikit-learn, XGBoost)
                to identify operational patterns, enabling data-driven optimizations that improved
                system performance by 30% and reduced operational costs by 18%.
              </li>
              <li>
                Developed analytics dashboards and optimized SQL queries across PostgreSQL and ERP
                systems, reducing query latency by 45% and supporting KPI tracking for 10+
                enterprise client deployments.
              </li>
            </ul>
          </article>
        </section>

        <section id="projects" className="section reveal">
          <h2>Projects</h2>
          <div className="grid">
            <article className="card project-card">
              <h3>Dual-Mode RAG System for Research Paper QA</h3>
              <p className="meta">Oct 2025 - Dec 2025</p>
              <ul>
                <li>
                  Designed a dual-mode RAG system (text-only vs. structured multimodal) for PDF
                  question answering using FastAPI, Qdrant, Sentence Transformers, and
                  LLaMA-3.3-70B.
                </li>
                <li>
                  Improved answer quality over a No-RAG baseline by +47.7% keyword overlap and
                  +24.5% faithfulness, demonstrating the impact of retrieval-augmented generation.
                </li>
                <li>
                  Implemented structured PDF parsing and semantic chunking, improving conceptual
                  query retrieval by up to +8.3% keyword overlap while preserving
                  citation-grounded outputs.
                </li>
              </ul>
            </article>

            <article className="card project-card">
              <h3>AU-Conditioned MAE + Pose-Normalized FER</h3>
              <p className="meta">Oct 2025 - Dec 2025</p>
              <ul>
                <li>
                  Designed a hybrid FER framework combining AU-conditioned self-supervised MAE
                  pretraining with pose normalization, evaluated on RAF-DB (7 classes) under
                  in-the-wild pose variation.
                </li>
                <li>
                  Implemented an AU-Conditioned ViT-MAE, injecting Action Units via token
                  conditioning and FiLM-based feature modulation, and achieved 83.67% accuracy /
                  75.49% Macro-F1 with a supervised FER baseline.
                </li>
                <li>
                  Performed ablations showing pose normalization reduced accuracy to 80.28% and
                  AU-MAE transfer limits (71.79% accuracy) due to dataset scale and AU noise.
                </li>
              </ul>
            </article>

            <article className="card project-card">
              <h3>PreGest: Real-Time Gesture Recognition for VR</h3>
              <p className="meta">Oct 2025 - Dec 2025</p>
              <ul>
                <li>
                  Developed a CNN-Transformer gesture recognition system for Meta Quest 3, achieving
                  94.14% accuracy with 79 ms latency in real-time VR environments.
                </li>
                <li>
                  Designed a multi-modal architecture combining RGB features and hand segmentation
                  masks, outperforming 3D CNN baselines with 2.6x faster inference.
                </li>
                <li>
                  Built a full ML pipeline from dataset creation (671 videos) to ONNX deployment and
                  edge optimization.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <h2>Technical Skills</h2>
          <div className="skill-groups">
            <article className="card">
              <h3>Programming</h3>
              <p>Python, C++, SQL, JavaScript, Bash</p>
            </article>
            <article className="card">
              <h3>ML &amp; Deep Learning</h3>
              <p>
                PyTorch, TensorFlow, scikit-learn, Transformers, Hugging Face, XGBoost, LLM
                fine-tuning, LoRA/PEFT
              </p>
            </article>
            <article className="card">
              <h3>Generative AI &amp; NLP</h3>
              <p>
                RAG, LangChain, LLaMA, BERT, semantic search, embeddings, vector databases
                (Qdrant/FAISS)
              </p>
            </article>
            <article className="card">
              <h3>Computer Vision</h3>
              <p>
                CNNs, Vision Transformers (ViT), self-supervised learning (MAE), OpenCV, prompt
                engineering
              </p>
            </article>
            <article className="card">
              <h3>Data &amp; Databases</h3>
              <p>
                Pandas, NumPy, PostgreSQL, MongoDB, EDA, feature engineering, data visualization
              </p>
            </article>
            <article className="card">
              <h3>Deployment &amp; MLOps</h3>
              <p>Docker, FastAPI, REST APIs, ONNX, MLflow, model serving, experiment tracking</p>
            </article>
            <article className="card">
              <h3>Tools &amp; Systems</h3>
              <p>Git, Linux, CI/CD fundamentals, AWS (EC2, S3)</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <h2>Contact</h2>
          <div className="contact-card card">
            <p>
              Seeking full-time Machine Learning Engineer and Applied AI opportunities starting May
              2026.
            </p>
            <div className="contact-links">
              <a href="mailto:narendrarane50@gmail.com">narendrarane50@gmail.com</a>
              <a href="tel:+12408548828">(240) 854-8828</a>
              <a href="https://www.linkedin.com/in/narendrarane-techcon/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/narendrarane50" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://portfolio-narendrarane50s-projects.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Portfolio
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
