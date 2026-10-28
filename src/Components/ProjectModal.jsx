import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectModal({ project, isOpen, onClose }) {
  const closeRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="nb-modal-backdrop" onClick={onClose}>
      <div
        ref={modalRef}
        className="nb-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nb-modal__head">
          <div>
            <h2 id="project-modal-title">{project.title}</h2>
            <p>{project.category} Project</p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="nb-modal__close"
            aria-label="Close project details"
          >
            &times;
          </button>
        </div>

        <div className="nb-modal__image">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            width="1916"
            height="909"
            loading="lazy"
          />
        </div>

        <div className="nb-modal__body">
          <p className="nb-lede">{project.description}</p>

          <h3>Technologies</h3>

          <div className="nb-project__tech">
            {project.tech?.map((tech) => (
              <span className="nb-chip nb-chip--violet" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <h3>Features</h3>

          <ul className="nb-modal__feature-list">
            {project.features?.map((feature) => (
              <li className="nb-modal__feature" key={feature}>
                <span aria-hidden="true">+</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="nb-modal__actions">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="nb-btn nb-btn--ink"
            >
              <FaExternalLinkAlt aria-hidden="true" />
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="nb-btn"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>

            <button
              type="button"
              onClick={onClose}
              className="nb-btn nb-btn--yellow"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
