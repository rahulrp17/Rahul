import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import avatar3 from "../assets/avatar3.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="
     min-h-screen
     flex
     items-center
     justify-center
     px-8
     lg:px-20
     md:px-18
     pt-24
     pb-12
   "
    >
      {" "}
      <div
        className=" max-w-7xl mx-auto w-full grid lg:grid-cols-[300px_1fr] lg:gap-12 md:gap-10 gap-8 items-center
     "
      >
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-[30px]
p-4
text-center
lg:max-w-[600px]
md:max-w-[500px]
max-w-[400px]

"
        >
          {" "}
          <img
            src={avatar3}
            alt="Rahul"
            className="
           w-full
           max-h-[300px]
           max-w-[300px]
           object-contain
           objext-positiont-center
           mx-auto
           rounded-3xl
           border
           border-white/10
           bg-white
           
         "
          />
          <div
            className="  mt-3  inline-flex  items-center  gap-2  px-4  py-2  rounded-full  border  border-white/10  bg-green-950"
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm text-gray-300">Available for Work</span>
          </div>
          <h2 className="text-2xl font-bold mt-3">Rahul</h2>
          <p className="text-gray-400 text-sm">Frontend Developer</p>
          {/* SOCIALS */}
          {/* SOCIALS */}
          <div className="flex justify-center gap-2 mt-4">
            <a
              href="https://github.com/rahulrp17"
              target="_blank"
              rel="noreferrer"
              className="  w-10 h-10  rounded-xl  bg-white/5  border border-white/10  flex items-center justify-center  hover:text-white  hover:scale-110  transition-all"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/rahulrp4021"
              target="_blank"
              rel="noreferrer"
              className="  w-10 h-10  rounded-xl  bg-white/5  border border-white/10  flex items-center justify-center  text-[#0A66C2]  hover:scale-110  transition-all"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://www.instagram.com/_rahul._rp?igsh=MTFnZGo4YXJkN3V0cQ=="
              target="_blank"
              rel="noreferrer"
              className="
      w-10 h-10
      rounded-xl
      bg-white/5
      border border-white/10
      flex items-center justify-center
      text-[#E4405F]
      hover:scale-110
      transition-all
    "
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="mailto:rahulrp4021@gmail.com"
              className="
      w-10 h-10
      rounded-xl
      bg-white/5
      border border-white/10
      flex items-center justify-center
      text-[#EA4335]
      hover:scale-110
      transition-all
    "
            >
              <HiOutlineMail size={18} />
            </a>
          </div>
          {/* BUTTONS */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <a
              href="/resume.pdf"
              download
              className="
            py-2.5
            rounded-xl
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
            gap-2
            hover:border-orange-500
            transition
          "
            >
              <FaDownload />
              CV
            </a>

            <a
              href="#contact"
              className="
            py-2.5
            rounded-xl
            bg-orange-500
            hover:bg-orange-600
            transition
            text-white
          "
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
        text-center
        lg:text-left
      "
        >
          <p className="text-orange-500 font-medium mb-4">👋 Hello, Welcome</p>

          <h1
            className="
          text-5xl
          md:text-6xl
          lg:text-7xl
          font-black
          leading-tight
        "
          >
            I'm Rahul
          </h1>

          <div className="mt-3">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "UI Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="
            text-2xl
            md:text-4xl
            font-bold
            text-orange-500
          "
            />
          </div>

          <h2
            className="
          text-2xl
          md:text-4xl
          font-bold
          mt-4
        "
          >
            Building Beautiful & Responsive Web Experiences
          </h2>

          <p
            className="
          text-gray-400
          text-lg
          leading-relaxed
          mt-6
          max-w-3xl
          mx-auto
          lg:mx-0
        "
          >
            Passionate Frontend Developer specializing in React.js, JavaScript
            and Tailwind CSS. I build modern, responsive and user-friendly web
            applications with smooth animations, clean code and exceptional user
            experiences.
          </p>

          <div
            className="
          flex
          flex-wrap
          gap-4
          justify-center
          lg:justify-start
          mt-8
        "
          >
            <a
              href="/resume.pdf"
              download
              className="
            px-6
            py-3
            rounded-full
            bg-orange-500
            hover:bg-orange-600
            transition
          "
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="
            px-6
            py-3
            rounded-full
            border
            border-orange-500
            hover:bg-orange-500/10
            transition
          "
            >
              View Projects
            </a>
          </div>

          {/* STATS */}
          <div
            className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
          mt-12
        "
          >
            <div>
              <h3 className="text-4xl font-bold text-orange-500">6+</h3>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">10+</h3>
              <p className="text-gray-400 mt-2">Technologies</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">100%</h3>
              <p className="text-gray-400 mt-2">Responsive</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">1+</h3>
              <p className="text-gray-400 mt-2">Years Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
