import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";

export default function BookNowModal({ isOpen, onClose, selectedService }) {
  const [form, setForm] = useState({
    service: selectedService || "",
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    details: "",
  });

  useEffect(() => {
    if (!isOpen) return;

    setForm({
      service: selectedService || "",
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      timeline: "",
      details: "",
    });
  }, [isOpen, selectedService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = () => {
    if (!form.name || !form.email || !form.phone || !form.details) {
      alert("Please fill all required fields");
      return;
    }

    const phoneNumber = "919342830199";

    const message = `
🚀 *New Website Inquiry*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 Service: ${form.service}

👤 Name: ${form.name}

📧 Email: ${form.email}

📱 Phone: ${form.phone}

🏢 Company: ${form.company || "N/A"}

💰 Budget: ${form.budget || "Not Specified"}

⏳ Timeline: ${form.timeline || "Not Specified"}

📝 Project Details:
  ${form.details}
`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Close Modal
    onClose();

    // Reset Form
    setForm({
      service: selectedService || "",
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      timeline: "",
      details: "",
    });

    // Scroll back to Services section
    setTimeout(() => {
      const section = document.getElementById("services");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="  fixed  inset-0  z-[999]  bg-black/70  backdrop-blur-md  flex  items-center  justify-center  p-4"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.3,
            }}
            className="  w-full  max-w-4xl  max-h-[90vh]  overflow-y-auto  rounded-3xl  bg-[#111]  border  border-white/10  shadow-2xl"
          >
            <div className="  sticky  top-0  z-10  bg-[#111]  border-b  border-white/10  p-6  flex  items-center  justify-between">
              <div>
                <h2 className="text-3xl font-bold">Book Your Project</h2>

                <p className="text-gray-400 mt-1">
                  Let's discuss your project requirements
                </p>
              </div>

              <button
                onClick={onClose}
                className="  w-12  h-12  rounded-full  bg-white/5  hover:bg-amber-600 hover:text-white transition-colors duration-300  flex  items-center  justify-center cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Selected Service */}
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-400">
                    Selected Service
                  </label>

                  <input
                    type="text"
                    value={form.service}
                    readOnly
                    className="  w-full  mt-2  p-4  rounded-2xl  bg-orange-500/10  border  border-orange-500/30  text-orange-400  cursor-not-allowed"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="text-sm text-gray-400">Full Name *</label>

                  <div className="relative mt-2">
                    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder=""
                      className="  w-full  pl-14  pr-4  py-4  rounded-2xl  bg-white/5  border  border-white/10  focus:border-orange-500  outline-none  transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-gray-400">
                    Email Address *
                  </label>

                  <div className="relative mt-2">
                    <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder=""
                      className="  w-full  pl-14  pr-4  py-4  rounded-2xl  bg-white/5  border  border-white/10  focus:border-orange-500  outline-none  transition"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-gray-400">
                    Phone Number *
                  </label>

                  <div className="relative mt-2">
                    <FaPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder=""
                      className="  w-full  pl-14  pr-4  py-4  rounded-2xl  bg-white/5  border  border-white/10  focus:border-orange-500  outline-none"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="text-sm text-gray-400">
                    Company / Brand
                  </label>

                  <div className="relative mt-2">
                    <FaGlobe className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" />

                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder=""
                      className="  w-full  pl-14  pr-4  py-4  rounded-2xl  bg-white/5  border  border-white/10  focus:border-orange-500  outline-none"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="text-sm text-gray-400">Budget</label>

                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="  w-full  mt-2  px-5  py-4  rounded-2xl  bg-[#1b1b1b]  border  border-gray-700  text-white  outline-none  transition-all  duration-300  focus:border-orange-500  focus:ring-2  focus:ring-orange-500/30  cursor-pointer
  "
                  >
                    <option value="" className="bg-[#1b1b1b] text-gray-400">
                      Select Budget
                    </option>

                    <option
                      value="₹5,000 - ₹10,000"
                      className="bg-[#1b1b1b] text-white"
                    >
                      ₹5,000 - ₹10,000
                    </option>

                    <option
                      value="₹10,000 - ₹20,000"
                      className="bg-[#1b1b1b] text-white"
                    >
                      ₹10,000 - ₹20,000
                    </option>

                    <option
                      value="₹20,000 - ₹40,000"
                      className="bg-[#1b1b1b] text-white"
                    >
                      ₹20,000 - ₹40,000
                    </option>

                    <option
                      value="₹40,000+"
                      className="bg-[#1b1b1b] text-white"
                    >
                      ₹40,000+
                    </option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="text-sm text-gray-400">Timeline</label>

                  <select
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="  w-full  mt-2  px-5  py-4  rounded-2xl  bg-[#1b1b1b]  border  border-gray-700  text-white  outline-none  transition-all  duration-300  focus:border-orange-500  focus:ring-2  focus:ring-orange-500/30  cursor-pointer
  "
                  >
                    <option value="" className="bg-[#1b1b1b] text-gray-400">
                      Select Timeline
                    </option>

                    <option
                      value="Within 1 Week"
                      className="bg-[#1b1b1b] text-white"
                    >
                      🚀 Within 1 Week
                    </option>

                    <option
                      value="2-3 Weeks"
                      className="bg-[#1b1b1b] text-white"
                    >
                      ⚡ 2–3 Weeks
                    </option>

                    <option value="1 Month" className="bg-[#1b1b1b] text-white">
                      📅 1 Month
                    </option>

                    <option
                      value="1-2 Months"
                      className="bg-[#1b1b1b] text-white"
                    >
                      🗓️ 1–2 Months
                    </option>

                    <option
                      value="More than 2 Months"
                      className="bg-[#1b1b1b] text-white"
                    >
                      ⏳ More than 2 Months
                    </option>

                    <option
                      value="Flexible"
                      className="bg-[#1b1b1b] text-white"
                    >
                      🤝 I'm Flexible
                    </option>
                  </select>
                </div>

                {/* Project Details */}
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-400">
                    Project Details *
                  </label>

                  <textarea
                    rows={6}
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="  w-full  mt-2  p-4  rounded-2xl  bg-white/5  border  border-white/10  focus:border-orange-500  outline-none  resize-none"
                  />
                </div>
              </div>

              {/* Bottom Action Area */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="
                  mt-10
                  pt-8
                  border-t
                  border-white/10
                "
              >
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      Ready to build your project?
                    </h3>

                    <p className="text-gray-400 mt-2">
                      I'll review your requirements and reply within 24 hours.
                    </p>
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(34,197,94,.35)",
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={sendToWhatsApp}
                    className="  w-full  sm:w-auto  px-6  sm:px-8  py-3  sm:py-4  rounded-2xl  bg-green-500  hover:bg-green-600  text-white  font-semibold  text-base  sm:text-lg  flex  items-center  justify-center  gap-3  transition-all  duration-300  shadow-lg  hover:shadow-green-500/40"
                  >
                    <FaWhatsapp className="text-xl sm:text-2xl" />
                    <span>Book Now via WhatsApp</span>
                  </motion.button>
                </div>

                <div className="  mt-8  grid  grid-cols-1  md:grid-cols-3  gap-4">
                  <div className="  rounded-2xl  bg-white/5  border  border-white/10  p-5  text-center">
                    <h4 className="text-orange-500 text-2xl font-bold">⚡</h4>

                    <p className="mt-3 font-semibold">Fast Response</p>

                    <span className="text-gray-400 text-sm">
                      Within 24 Hours
                    </span>
                  </div>

                  <div className="  rounded-2xl  bg-white/5  border  border-white/10  p-5  text-center">
                    <h4 className="text-orange-500 text-2xl font-bold">🔒</h4>

                    <p className="mt-3 font-semibold">Secure Discussion</p>

                    <span className="text-gray-400 text-sm">
                      Your information is safe
                    </span>
                  </div>

                  <div className="  rounded-2xl  bg-white/5  border  border-white/10  p-5  text-center ">
                    <h4 className="text-orange-500 text-2xl font-bold">🚀</h4>

                    <p className="mt-3 font-semibold">Premium Quality</p>

                    <span className="text-gray-400 text-sm">
                      Modern & Responsive Website
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
