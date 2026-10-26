import React from "react";
import { useEffect, useRef } from "react";

const experience = [
  {
    period: "2025 – Present",
    role: "Frontend Developer",
    org: "Listacc Tech Limited · Mile 50, Abakaliki, Ebonyi State,",
    desc: "As a Frontend Developer at Listacc Tech Limited, I develop and maintain responsive, user-friendly web applications using modern frontend technologies. My responsibilities include translating UI/UX designs into functional interfaces, writing clean and reusable code, optimizing website performance, and ensuring cross-browser compatibility. I collaborate with team members to deliver high-quality digital solutions, troubleshoot frontend issues, and enhance user experience. I leverage technologies such as React, JavaScript, Tailwind and modern frontend frameworks to build accessible, scalable, and visually appealing web applications.",
  },
  {
    period: "2025 – 2026",
    role: "Frontend Developer",
    org: "Self-Employed",
    desc: "Built and maintained web projects, focusing on clean React/Tailwind CSS structure, responsive layouts, and JavaScript interactivity.",
  },
];

const education = [
  {
    period: "2010 – 2016",
    role: "SSCE (NECO) / Science",
    org: "St. Thomas Aquinas Secondary School, Nwofe, Ebonyi State, Nigeria",
    desc: "Relevant coursework and skills gained.",
  },
];

function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-period">{item.period}</div>
      <div className="timeline-role">{item.role}</div>
      <div className="timeline-org">{item.org}</div>
      <div className="timeline-desc">{item.desc}</div>
      <div className="placeholder-note">Let's work together</div>
    </div>
  );
}

export default function Experience() {
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
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label">Background</div>
          <h2 className="section-title">Experience &amp; Education</h2>
        </div>
        <div className="exp-edu-grid">
          <div className="fade-up">
            <div className="timeline-title">💼 Experience</div>
            <div className="timeline">
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} />
              ))}
            </div>
          </div>
          <div className="fade-up">
            <div className="timeline-title">
              🎓 Education &amp; Certifications
            </div>
            <div className="timeline">
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
