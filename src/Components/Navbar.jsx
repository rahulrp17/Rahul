import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
   <motion.nav
initial={{ y: -80, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
className="fixed top-0 left-0 w-full z-50"

>

  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3">
<div
  className="
    backdrop-blur-md
    bg-white/5
    border
    border-white/10
    rounded-full
    px-4
    sm:px-6
    py-3
    flex
    items-center
    justify-between
  "
>
  {/* Logo */}
  <h1 className="text-xl sm:text-2xl font-bold text-white">
    Rahul<span className="text-orange-500">.</span>
  </h1>

  {/* Desktop Menu */}
  <ul className="hidden md:flex gap-8">
    {navLinks.map((link) => (
      <li key={link.name}>
        <Link
          to={link.to}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="text-orange-500"
          className="
            text-gray-300
            hover:text-orange-500
            cursor-pointer
            transition
          "
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>

  {/* Hire Me */}
  <Link
    to="contact"
    smooth={true}
    offset={-100}
    duration={500}
    className="
      hidden
      md:block
      px-5
      py-2
      rounded-full
      bg-orange-500
      hover:bg-orange-600
      text-white
      cursor-pointer
    "
  >
    Hire Me
  </Link>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-white text-2xl"
    onClick={() => setOpen(!open)}
  >
    {open ? <HiX /> : <HiMenu />}
  </button>
</div>

{/* Mobile Menu */}
{open && (
  <motion.div
    initial={{ opacity: 0, y: -15 }}
    animate={{ opacity: 1, y: 0 }}
    className="
      md:hidden
      mt-3
      mx-1
      backdrop-blur-xl
      bg-black/70
      border
      border-white/10
      rounded-2xl
      p-5
    "
  >
    <ul className="flex flex-col gap-4">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            to={link.to}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setOpen(false)}
            className="
              block
              py-2
              text-white
              text-lg
              font-medium
              hover:text-orange-500
              transition
              cursor-pointer
            "
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>

    <Link
      to="contact"
      smooth={true}
      offset={-100}
      duration={500}
      onClick={() => setOpen(false)}
      className="
        mt-5
        block
        w-full
        text-center
        py-3
        rounded-xl
        bg-orange-500
        hover:bg-orange-600
        text-white
        cursor-pointer
      "
    >
      Hire Me
    </Link>
  </motion.div>
)}

  </div>
</motion.nav>

  );
}
