import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully 🚀");

      form.current.reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 lg:px-20 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-orange-500 text-xl font-semibold tracking-lg">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-3">
            Have a project in mind? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="
              bg-white/5
              backdrop-blur-md
              border border-white/10
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-orange-500 text-xl" />
                <span className="text-gray-300">
                  rahulrp4021@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-orange-500 text-xl" />
                <span className="text-gray-300">
                  +91 9342830199
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-orange-500 text-xl" />
                <span className="text-gray-300">
                  Tamil Nadu, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-10">
              <a
                href="https://github.com/rahulrp17"
                target="_blank"
                rel="noreferrer"
                className="
                  p-4
                  rounded-full
                  bg-white/10
                  hover:bg-orange-500
                  transition
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="http://www.linkedin.com/in/rahulrp4021"
                target="_blank"
                rel="noreferrer"
                className="
                  p-4
                  rounded-full
                  bg-white/10
                  hover:bg-orange-500
                  transition
                "
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="
              bg-white/5
              backdrop-blur-md
              border border-white/10
              rounded-3xl
              p-8
              space-y-5
            "
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-black/20
                border border-white/10
                outline-none
                focus:border-orange-500
              "
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-black/20
                border border-white/10
                outline-none
                focus:border-orange-500
              "
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-black/20
                border border-white/10
                outline-none
                resize-none
                focus:border-orange-500
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                px-6
                py-3
                bg-orange-500
                rounded-full
                hover:bg-orange-600
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
