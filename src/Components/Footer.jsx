import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="nb-footer">
      <div className="nb-wrap">
        <div className="nb-footer__grid">
          <div className="nb-footer__brand">
            <h2>Rahul.</h2>

            <p>
              Frontend Developer &amp; React Developer passionate about building
              modern web applications and engaging user experiences.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-md! text-xl!">Quick Links</h3>

            <div className="nb-footer__links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <a href="#services">Services</a>
            </div>
          </nav>

          <div>
            <h3 className="font-md! text-xl!">Connect</h3>

            <div className="nb-footer__socials">
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
            </div>
          </div>
        </div>

        <div className="nb-footer__bottom">
          <p>&copy; 2026 Rahul. All Rights Reserved.</p>
          <p>Built with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
