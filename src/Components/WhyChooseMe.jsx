import { motion } from "framer-motion";
import {
  FaRocket,
  FaLaptopCode,
  FaMobileAlt,
  FaBolt,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket />,
    title: "Fast Delivery",
    description:
      "Projects are delivered on time without compromising quality or performance.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaLaptopCode />,
    title: "Modern Development",
    description:
      "Built using React, JavaScript, Tailwind CSS and the latest frontend technologies.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaMobileAlt />,
    title: "100% Responsive",
    description:
      "Your website will look perfect on desktop, tablet and every mobile device.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaBolt />,
    title: "High Performance",
    description:
      "Optimized loading speed, smooth animations and SEO-friendly structure.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Clean Code",
    description:
      "Scalable, reusable and maintainable code following industry best practices.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "Quick communication, project updates and support even after delivery.",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function WhyChooseMe() {
  return (
    <section
      id="why-choose-me"
      className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-orange-500 text-sm sm:text-base font-semibold tracking-[4px] uppercase">
            Why Choose Me
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Building Websites That
            <span className="text-orange-500"> Drive Results</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-sm sm:text-base lg:text-lg text-gray-400 leading-8">
            I combine modern design, clean code, responsive layouts and
            performance optimization to build websites that help businesses grow
            online with a premium user experience.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
              "
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition duration-500`}
              />

              <div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color}
                flex items-center justify-center text-white text-3xl shadow-lg`}
              >
                {item.icon}
              </div>

              <h3 className="relative text-2xl font-bold mt-8">{item.title}</h3>

              <p className="relative text-gray-400 mt-4 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20"
        >
          {[
            ["15+", "Projects Completed"],
            ["100%", "Responsive Design"],
            ["24 Hrs", "Quick Response"],
            ["Modern", "Latest Technologies"],
          ].map(([number, label], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 text-center hover:border-orange-500/40 transition-all duration-300"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">
                {number}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-gray-400">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[32px] border border-white/10 bg-gradient-to-br from-orange-500/10 via-white/5 to-transparent backdrop-blur-xl p-8 sm:p-10 lg:p-14 text-center"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-sm">
            Let's Work Together
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Build Your
            <span className="text-orange-500"> Dream Website?</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base lg:text-lg text-gray-400 leading-8">
            Whether you need a Portfolio, Business Website, Admin Dashboard,
            E-Commerce Store or a Custom Web Application, I'm here to turn your
            ideas into reality with modern design and clean development.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(249,115,22,.35)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onBookNow("Custom Website Development")}
            className="mt-10 w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base sm:text-lg shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
          >
            🚀 Start Your Project
          </motion.button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <div className="text-4xl mb-3">⚡</div>

              <h4 className="text-lg font-semibold">Fast Delivery</h4>

              <p className="text-gray-400 text-sm mt-2">
                Quick turnaround with premium quality and attention to detail.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <div className="text-4xl mb-3">💎</div>

              <h4 className="text-lg font-semibold">Premium Design</h4>

              <p className="text-gray-400 text-sm mt-2">
                Beautiful UI with smooth animations and modern user experience.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <div className="text-4xl mb-3">🤝</div>

              <h4 className="text-lg font-semibold">Lifetime Support</h4>

              <p className="text-gray-400 text-sm mt-2">
                Continuous support, guidance and improvements after project
                delivery.
              </p>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
