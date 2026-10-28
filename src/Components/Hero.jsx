import { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import HeroPortrait from "./HeroPortrait";

const roles = [
  "Frontend Developer",
  "React Developer",
  "MERN Stack Developer",
];

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState(roles[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    let timer;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 1700);
    } else if (deleting && text === "") {
      timer = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      }, 220);
    } else {
      timer = setTimeout(
        () => {
          setText(
            current.slice(
              0,
              deleting ? text.length - 1 : text.length + 1,
            ),
          );
        },
        deleting ? 45 : 75,
      );
    }

    return () => clearTimeout(timer);
  }, [deleting, roleIndex, text]);

  return (
    <span className="nb-strip__role-wrap">
      <span className="nb-strip__role">{text}</span>
      <span className="nb-strip__caret" aria-hidden="true" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="nb-hero">
      <div className="nb-wrap">
        <div className="nb-hero__top">
          <div className="nb-hero__main">
            <div className="nb-poster">
              <div className="nb-poster__tag">
                <span className="nb-kicker">Hello, Welcome</span>
              </div>

              <a
                href="#about"
                className="nb-arrow-tile"
                aria-label="Jump to the about section"
              >
                <FaArrowDown aria-hidden="true" />
              </a>

              <div className="nb-poster__strips">
                <div className="nb-strip nb-strip--yellow">
                  <h1 className="nb-strip__display">I&apos;m Rahul</h1>
                </div>

                <div className="nb-strip nb-strip--cream">
                  <TypingRole />
                </div>

                <div className="nb-strip nb-strip--ink">
                  <span className="nb-strip__sub">
                    Building Beautiful &amp; Responsive Web Experiences
                  </span>
                </div>
              </div>
            </div>

            <div className="nb-hero__band">
              <p className="nb-hero__pitch">
                MERN Stack Developer building responsive, high-performance web
                applications with React, Node.js, and MongoDB.
              </p>

              <div className="nb-hero__actions">
                <a href="/resume.pdf" download className="nb-btn nb-btn--ink">
                  <FaDownload aria-hidden="true" />
                  Download CV
                </a>

                <a href="#projects" className="nb-btn nb-btn--yellow">
                  View Projects
                </a>
              </div>
            </div>

            <div className="nb-hero__facts" aria-label="Portfolio facts">
              <div className="nb-fact">
                <strong>10+</strong>
                <span>Projects</span>
              </div>

              <div className="nb-fact">
                <strong>10+</strong>
                <span>Technologies</span>
              </div>

              <div className="nb-fact">
                <strong>100%</strong>
                <span>Responsive</span>
              </div>

              <div className="nb-fact">
                <strong>1+</strong>
                <span>Years Learning</span>
              </div>
            </div>
          </div>

          <aside className="nb-hero__aside" aria-label="Profile and quick links">
            <div className="nb-hero__photo">
              <HeroPortrait />
            </div>

            <div className="nb-hero__identity">
              <h2>Rahul</h2>
              <p>MERN Stack Developer</p>

              <span className="nb-status">
                <span className="nb-status__dot bg-green-500!" aria-hidden="true" />
               OPEN TO WORK
              </span>

              <div className="nb-socials nb-hero__socials">
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
                  href="https://www.instagram.com/_rahul._rp?igsh=MTFnZGo4YXJkN3V0cQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="nb-icon-btn"
                  aria-label="Instagram profile"
                >
                  <FaInstagram aria-hidden="true" />
                </a>

                <a
                  href="mailto:rahulrp4021@gmail.com"
                  className="nb-icon-btn"
                  aria-label="Email Rahul"
                >
                  <HiOutlineMail aria-hidden="true" />
                </a>
              </div>

              <div className="nb-hero__quick">
                <a
                  href="/resume.pdf"
                  download
                  className="nb-btn nb-btn--sm nb-btn--yellow"
                >
                  <FaDownload aria-hidden="true" />
                  CV
                </a>

                <a href="#contact" className="nb-btn nb-btn--sm">
                  Contact
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
