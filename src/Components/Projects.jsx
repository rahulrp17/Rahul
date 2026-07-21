import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import { projects } from "../Data/ProjectData";

const filters = ["All", "Frontend", "Full Stack", "API"];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <section
        id="projects"
        className="relative overflow-hidden py-24 px-5 sm:px-8 lg:px-20 bg-[#0a0a0a]"
      >

        {/* Background Glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-orange-500/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 blur-[160px] rounded-full" />

        <div className="relative max-w-7xl mx-auto">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >

            <span className="inline-flex items-center px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-semibold tracking-widest uppercase text-sm">
              Featured Portfolio
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              My Latest
              <span className="text-orange-500"> Projects</span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-base sm:text-lg leading-8">
              Every project is carefully crafted with modern UI, responsive layouts,
              clean architecture and smooth user experience to deliver real business value.
            </p>

          </motion.div>

          {/* Premium Filter Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filters.map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(item)}
                className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === item
                    ? "bg-orange-500 text-white shadow-[0_10px_35px_rgba(249,115,22,.45)]"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-orange-500 hover:text-white"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -12 }}
                  onClick={() => setSelectedProject(project)}
                 className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_15px_40px_rgba(249,115,22,.22)]"
                >
                  {/* Animated Glow */}

                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/5 to-orange-300/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />

                  {/* Project Number */}

                  <div className="absolute top-5 left-5 z-30 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-sm font-bold text-orange-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Featured Badge */}

                  {project.featured && (
                    <div className="absolute top-5 right-5 z-30 px-4 py-2 rounded-full bg-orange-500 text-white text-xs font-semibold shadow-lg">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Image */}

                  <div className="relative h-54 overflow-hidden">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Dark Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Shine Effect */}

                    <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl opacity-0 group-hover:left-[120%] group-hover:opacity-100 transition-all duration-1000" />

                    {/* View Button */}

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center gap-2 shadow-xl"
                      >
                        View Details
                        <FaArrowRight />
                      </motion.button>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="relative p-5">

                    <div className="flex items-center justify-between mb-4">

                      <h3 className="text-md font-bold group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>

                      <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold">
                        {project.category}
                      </span>

                    </div>

                    <p className="text-sm text-gray-400 leading-6 mb-5 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}

                    <div className="flex flex-wrap gap-2 mb-6">

                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                         className="px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                                        {/* Action Buttons */}

                    <div className="flex flex-col sm:flex-row gap-3">

                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 shadow-lg text-sm hover:shadow-orange-500/40"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center  gap-2 px-5 py-2.5 rounded-full border border-orange-500  hover:bg-orange-500/10 transition-all duration-300 text-sm"  
                      >
                        <FaGithub />
                        GitHub
                      </motion.a>

                    </div>

                    {/* Bottom Line */}

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">

                      <span className="text-sm text-gray-500">
                        Premium Project
                      </span>

                      <motion.button
                        whileHover={{ x: 5 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="flex items-center gap-2 text-orange-400 font-semibold"
                      >
                        Learn More
                        <FaArrowRight className="text-sm" />
                      </motion.button>

                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </>
  );
}