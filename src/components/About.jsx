import React from "react";
import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: "⚡",
    title: "Problem Solving",
    desc: "I break down complex challenges into manageable, elegant solutions.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "Every project I build works seamlessly across all devices and screen sizes.",
  },
  {
    icon: "♿",
    title: "Accessibility",
    desc: "I follow WCAG standards and build with all users in mind from day one.",
  },
  {
    icon: "📚",
    title: "Continuous Learning",
    desc: "The web evolves fast. I stay current and embrace new challenges eagerly.",
  },
];

export default function About() {
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
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-up">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Passionate about building things that matter
            </h2>
            <p>
              I'm a Frontend Developer with a genuine passion for creating web
              applications that are fast, accessible, and enjoyable to use. I
              focus on writing clean, maintainable code and continuously
              improving my craft.
            </p>
            <p>
              I enjoy solving complex UI challenges, turning designs into
              pixel-perfect implementations, and making sure every user
              interaction feels natural and smooth.
            </p>
            <p>
              When I'm not coding, I stay current with the latest web standards,
              explore open-source projects, and experiment with new tools and
              frameworks.
            </p>
          </div>
          <div className="about-highlights fade-up">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-card">
                <div className="highlight-icon">{h.icon}</div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
