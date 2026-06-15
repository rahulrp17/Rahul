
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,

} from "react-icons/fa";

export default function Footer() {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <footer className="relative px-6 lg:px-20 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Rahul
              <span className="text-orange-500">.</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Frontend Developer & Java Full Stack Developer
              passionate about building modern web
              applications and engaging user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-orange-500">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-orange-500">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-orange-500">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-orange-500">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/rahulrp17"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  rounded-full
                  bg-white/5
                  flex items-center justify-center
                  hover:bg-orange-500
                  transition-all
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rahulrp4021"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  rounded-full
                  bg-white/5
                  flex items-center justify-center
                  hover:bg-orange-500
                  transition-all
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:rahulrp4021@gmail.com"
                className="
                  w-12 h-12
                  rounded-full
                  bg-white/5
                  flex items-center justify-center
                  hover:bg-orange-500
                  transition-all
                "
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2026 Ragul. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Built with React + Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll Top Button */}
      {/* <motion.button
        whileHover={{
          scale: 1.1,
          y: -3,
        }}
        onClick={scrollToTop}
        className="
          fixed
          bottom-6
          right-6
          w-14
          h-14
          rounded-full
          bg-orange-500
          flex
          items-center
          justify-center
          shadow-lg
          hover:bg-orange-600
          z-50
        "
      >
        <FaArrowUp />
      </motion.button> */}
    </footer>
  );
}
