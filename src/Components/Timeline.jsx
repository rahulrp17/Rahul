import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    title: "Weather App",
    description:
      "Built a real-time weather application using React and OpenWeather API.",
  },
  {
    year: "2025",
    title: "Food Delivery App",
    description:
      "Developed a responsive food ordering platform with cart functionality.",
  },
  {
    year: "2025",
    title: "Three.js Portfolio Website",
    description:
      "Created a modern animated portfolio using React and Framer Motion.",
  },
  {
    year: "2026",
    title: "Authify",
    description:
      "Built a JWT authentication system with secure login and registration.",
  },
  {
    year: "2026",
    title:"CraftAI Handmade Marketplace",
    description:"Developed a marketplace for handmade products using React and express.js with JWT authentication , Cloudinary uploads, WhatsApp ordering, and  AI chatbot assistant.",
  },
  {
    year: "2026",
    title: "AureliaStay",
    description:
      "Developed a secure and user-friendly hotel booking website with authentication and admin dashboard.",
  },
  {
    year: "2026",
    title: "Cab Booking App",
    description:
      "Developed a complete cab booking platform with responsive UI,live tracking, and admin dashboard,Driver Dashboard,Customer Dashboard.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="min-h-screen px-6 lg:px-20 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-orange-500 text-xl font-semibold">
          Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          My Development Timeline
        </h2>

        <p className="text-gray-400 mt-4">
          Projects and milestones throughout my learning journey.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Desktop Center Line */}
        <div
          className="
            hidden md:block
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            w-1
            h-full
            bg-orange-500
            rounded-full
          "
        />

        {/* Mobile Line */}
        <div
          className="
            md:hidden
            absolute
            left-2
            top-0
            w-1
            h-full
            bg-orange-500
            rounded-full
          "
        />

        {timelineData.map((item, index) => (
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
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative mb-12"
          >
            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-8">
              
              {/* Left Side */}
              <div>
                {index % 2 === 0 && (
                  <div
                    className="
                      bg-white/5
                      backdrop-blur-md
                      border border-white/10
                      rounded-3xl
                      p-6
                      hover:border-orange-500
                      hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]
                      transition-all
                    "
                  >
                    <span className="text-orange-500 font-bold">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-semibold mt-2 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Dot */}
              <div className="flex justify-center">
                <div
                  className="
                    w-5 h-5
                    bg-orange-500
                    rounded-full
                    shadow-[0_0_20px_rgba(249,115,22,0.9)]
                  "
                />
              </div>

              {/* Right Side */}
              <div>
                {index % 2 !== 0 && (
                  <div
                    className="
                      bg-white/5
                      backdrop-blur-md
                      border border-white/10
                      rounded-3xl
                      p-6
                      hover:border-orange-500
                      hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]
                      transition-all
                    "
                  >
                    <span className="text-orange-500 font-bold">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-semibold mt-2 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden pl-12 relative">
              <div
                className="
                  absolute
                  left-0
                  top-6
                  w-5 h-5
                  bg-orange-500
                  rounded-full
                  shadow-[0_0_20px_rgba(249,115,22,0.9)]
                "
              />

              <div
                className="
                  bg-white/5
                  backdrop-blur-md
                  border border-white/10
                  rounded-3xl
                  p-6
                "
              >
                <span className="text-orange-500 font-bold">
                  {item.year}
                </span>

                <h3 className="text-xl font-semibold mt-2 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}