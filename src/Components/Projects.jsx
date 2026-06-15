import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import { projects } from "../Data/ProjectData";

const filters = [
  "All",
  "Frontend",
  "Full Stack",
  "API",
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />

      <section
        id="projects"
        className="min-h-screen px-6 lg:px-20 py-20"
      >
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <p className="text-orange-500 text-xl font-semibold">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured Work
          </h2>

          <p className="text-gray-400 mt-3">
            Explore some of my recent projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() =>
                setFilter(item)
              }
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                filter === item
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:border-orange-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            max-w-7xl
            mx-auto
            
          "
          viewport={{ once: false }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.9,
          }}
          transition={{
            duration: 0.6,
            
          }}
        >
          <AnimatePresence>
            {filteredProjects.map(
              (project, index) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 30,
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
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  onClick={() =>
                    setSelectedProject(
                      project
                    )
                  }
                  className="
                    relative
                    bg-white/5
                    backdrop-blur-md
                    border border-white/10
                    rounded-3xl
                    overflow-hidden
                    cursor-pointer
                    hover:border-orange-500
                    hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]
                    transition-all
                    
                  "
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <span
                      className="
                        absolute
                        top-3
                        right-3
                        z-20
                        bg-orange-500
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        text-white
                      "
                    >
                      Featured
                    </span>
                  )}

                  {/* Image */}
                  <div className="relative group overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-52
                        object-cover
                        transition-all
                        duration-500
                        group-hover:scale-110
                      "
                    />

                    {/* Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/70
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-300
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(
                            project
                          );
                        }}
                        className="
                          px-5
                          py-2
                          bg-orange-500
                          rounded-full
                          text-white
                          cursor-pointer
                          hover:bg-orange-600
                          transition-all
                          duration-300
                        "
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map(
                        (tech) => (
                          <span
                            key={tech}
                            className="
                              px-3
                              py-1
                              rounded-full
                              text-xs
                              bg-orange-500/10
                              text-orange-400
                            "
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                        className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          bg-orange-500
                          rounded-full
                          text-sm
                          hover:bg-orange-600
                        "
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                        className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          border
                          border-orange-500
                          rounded-full
                          text-sm
                          hover:bg-orange-500/10
                        "
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
