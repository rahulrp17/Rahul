import { useState } from "react";
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

  const editorial = filteredProjects.length <= 2;
  const lastIsWide =
    !editorial && (filteredProjects.length - 1) % 2 === 1;

  return (
    <>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <section id="projects" className="nb-section nb-section--white">
        <div className="nb-wrap">
          <div className="nb-head nb-head--split nb-project-head">
            <div className="nb-head__copy">
              <span className="nb-kicker nb-kicker--signal">
                Featured Portfolio
              </span>

              <h2 className="nb-title nb-title--md">
                My Latest <span className="nb-mark">Projects</span>
              </h2>

              <p className="nb-lede">
                A selection of full-stack products and interface experiments,
                built with modern UI, responsive layouts, and clean
                architecture.
              </p>
            </div>

            <div className="nb-project-toolbar">
              <span className="nb-project-toolbar__count">
                <strong>
                  {String(filteredProjects.length).padStart(2, "0")}
                </strong>
                <span>
                  / {String(projects.length).padStart(2, "0")} projects
                </span>
              </span>

              <div
                className="nb-filters"
                role="group"
                aria-label="Filter projects"
              >
                {filters.map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setFilter(item)}
                    aria-pressed={filter === item}
                    className="nb-filter"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="nb-project-grid">
            {filteredProjects.map((project, index) => {
              const isHero = index === 0;
              const isWide =
                editorial ||
                isHero ||
                (lastIsWide && index === filteredProjects.length - 1);

              const projectNumber = String(
                projects.indexOf(project) + 1
              ).padStart(2, "0");

              return (
                <article
                  className={[
                    "nb-project",
                    isHero ? "nb-project--hero" : "",
                    !isHero && isWide ? "nb-project--wide" : "",
                    !isWide ? "nb-project--standard" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="nb-project__media">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      width="1916"
                      height="909"
                      loading="lazy"
                    />

                    <span className="nb-project__num" aria-hidden="true">
                      {projectNumber}
                    </span>

                    {project.featured ? (
                      <span className="nb-project__featured">Featured</span>
                    ) : isHero ? (
                      <span className="nb-project__spotlight">Spotlight</span>
                    ) : null}
                  </div>

                  <div className="nb-project__body">
                    <div className="nb-project__title-row">
                      <h3 className="nb-project__title">{project.title}</h3>

                      <span className="nb-chip">{project.category}</span>
                    </div>

                    <p className="nb-project__description">
                      {project.description}
                    </p>

                    <div className="nb-project__tech">
                      {project.tech.map((tech) => (
                        <span className="nb-chip nb-chip--violet" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="nb-project__actions">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="nb-btn nb-btn--sm nb-btn--ink"
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="nb-btn nb-btn--sm"
                      >
                        <FaGithub aria-hidden="true" />
                        GitHub
                      </a>

                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="nb-project__more"
                      >
                        View Details
                        <FaArrowRight aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
