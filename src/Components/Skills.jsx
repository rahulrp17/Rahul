import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const groups = ["Interface", "Frontend", "Backend", "Tooling"];

const skills = [
  {
    name: "HTML5",
    level: 95,
    group: "Interface",
    icon: <FaHtml5 size={30} aria-hidden="true" />,
  },
  {
    name: "CSS3",
    level: 90,
    group: "Interface",
    icon: <FaCss3Alt size={30} aria-hidden="true" />,
  },
  {
    name: "JavaScript",
    level: 85,
    group: "Frontend",
    icon: <FaJs size={30} aria-hidden="true" />,
  },
  {
    name: "React",
    level: 90,
    group: "Frontend",
    icon: <FaReact size={30} aria-hidden="true" />,
  },
  {
    name: "Redux",
    level: 80,
    group: "Frontend",
    icon: <SiRedux size={30} aria-hidden="true" />,
  },
  {
    name: "Tailwind CSS",
    level: 95,
    group: "Interface",
    icon: <SiTailwindcss size={30} aria-hidden="true" />,
  },
  {
    name: "GitHub",
    level: 85,
    group: "Tooling",
    icon: <FaGithub size={30} aria-hidden="true" />,
  },
  {
    name: "Framer Motion",
    level: 80,
    group: "Frontend",
    icon: <SiFramer size={30} aria-hidden="true" />,
  },
  {
    name: "Express",
    level: 80,
    group: "Backend",
    icon: <SiExpress size={30} aria-hidden="true" />,
  },
  {
    name: "MongoDB",
    level: 80,
    group: "Backend",
    icon: <SiMongodb size={30} aria-hidden="true" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="nb-section nb-section--white">
      <div className="nb-wrap">
        <div className="nb-skill-layout">
          <aside className="nb-skill-intro">
            <span className="nb-kicker">My Skills</span>

            <h2 className="nb-title nb-title--md">
              The Toolkit Behind The Work
            </h2>

            <p className="nb-lede">
              A practical, frontend-first stack for building interfaces that
              look sharp, move smoothly, and hold up in production.
            </p>

            <div className="nb-skill-tally">
              <strong>{skills.length}</strong>

              <div>
                <span>Core technologies</span>
                <small>From markup to MongoDB.</small>
              </div>
            </div>

            <div className="nb-skill-legend" aria-label="Skill groups">
              {groups.map((group) => (
                <span className="nb-skill-legend__item" key={group}>
                  <i
                    className={`nb-skill-legend__mark nb-tone--${group.toLowerCase()}`}
                    aria-hidden="true"
                  />
                  {group}
                </span>
              ))}
            </div>
          </aside>

          <div className="nb-skill-board">
            <div className="nb-skill-board__head" aria-hidden="true">
              <span>Skill Index</span>
              <span>Proficiency</span>
            </div>

            {skills.map((skill, index) => (
              <article className="nb-skill-row" key={skill.name}>
                <span className="nb-skill-row__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="nb-skill-row__icon">{skill.icon}</span>

                <div className="nb-skill-row__meta">
                  <h3 className="nb-skill-row__name">{skill.name}</h3>

                  <span
                    className={`nb-skill-row__group nb-tone--${skill.group.toLowerCase()}`}
                  >
                    {skill.group}
                  </span>
                </div>

                <div className="nb-skill-row__meter">
                  <strong className="nb-skill-row__score">
                    {skill.level}%
                  </strong>

                  <div
                    className="nb-meter"
                    role="progressbar"
                    aria-label={`${skill.name} proficiency`}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="nb-meter__fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
