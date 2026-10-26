import { motion } from "framer-motion";
import avatar2 from "../assets/avatar2.webp";

export default function About() {
  const stats = [
    {
      title: "6+",
      subtitle: "Projects",
    },
    {
      title: "MERN Stack",
      subtitle: "Developer",
    },
    {
      title: "100%",
      subtitle: "Responsive",
    },
    {
      title: "UI/UX",
      subtitle: "Focused",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 lg:px-20 py-20 flex items-center"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.img
            src={avatar2}
            alt="Developer"
            className="w-[320px] md:w-[400px] lg:w-[450px]"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-500  text-xl font-semibold tracking-lg mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            MERN Stack Developer
          </h2>



          <p className="text-gray-400 leading-8 text-lg">
            I am a passionate and skilled MERN Stack Developer with a strong background in building responsive web applications.
            I have a deep understanding of the MERN stack, including React.js, Node.js, Express, and MongoDB.
            I specialize in creating dynamic and interactive user interfaces, optimizing performance, and ensuring a seamless user experience.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                className="
                  bg-white/5
                  backdrop-blur-md
                  border border-white/10
                  rounded-2xl
                  p-5
                  hover:border-orange-500
                  hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]
                  transition-all
                  duration-300
                "
              >
                <h3 className="text-3xl font-bold text-orange-500">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}