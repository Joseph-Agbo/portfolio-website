import React from "react";
import { useEffect, useRef } from "react";

export default function Hero() {
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
    <section id="hero" ref={ref}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content fade-up">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Open to opportunities
            </div>
            <h1 className="hero-title">
              Frontend Developer
              <br />
              Building <span className="accent">Modern Web</span>
              <br />
              Experiences
            </h1>
            <p className="hero-summary">
              I craft clean, performant, and accessible user interfaces using
              modern technologies. Focused on delivering great user experiences
              and writing maintainable code.
            </p>
            <div className="hero-avatar-wrap">
              <div className="mobile-avatar">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <img className="photo-avatar" src="/images/profilephoto.jpeg" alt="My Photo" />
              </div>
            </div>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
                View My Projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-num hero-tag">2+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-divider"></div>
              <div>
                <div className="stat-num hero-tag">4+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-divider"></div>
              <div>
                <div className="stat-num">Over </div>
                <div className="hero-label">1 Year Experience</div>
              </div>
            </div>
          </div>
          <div className="hero-avatar-wrap">
            <div className="hero-avatar">
              <svg
                width="72"
                height="72"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <img className="hero-avatar" src="/images/profilephoto.jpeg" alt="My Photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
