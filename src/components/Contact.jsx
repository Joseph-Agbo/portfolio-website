import React from "react";
import { useEffect, useRef, useState } from "react";

const contactLinks = [
  {
    type: "Email",
    value: "josephagbo811@gmail.com",
    href: "mailto:josephagbo811@gmail.com",
    icon: (
      <svg
        width="18"
        height="18"
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
    ),
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/joseph-agbo-chetachi-5b9243386",
    href: "https://linkedin.com/in/joseph-agbo-chetachi-5b9243386",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    type: "GitHub",
    value: "github.com/Joseph-Agbo",
    href: "https://github.com/Joseph-Agbo",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
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
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's work together</h2>
        </div>
        <div className="contact-inner">
          <div className="contact-info fade-up">
            <p>
              I'm currently open to new opportunities — whether it's a full-time
              role, freelance project, or collaboration. If you think we'd be a
              good fit, I'd love to hear from you.
            </p>
            <div className="contact-links">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="contact-link"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div>
                    <div className="contact-link-type">{link.type}</div>
                    <div className="contact-link-value">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form fade-up">
            <h3>Send a message</h3>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Jane Smith" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="jane@company.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Hi, I'd like to discuss a project..."
              ></textarea>
            </div>
            <button
              type="button"
              onClick={() => setShowMessage(true)}
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Send Message
            </button>
            {showMessage && (
              <div className="success-alert">
                <p>✓ Thank you for reaching out!</p>
                <p>I will get back to you soon.</p>
                <button type="button" onClick={() => setShowMessage(false)}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
