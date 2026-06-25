import { motion } from "framer-motion";
import {
  FaReact,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaCode,
} from "react-icons/fa";
// import { Link } from "react-scroll";

const services = [
  {
    icon: <FaReact />,
    title: "React Development",
    description:
      "Building fast, scalable and interactive React applications with modern architecture.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "Creating clean, responsive and user-friendly websites using modern technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts optimized for desktop, tablet and mobile devices.",
  },
  {
    icon: <FaPalette />,
    title: "UI Implementation",
    description:
      "Transforming Figma and design concepts into beautiful functional interfaces.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description:
      "Improving speed, SEO and user experience for better engagement.",
  },
  {
    icon: <FaCode />,
    title: "Modern Web Apps",
    description:
      "Developing modern web applications with React, APIs and best practices.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold text-lg">What I Do</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">My Services</h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Helping businesses and clients build modern, responsive and
            high-performance web experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                relative
                overflow-hidden
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                group
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-orange-500/10
                  to-transparent
                "
              />

              <div
                className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-orange-500/10
                  text-orange-500
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-6
                "
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="
    mt-6
    inline-flex
    items-center
    text-orange-500
    font-semibold
    cursor-pointer
  "
              >
                Let's Build Together →
              </Link> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
