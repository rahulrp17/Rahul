import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "GitHub", to: "github" },
  { name: "Services", to: "services" },
  { name: "Notes", to: "notes" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nb-nav" aria-label="Main navigation">
      <div className="nb-nav__bar">
        <Link
          to="home"
          href="#home"
          smooth={true}
          offset={-100}
          duration={500}
          className="nb-nav__logo"
          aria-label="Rahul, back to top"
        >
          Rahul.
        </Link>

        <ul className="nb-nav__links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                href={`#${link.to}`}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="nb-nav__link--active"
                className="nb-nav__link"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="contact"
          href="#contact"
          smooth={true}
          offset={-100}
          duration={500}
          className="nb-btn nb-btn--yellow nb-nav__hire"
        >
          Hire Me
        </Link>

        <button
          type="button"
          className="nb-nav__toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <HiX aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="nb-nav__panel" id="mobile-navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  href={`#${link.to}`}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setOpen(false)}
                  activeClass="nb-nav__link--active"
                  className="nb-nav__link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="contact"
            href="#contact"
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setOpen(false)}
            className="nb-btn nb-btn--yellow nb-btn--full"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
