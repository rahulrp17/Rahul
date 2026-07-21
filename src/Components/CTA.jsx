import { motion } from "framer-motion";

export default function CTA({ onBookNow }) {
  return (
    <section className="px-6 lg:px-20 lg:py-8 py-8">
     <motion.div
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

          {/* Trust Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white/5 border hover:bg-orange-400/30 border-white/10 p-6"
            >
              <div className="text-4xl mb-3">⚡</div>

              <h4 className="text-lg font-semibold">Fast Delivery</h4>

              <p className="text-gray-400 text-sm mt-2">
                Quick turnaround with premium quality and attention to detail.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-blue-300/30"
            >
              <div className="text-4xl mb-3">💎</div>

              <h4 className="text-lg font-semibold">Premium Design</h4>

              <p className="text-gray-400 text-sm mt-2">
                Beautiful UI with smooth animations and modern user experience.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-amber-200/30"
            >
              <div className="text-4xl mb-3">🤝</div>

              <h4 className="text-lg font-semibold">Lifetime Support</h4>

              <p className="text-gray-400 text-sm mt-2">
                Continuous support, guidance and improvements after project
                delivery.
              </p>
            </motion.div>
          </div>
        </motion.div>
    </section>
  );
}