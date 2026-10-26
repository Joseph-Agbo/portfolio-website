import React from "react";
import { useEffect, useRef } from "react";

const skillGroups = [
  { title: "Core Languages", tags: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
  {
    title: "Frameworks & Libraries",
    tags: ["React", "React Hooks", "React Router"],
  },
  {
    title: "Styling",
    tags: ["CSS Grid", "Flexbox", "Responsive Design", "CSS Animations"],
  },
  { title: "Tools & Workflow", tags: ["Git", "GitHub", "VS Code", "npm"] },
  {
    title: "Performance & Quality",
    tags: [
      "Accessibility (a11y)",
      "Web Performance",
      "SEO Basics",
      "Chrome DevTools",
    ],
  },
  {
    title: "Currently Learning",
    tags: ["TypeScript", "Next.js", "Testing (Jest)"],
  },
];

export default function Skills() {
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
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">
            The technologies I use day-to-day to build modern, performant web
            applications.
          </p>
        </div>
        <div className="skills-categories fade-up">
          {skillGroups.map((group, i) => (
            <div key={i} className="skill-category">
              <div className="skill-cat-title">{group.title}</div>
              <div className="skill-tags">
                {group.tags.map((tag, j) => (
                  <span key={j} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
