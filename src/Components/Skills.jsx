import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiRedux, SiExpress, SiMongodb} from "react-icons/si";
// import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    name: "HTML5",
    level: 95,
    icon: <FaHtml5 size={40} color="#E34F26" />,
  },
  {
    name: "CSS3",
    level: 90,
    icon: <FaCss3Alt size={40} color="#1572B6" />,
  },
  {
    name: "JavaScript",
    level: 85,
    icon: <FaJs size={40} color="#F7DF1E" />,
  },
  {
    name: "React",
    level: 90,
    icon: <FaReact size={40} color="#61DAFB" />,
  },
  {
    name:"Redux",
    level: 80,
    icon: <SiRedux size={40} color="#764ABC" />,
  },
  { 
    name: "Tailwind CSS",
    level: 95,
    icon: <SiTailwindcss size={40} color="#06B6D4" />,
  },
  {
    name: "GitHub",
    level: 85,
    icon: <FaGithub size={40} color="#ffffff" />,
  },
  {
    name: "Framer Motion",
    level: 80,
    icon: <SiFramer size={40} color="#0055FF" />,
  },
  // {
  //   name: "Spring Boot",
  //   level: 75,
  //   icon: <SiSpringboot size={40} color="#6DB33F" />,
  // },
  {
    name:"Express",
    level: 80,
    icon: <SiExpress size={40} color="#0055FF" />,
  },
  {
    name:"MongoDB",
    level: 80,
    icon: <SiMongodb size={40} color="#47A248" />,
  }
  // {
  //   name: "VS Code",
  //   level: 95,
  //   icon: <VscVscode size={40} color="#007ACC" />,
  // },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 lg:px-20 py-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-orange-500 text-xl font-semibold">
          My Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Technologies I Work With
        </h2>

        <p className="text-gray-400 mt-4">
          Building modern and responsive web applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              type: "spring",
              stiffness: 90,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              rounded-2xl
              p-6
              hover:border-orange-500
              hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]
              transition-all
            "
          >
            {/* Icon + Name */}
            <div className="flex items-center gap-4 mb-5">
              {skill.icon}

              <div>
                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>

                <p className="text-orange-500 text-sm">
                  {skill.level}%
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.level}%`,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="
                  h-full
                  bg-gradient-to-r
                  from-orange-500
                  to-orange-400
                  rounded-full
                "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}