import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <nav className="nb-social-rail" aria-label="Social links">
      <a
        href="https://github.com/rahulrp17"
        target="_blank"
        rel="noreferrer"
        className="nb-icon-btn"
        aria-label="GitHub profile"
      >
        <FaGithub aria-hidden="true" />
      </a>

      <a
        href="https://www.linkedin.com/in/rahulrp4021"
        target="_blank"
        rel="noreferrer"
        className="nb-icon-btn"
        aria-label="LinkedIn profile"
      >
        <FaLinkedin aria-hidden="true" />
      </a>

      <a
        href="mailto:rahulrp4021@gmail.com"
        className="nb-icon-btn"
        aria-label="Email Rahul"
      >
        <FaEnvelope aria-hidden="true" />
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="nb-icon-btn"
        aria-label="Open Rahul's resume"
      >
        <FaFilePdf aria-hidden="true" />
      </a>
    </nav>
  );
}
