import React from "react";
import { useEffect, useRef } from "react";

const projects = [
  {
    icon: "🖼️",
    tags: ["React", "JavaScript", "Tailwind"],
    image: "/images/project-one.png",
    title: "Professional Portfolio Website",
    desc: "A website that tells a whole lot about my profession, tells avery audience all they need to know about me, and showcasing my frontend experience through unique functionality and presentable designs.",
    demo: "https://josephagbo.vercel.app",
    github: "https://github.com/Joseph-Agbo",
  },
  {
    icon: "🛒",
    tags: ["React", "JavaScript", "Tailwind"],
    image: "/images/project-two.png",
    title: "Wavebox",
    desc: "A music streaming and downloading software, making it easier for users to access quality music at their own control, while delivering remarkable user experience.",
    demo: "https://wavebox-weld.vercel.app",
    github: "https://github.com/Joseph-Agbo",
  }
];

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    ref.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and approach.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card fade-up">
              <div className="project-thumbnail">
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="project-screenshot"
                  loading="lazy"
                />
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {p.tags.map((t, j) => (
                    <span key={j} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-links">
                  <a href={p.demo} className="project-link">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                  <a href={p.github} className="project-link">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
