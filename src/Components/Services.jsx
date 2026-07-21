import { motion } from "framer-motion";
import servicesData from "../Data/servicesData";

export default function Services({ onBookNow }) {
  return (
    <section
      id="services"
      className="relative py-24 px-6 lg:px-20 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="  inline-block  px-5  py-2  rounded-full  bg-orange-500/10  border  border-orange-500/20  text-orange-400  font-semibold">
            MY SERVICES
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
            Websites I Can
            <span className="text-orange-500"> Build </span>
            For You
          </h2>

          <p className="  max-w-3xl  mx-auto  mt-6  text-gray-400  leading-8  text-lg">
            I design and develop fast, modern and responsive websites with
            premium UI, clean code and exceptional user experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="  relative  group  rounded-3xl  overflow-hidden  border  border-white/10  bg-white/5  backdrop-blur-xl  p-8"
            >
              {/* Hover Glow */}
              <div className="  absolute  inset-0  opacity-0  group-hover:opacity-100  transition-all  duration-500  bg-gradient-to-br  from-orange-500/10  via-transparent  to-transparent" />

              {/* Icon */}
              <div
                className={`  relative  w-16  h-16  rounded-2xl  bg-gradient-to-br  ${service.bg}  flex  items-center  justify-center  mb-7`}
              >
                <service.icon className={`text-3xl ${service.color}`} />
              </div>

              {/* Title */}
              <h3 className="relative text-2xl font-bold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-400 leading-8">
                {service.description}
              </p>

              {/* Features */}
              <div className="relative mt-7 space-y-3">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400" />

                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Book Button */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => onBookNow(service.title)}
                className="  relative  mt-8  w-full  py-4  rounded-2xl  bg-gradient-to-r cursor-pointer  from-orange-500  to-orange-600  text-white  font-semibold  shadow-lg  hover:shadow-orange-500/30  transition-all  duration-300"
              >
                Book Now →
              </motion.button>

              {/* Decorative Border */}
              <div className="  absolute  inset-0  rounded-3xl  border  border-orange-500/0  group-hover:border-orange-500/20  transition-all  duration-500  pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="  mt-24  rounded-[35px]  border  border-white/10  bg-gradient-to-r  from-orange-500/10  via-white/5  to-orange-500/10  backdrop-blur-xl  p-10  md:p-14  text-center"
        >
          <h2 className="text-4xl font-bold">Have a Custom Project?</h2>

          <p className="  text-gray-400  mt-5  max-w-3xl  mx-auto  leading-8">
            Every business has unique requirements. Let's discuss your idea and
            build a modern, scalable and premium web application tailored
            specifically for your goals.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onBookNow("Custom Website Development")}
            className="  mt-10  w-full  sm:w-auto  px-6  sm:px-8  lg:px-10  py-3  sm:py-4  rounded-full  bg-orange-500  hover:bg-orange-600  text-white  font-semibold  text-base  sm:text-lg  shadow-xl  hover:shadow-orange-500/20  transition-all  duration-300"
          >
            Start Your Project 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
